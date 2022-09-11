declare function calcValue(factor: number, positionX: number, offsetLeft: number, range: number, width: number): number;
declare function calcPositionX(value: number, factor: number, width: number, range: number, offsetLeft: number): number;
declare function createValueField(value: number, idSuffix: string): HTMLDivElement;
declare function createCursor(idSuffix: string): HTMLDivElement;
declare function createBar(min: number, max: number, idSuffix: string): HTMLDivElement;
declare function createSlider(min: number, max: number, idSuffix: string, initialValue: number): HTMLDivElement;
declare const header: HTMLHeadingElement;
declare const slider1: HTMLDivElement;
