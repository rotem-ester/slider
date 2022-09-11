function calcValue(factor: number, positionX: number, offsetLeft: number, range: number, width: number) {
    return factor + (((positionX - offsetLeft) * range) / width)
}

function calcPositionX(value: number, factor: number, width: number, range: number, offsetLeft: number) {
    console.log(value, factor, width, range, offsetLeft)
    return Math.round(( ( (value - factor) * width ) / range ) + offsetLeft)
}

function createValueField(value: number, idSuffix: string): HTMLDivElement {
    const valueField = document.createElement("div")
    valueField.id = "value" + idSuffix
    valueField.className = "value"
    valueField.innerHTML = "Value: " + value

    return valueField
}

function createCursor(idSuffix: string): HTMLDivElement{
    const cursor = document.createElement("div")
    cursor.id = "cursor" + idSuffix
    cursor.className = "cursor"

    return cursor
}

function createBar(min: number, max: number, idSuffix: string): HTMLDivElement{
    const range = max - min
    const factor = min
    const id = "bar" + idSuffix
    const className = "bar"

    const bar = document.createElement("div")
    bar.id = id
    bar.className = className

    return bar
}

function createSlider(min: number, max: number, idSuffix: string, initialValue: number){
    const range = max - min
    const factor = min
 
    const slider = document.createElement("div")
    slider.id = "slider" + idSuffix
    slider.className = "slider"
    slider.appendChild(createBar(min, max, idSuffix))
    slider.appendChild(createCursor(idSuffix))
    slider.appendChild(createValueField(initialValue, idSuffix))

    return slider
}

const header = document.createElement("h1")
header.id = "main-header"
header.innerHTML = "SLIDER"
document.body.appendChild(header)

const slider1 = createSlider(0, 100, "1", 50)
document.body.appendChild(slider1)

