function calcValueFromPositionX(factor, positionX, offsetLeft, range, width) {
    return (factor + (((positionX - offsetLeft) * range) / width)).toFixed(2);
}
function calcPositionXFromValue(value, factor, width, range, offsetLeft) {
    console.log(value, factor, width, range, offsetLeft);
    return Math.round((((value - factor) * width) / range) + offsetLeft);
}
function calcPositionYFromValue(value, factor, width, range, offsetTop) {
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
    cursor.style["top"] = positionY + "px";
    slider.appendChild(cursor);
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
        if (value) {
            value.innerHTML = "Value: " + newValue;
        }
        const cursor = (_b = bar.parentElement) === null || _b === void 0 ? void 0 : _b.getElementsByClassName("cursor")[0];
        if (cursor) {
            cursor.style.left = click.clientX + "px";
        }
        console.log("bar:", bar.offsetWidth, bar.offsetLeft);
    });
    return bar;
}
function createSlider(min, max, idSuffix, initialValue) {
    const range = max - min;
    const factor = min;
    const slider = document.createElement("div");
    slider.id = "slider" + idSuffix;
    slider.className = "slider";
    document.body.appendChild(slider);
    const bar = createBar(slider, range, factor, idSuffix);
    const positionX = calcPositionXFromValue(initialValue, factor, bar.offsetWidth, range, bar.offsetLeft);
    const positionY = slider.offsetTop;
    console.log("cursor:", positionX, positionY);
    createCursor(slider, idSuffix, positionX, positionY);
    createValueField(slider, initialValue, idSuffix);
    return slider;
}
const header = document.createElement("h1");
header.id = "main-header";
header.innerHTML = "SLIDER";
document.body.appendChild(header);
const slider1 = createSlider(0, 100, "1", 50);
//# sourceMappingURL=src.js.map