export class Bar {
    range: number
    factor: number  // in case the min value is > 0, for normalization purpose
    id: string
    className: string

    element: HTMLDivElement

    constructor(min: number, max: number, idSuffix: string){
        this.range = max - min
        this.factor = min
        this.id = "bar" + idSuffix
        this.className = "bar"
    }

    private createHtmlElement() {
        const bar = document.createElement("div")
        bar.id = this.id
        bar.className = this.className

        this.element = bar
    }

    getElement(): HTMLDivElement {
        return this.element
    }
}