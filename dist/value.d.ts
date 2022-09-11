export declare class ValueField {
    id: string;
    className: string;
    element: HTMLDivElement;
    constructor(value: number, idSuffix: string);
    private createElement;
    getElement(): HTMLDivElement;
}
