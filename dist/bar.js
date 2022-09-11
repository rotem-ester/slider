export function createBar(min, max, idSuffix) {
    const range = max - min;
    const factor = min;
    const id = "bar" + idSuffix;
    const className = "bar";
    const bar = document.createElement("div");
    bar.id = id;
    bar.className = className;
    return bar;
}
export function addBarEventListeners() {
    this.element.addEventListener("click", this.clickEventListener);
}
export function getCursor() {
    var _a;
    return (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("cursor")[0];
}
export function getValue() {
    var _a;
    return (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("value")[0];
}
//# sourceMappingURL=bar.js.map