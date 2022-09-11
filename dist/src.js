class ValueField {
    constructor(value, idSuffix) {
        this.id = "value" + idSuffix;
        this.className = "value";
        this.createElement(value);
    }
    createElement(value) {
        const valueComp = document.createElement("div");
        valueComp.id = this.id;
        valueComp.className = this.className;
        valueComp.innerHTML = "Value: " + value;
        this.element = valueComp;
    }
    getElement() {
        return this.element;
    }
}
class Cursor {
    constructor(idSuffix) {
        this.id = "cursor" + idSuffix;
        this.className = "cursor";
        this.createElement();
    }
    createElement() {
        const cursor = document.createElement("div");
        cursor.id = this.id;
        cursor.className = this.className;
        this.element = cursor;
    }
    getElement() {
        return this.element;
    }
}
class Bar {
    constructor(min, max, idSuffix) {
        this.range = max - min;
        this.factor = min;
        this.id = "bar" + idSuffix;
        this.className = "bar";
        this.createHtmlElement();
    }
    createHtmlElement() {
        const bar = document.createElement("div");
        bar.id = this.id;
        bar.className = this.className;
        this.element = bar;
    }
    getElement() {
        return this.element;
    }
    calcValue(factor, positionX, offsetLeft, range, width) {
        return factor + (((positionX - offsetLeft) * range) / width);
    }
    calcPositionX(value, factor, width, range, offsetLeft) {
        console.log(value, factor, width, range, offsetLeft);
        return Math.round((((value - factor) * width) / range) + offsetLeft);
    }
}
class Slider {
    constructor(min, max, idSuffix, initialValue) {
        this.range = max - min;
        this.factor = min;
        this.id = "slider" + idSuffix;
        this.className = "slider";
        this.bar = new Bar(min, max, idSuffix);
        this.cursor = new Cursor(idSuffix);
        this.value = new ValueField(initialValue, idSuffix);
        this.element = this.createHtmlElement();
    }
    createHtmlElement() {
        const slider = document.createElement("div");
        slider.id = this.id;
        slider.className = this.className;
        slider.appendChild(this.bar.getElement());
        slider.appendChild(this.cursor.getElement());
        slider.appendChild(this.value.getElement());
        return slider;
    }
    getElement() {
        return this.element;
    }
}
const header = document.createElement("h1");
header.id = "main-header";
header.innerHTML = "SLIDER";
document.body.appendChild(header);
const slider1 = new Slider(0, 100, "1", 50);
console.log(slider1.getElement());
document.body.appendChild(slider1.getElement());
//# sourceMappingURL=src.js.map