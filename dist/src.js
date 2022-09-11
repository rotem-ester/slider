const sliderInfoMap = new Map();
let isDown = false;
let activeSlider;
function calcValueFromPositionX(factor, positionX, offsetLeft, range, width) {
    return (factor + (((positionX - offsetLeft) * range) / width)).toFixed(2);
}
function calcPositionXFromValue(value, factor, width, range, offsetLeft) {
    return Math.round((((value - factor) * width) / range) + offsetLeft);
}
function createValueField(slider, value, idSuffix) {
    const valueField = document.createElement("div");
    valueField.id = "value" + idSuffix;
    valueField.className = "value";
    valueField.innerHTML = "Value: " + value.toFixed(2);
    slider.appendChild(valueField);
    return valueField;
}
function createCursor(slider, idSuffix, positionX, positionY) {
    const cursor = document.createElement("div");
    cursor.id = "cursor" + idSuffix;
    cursor.className = "cursor";
    cursor.style["left"] = positionX + "px";
    cursor.style["top"] = (positionY - 5) + "px";
    slider.appendChild(cursor);
    cursor.addEventListener("mousedown", (mouseEvent) => {
        isDown = true;
        const parent = cursor.parentElement;
        if (parent) {
            activeSlider = parent.id;
        }
    });
    return cursor;
}
function createBar(slider, range, factor, idSuffix) {
    const id = "bar" + idSuffix;
    const className = "bar";
    const bar = document.createElement("div");
    bar.id = id;
    bar.className = className;
    slider.appendChild(bar);
    bar.addEventListener("click", (click) => {
        var _a, _b;
        const newValue = calcValueFromPositionX(factor, click.clientX, bar.offsetLeft, range, bar.offsetWidth);
        const value = (_a = bar.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("value")[0];
        const cursor = (_b = bar.parentElement) === null || _b === void 0 ? void 0 : _b.getElementsByClassName("cursor")[0];
        const movingDirection = -(parseInt(cursor.style.left) - click.clientX);
        let currPosition = parseInt(cursor.style.left);
        const intervalId = setInterval(cursoreMove, 1);
        function cursoreMove() {
            if (parseInt(cursor.style.left) == click.clientX) {
                if (value) {
                    value.innerHTML = "Value: " + newValue;
                }
                clearInterval(intervalId);
            }
            else {
                if (movingDirection < 0) {
                    currPosition--;
                }
                else {
                    currPosition++;
                }
                cursor.style.left = currPosition + "px";
            }
        }
    });
    return bar;
}
function createSlider(min, max, idSuffix, initialValue) {
    if (initialValue > max) {
        throw new Error("initial value is out of range");
    }
    const range = max - min;
    const factor = min;
    const slider = document.createElement("div");
    slider.id = "slider" + idSuffix;
    slider.className = "slider";
    sliderInfoMap.set(slider.id, { range, factor });
    document.body.appendChild(slider);
    const bar = createBar(slider, range, factor, idSuffix);
    const positionX = calcPositionXFromValue(initialValue, factor, bar.offsetWidth, range, bar.offsetLeft);
    const positionY = bar.offsetTop;
    createCursor(slider, idSuffix, positionX, positionY);
    createValueField(slider, initialValue, idSuffix);
    return slider;
}
const header = document.createElement("h1");
header.id = "main-header";
header.innerHTML = "Sliders be slidin'";
document.body.appendChild(header);
document.body.addEventListener("mousemove", (mouseEvent) => {
    if (isDown) {
        const slider = document.getElementById(activeSlider);
        const sliderInfo = sliderInfoMap.get(activeSlider);
        const value = slider === null || slider === void 0 ? void 0 : slider.getElementsByClassName("value")[0];
        const cursor = slider === null || slider === void 0 ? void 0 : slider.getElementsByClassName("cursor")[0];
        const bar = slider === null || slider === void 0 ? void 0 : slider.getElementsByClassName("bar")[0];
        const minX = bar.offsetLeft;
        const maxX = bar.offsetLeft + bar.offsetWidth;
        let newValue = "";
        if (sliderInfo) {
            newValue = calcValueFromPositionX(sliderInfo.factor, mouseEvent.clientX, bar.offsetLeft, sliderInfo.range, bar.offsetWidth);
            if (mouseEvent.clientX > maxX) {
                cursor.style["left"] = (maxX - 20) + "px";
                newValue = calcValueFromPositionX(sliderInfo.factor, maxX, bar.offsetLeft, sliderInfo.range, bar.offsetWidth);
            }
            else if (mouseEvent.clientX < minX) {
                cursor.style["left"] = minX + "px";
                newValue = calcValueFromPositionX(sliderInfo.factor, minX, bar.offsetLeft, sliderInfo.range, bar.offsetWidth);
            }
            else {
                cursor.style["left"] = mouseEvent.clientX + "px";
            }
        }
        if (value) {
            value.innerHTML = "Value: " + newValue;
        }
    }
});
document.body.addEventListener("mouseup", (mouseEvent) => {
    isDown = false;
    activeSlider = "";
});
const slider1 = createSlider(20, 200, "1", 80.9);
const slider2 = createSlider(-100, 100, "2", 0);
const slider3 = createSlider(0, 100, "3", 45);
//# sourceMappingURL=src.js.map