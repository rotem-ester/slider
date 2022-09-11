export class Bar {
    constructor(min, max, idSuffix) {
        this.range = max - min;
        this.factor = min;
        this.id = "bar" + idSuffix;
        this.className = "bar";
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
}
//# sourceMappingURL=bar.js.map