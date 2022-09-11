export function createValueField(value: number, idSuffix: string): HTMLDivElement {
    const valueField = document.createElement("div")
    valueField.id = "value" + idSuffix
    valueField.className = "value"
    valueField.innerHTML = "Value: " + value

    return valueField
}
