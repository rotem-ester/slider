export function createValueField(value, idSuffix) {
    const valueField = document.createElement("div");
    valueField.id = "value" + idSuffix;
    valueField.className = "value";
    valueField.innerHTML = "Value: " + value;
    return valueField;
}
//# sourceMappingURL=value.js.map