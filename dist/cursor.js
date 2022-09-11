export class Cursor {
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
//# sourceMappingURL=cursor.js.map