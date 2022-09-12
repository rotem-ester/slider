interface sliderInfo {
    range: number
    factor: number
}

const sliderInfoMap = new Map<string, sliderInfo>()
let isDown = false
let activeSlider: string

function calcValueFromPositionX(factor: number, positionX: number, offsetLeft: number, range: number, width: number): string {
    return (factor + (((positionX - offsetLeft) * range) / width)).toFixed(2)
}

function calcPositionXFromValue(value: number, factor: number, width: number, range: number, offsetLeft: number): number {
    return Math.round(( ( (value - factor) * width ) / range ) + offsetLeft)
}

function createValueField(slider: HTMLDivElement, value: number, idSuffix: string): HTMLDivElement {
    const valueField = document.createElement("div")
    valueField.id = "value" + idSuffix
    valueField.className = "value"
    valueField.innerHTML = "Value: " + value.toFixed(2)

    slider.appendChild(valueField)

    return valueField
}

function createCursor(slider: HTMLDivElement, idSuffix: string, positionX: number, positionY: number): HTMLDivElement{
    const cursor = document.createElement("div")
    cursor.id = "cursor" + idSuffix
    cursor.className = "cursor"
    cursor.style["left"] = positionX + "px"
    cursor.style["top"] = (positionY - 5) + "px"

    slider.appendChild(cursor)

    cursor.addEventListener("mousedown", (mouseEvent) => {
        isDown = true
        const parent = cursor.parentElement

        if (parent) {
            activeSlider = parent.id
        }
    })

    return cursor
}

function createBar(slider: HTMLDivElement, range: number, factor: number, idSuffix: string): HTMLDivElement{
    const id = "bar" + idSuffix
    const className = "bar"

    const bar = document.createElement("div")
    bar.id = id
    bar.className = className

    slider.appendChild(bar)

    bar.addEventListener("click", (click) => {
        const pixelStep = 10
        const newValue = calcValueFromPositionX(factor, click.clientX, bar.offsetLeft, range, bar.offsetWidth)
        const value = bar.parentElement?.getElementsByClassName("value")[0]
        const cursor = bar.parentElement?.getElementsByClassName("cursor")[0] as HTMLDivElement
        const movingDirection = click.clientX - parseInt(cursor.style.left)
        let currPosition = parseInt(cursor.style.left)

        const intervalId = setInterval(cursoreMove, 1)

        // util function that describe the cursor moving conditions
        function cursoreMove() {
            if (movingDirection <= 0) {
                if (parseInt(cursor.style.left) <= click.clientX) {
                    cursor.style.left = click.clientX + "px"
                    if (value) {
                        value.innerHTML = "Value: " + newValue
                    }
                    clearInterval(intervalId)
                } else {
                    currPosition -= pixelStep
                    cursor.style.left = currPosition + "px"
                }
            } else {
                if (parseInt(cursor.style.left) >= click.clientX) {
                    cursor.style.left = click.clientX + "px"
                    if (value) {
                        value.innerHTML = "Value: " + newValue
                    }
                    clearInterval(intervalId)
                } else {
                    currPosition += pixelStep
                    cursor.style.left = currPosition + "px"
                }
            }
        }
    })

    return bar
}

function createSlider(min: number, max: number, idSuffix: string, initialValue: number){
    if (initialValue > max) {
        throw new Error("initial value is out of range")
    }

    const range = max - min
    const factor = min      // in case min is != 0, for normalization purpose

    const slider = document.createElement("div")
    slider.id = "slider" + idSuffix
    slider.className = "slider"
    sliderInfoMap.set(slider.id, {range, factor})
    
    document.body.appendChild(slider)

    const bar = createBar(slider, range, factor, idSuffix)
 
    const positionX = calcPositionXFromValue(initialValue, factor, bar.offsetWidth, range, bar.offsetLeft)
    const positionY = bar.offsetTop

    createCursor(slider, idSuffix, positionX, positionY)
    createValueField(slider, initialValue, idSuffix)

    return slider
}

const header = document.createElement("h1")
header.id = "main-header"
header.innerHTML = "Sliders be slidin'"
document.body.appendChild(header)

document.body.addEventListener("mousemove", (mouseEvent) => {
    if (isDown) {
        const slider = document.getElementById(activeSlider)
        const sliderInfo = sliderInfoMap.get(activeSlider)
        const value = slider?.getElementsByClassName("value")[0]
        const cursor = slider?.getElementsByClassName("cursor")[0] as HTMLDivElement
        const bar = slider?.getElementsByClassName("bar")[0] as HTMLDivElement
        const minX = bar.offsetLeft
        const maxX = bar.offsetLeft + bar.offsetWidth
        let newValue = ""

        if (sliderInfo) {
            newValue = calcValueFromPositionX(sliderInfo.factor, mouseEvent.clientX, bar.offsetLeft, sliderInfo.range, bar.offsetWidth)
    
            if (mouseEvent.clientX > maxX) {
                // 20 is the cursor diameter
                cursor.style["left"] = (maxX - 10) + "px"
                newValue = calcValueFromPositionX(sliderInfo.factor, maxX, bar.offsetLeft, sliderInfo.range, bar.offsetWidth)
            } else if (mouseEvent.clientX < minX) {
                cursor.style["left"] = minX + "px"
                newValue = calcValueFromPositionX(sliderInfo.factor, minX, bar.offsetLeft, sliderInfo.range, bar.offsetWidth)
            } else {
                cursor.style["left"] = mouseEvent.clientX + "px"
            }
        }

        if (value) {
            value.innerHTML = "Value: " + newValue
        }
    }
})

document.body.addEventListener("mouseup", (mouseEvent) => {
    isDown = false
    activeSlider = ""
})

const slider1 = createSlider(20, 200, "1", 80.9)
const slider2 = createSlider(-100, 100, "2", 0)
const slider3 = createSlider(0, 100, "3", 45)

