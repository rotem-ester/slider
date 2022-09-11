export class ValueField {
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
//# sourceMappingURL=value.js.map