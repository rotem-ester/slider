class ValueField {
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

class Cursor {
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

class Bar {
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

        this.createHtmlElement()

        // this.element.addEventListener()
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

    calcValue(factor: number, positionX: number, offsetLeft: number, range: number, width: number) {
        return factor + (((positionX - offsetLeft)* range) / width)
    }
    
    calcPositionX(value: number, factor: number, width: number, range: number, offsetLeft: number) {
        console.log(value, factor, width, range, offsetLeft)
        return Math.round(( ( (value - factor) * width ) / range ) + offsetLeft)
    }
}

class Slider {
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

const header = document.createElement("h1")
header.id = "main-header"
header.innerHTML = "SLIDER"
document.body.appendChild(header)

const slider1 = new Slider(0, 100, "1", 50)
console.log(slider1.getElement())
document.body.appendChild(slider1.getElement())