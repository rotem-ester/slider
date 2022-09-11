declare class ValueField {
    id: string;
    className: string;
    element: HTMLDivElement;
    constructor(value: number, idSuffix: string);
    private createElement;
    getElement(): HTMLDivElement;
}
declare class Cursor {
    id: string;
    className: string;
    initPositionX: number;
    initPositionY: number;
    element: HTMLDivElement;
    constructor(idSuffix: string);
    private createElement;
    getElement(): HTMLDivElement;
}
declare class Bar {
    range: number;
    factor: number;
    id: string;
    className: string;
    element: HTMLDivElement;
    constructor(min: number, max: number, idSuffix: string);
    private createHtmlElement;
    getElement(): HTMLDivElement;
    calcValue(factor: number, positionX: number, offsetLeft: number, range: number, width: number): number;
    calcPositionX(value: number, factor: number, width: number, range: number, offsetLeft: number): number;
}
declare class Slider {
    id: string;
    className: string;
    range: number;
    factor: number;
    bar: Bar;
    cursor: Cursor;
    value: ValueField;
    element: HTMLDivElement;
    constructor(min: number, max: number, idSuffix: string, initialValue: number);
    private createHtmlElement;
    getElement(): HTMLDivElement;
}
declare const header: HTMLHeadingElement;
declare const slider1: Slider;
