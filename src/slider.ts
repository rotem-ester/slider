import { Bar } from "./bar"
import { Cursor } from "./cursor"
import { ValueField } from "./value"

export class Slider {
    id: string
    className: string
    range: number
    factor: number  // in case the min value is != 0, for normalization purpose
    
    bar: Bar
    cursor: Cursor
    value: ValueField

    element: HTMLDivElement

    constructor(min: number, max: number, idSuffix: string, initialValue: number){
        this.range = max - min
        this.factor = min
        this.id = "slider" + idSuffix
        this.className = "slider"

        this.bar = new Bar(min, max, idSuffix)
        this.cursor = new Cursor(idSuffix)
        this.value = new ValueField(initialValue, idSuffix)

        this.element = this.createHtmlElement()
    }

    private createHtmlElement(): HTMLDivElement {
        const slider = document.createElement("div")
        slider.id = this.id
        slider.className = this.className
        slider.appendChild(this.bar.getElement())
        slider.appendChild(this.cursor.getElement())
        slider.appendChild(this.value.getElement())

        return slider
    }

    getElement() {
        return this.element
    }
}