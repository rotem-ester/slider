import { Bar } from "./bar";
import { Cursor } from "./cursor";
import { ValueField } from "./value";
export declare class Slider {
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
