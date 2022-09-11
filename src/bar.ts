export function createBar(min: number, max: number, idSuffix: string): HTMLDivElement{
    const range = max - min
    const factor = min
    const id = "bar" + idSuffix
    const className = "bar"

    const bar = document.createElement("div")
    bar.id = id
    bar.className = className

    return bar
}

export function addBarEventListeners() {
    this.element.addEventListener("click", this.clickEventListener)
}

// export function clickBarEventListener(click: MouseEvent) {
//     console.log(this.factor, click.clientX, this.offsetLeft, this.range, this.offsetWidth)
//     // update new value
//     const newValue = calcValue(this.factor, click.clientX, this.offsetLeft, this.range, this.offsetWidth)
//     const value = this.getValue()

//     if (value) {
//         value.innerHTML = "Value: " + newValue
//     }
    
//     // update cursor position
//     const cursor = this.getCursor()
//     if (cursor) {
//         cursor.style.left = click.clientX + "px"
//     }
// }



export function getCursor(): HTMLDivElement | undefined {
    return this.element.parentElement?.getElementsByClassName("cursor")[0] as HTMLDivElement
}

export function getValue() : HTMLDivElement | undefined {
    return this.element.parentElement?.getElementsByClassName("value")[0] as HTMLDivElement
}
