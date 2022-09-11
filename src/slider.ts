
import { createBar } from "./bar"
import { createCursor } from "./cursor"
import { createValueField } from "./value"


export function createSlider(min: number, max: number, idSuffix: string, initialValue: number){
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


