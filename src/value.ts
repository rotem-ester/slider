export class ValueField {
    id: string
    className: string

    element: HTMLDivElement

    constructor(value: number, idSuffix: string) {
        this.id = "value" + idSuffix
        this.className = "value"

        this.createElement(value)
    }

    private createElement(value: number) {
        const valueComp = document.createElement("div")
        valueComp.id = this.id
        valueComp.className = this.className
        valueComp.innerHTML = "Value: " + value

        this.element = valueComp
    }

    getElement(): HTMLDivElement {
        return this.element
    }
}