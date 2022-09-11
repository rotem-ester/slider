export declare class Bar {
    range: number;
    factor: number;
    id: string;
    className: string;
    element: HTMLDivElement;
    constructor(min: number, max: number, idSuffix: string);
    private createHtmlElement;
    getElement(): HTMLDivElement;
}
