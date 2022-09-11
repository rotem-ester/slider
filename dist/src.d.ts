interface sliderInfo {
    range: number;
    factor: number;
}
declare const sliderInfoMap: Map<string, sliderInfo>;
declare let isDown: boolean;
declare let activeSlider: string;
declare function calcValueFromPositionX(factor: number, positionX: number, offsetLeft: number, range: number, width: number): string;
declare function calcPositionXFromValue(value: number, factor: number, width: number, range: number, offsetLeft: number): number;
declare function calcPositionYFromValue(value: number, factor: number, width: number, range: number, offsetTop: number): void;
declare function createValueField(slider: HTMLDivElement, value: number, idSuffix: string): HTMLDivElement;
declare function createCursor(slider: HTMLDivElement, idSuffix: string, positionX: number, positionY: number): HTMLDivElement;
declare function createBar(slider: HTMLDivElement, range: number, factor: number, idSuffix: string): HTMLDivElement;
declare function createSlider(min: number, max: number, idSuffix: string, initialValue: number): HTMLDivElement;
declare const header: HTMLHeadingElement;
declare const slider1: HTMLDivElement;
