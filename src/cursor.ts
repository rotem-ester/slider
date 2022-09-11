export function createCursor(idSuffix: string): HTMLDivElement{
    const cursor = document.createElement("div")
    cursor.id = "cursor" + idSuffix
    cursor.className = this.className

    return cursor
}



