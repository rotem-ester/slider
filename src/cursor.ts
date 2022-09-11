export class Cursor {
    id: string
    className: string
    initPositionX: number
    initPositionY: number

    element: HTMLDivElement

    constructor(idSuffix: string){
        this.id = "cursor" + idSuffix
        this.className = "cursor"

        this.createElement()
    }

    private createElement() {
        const cursor = document.createElement("div")
        cursor.id = this.id
        cursor.className = this.className

        this.element = cursor
    }

    getElement(): HTMLDivElement {
        return this.element
    }
}