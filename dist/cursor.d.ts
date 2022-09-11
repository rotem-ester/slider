export declare class Cursor {
    id: string;
    className: string;
    initPositionX: number;
    initPositionY: number;
    element: HTMLDivElement;
    constructor(idSuffix: string);
    private createElement;
    getElement(): HTMLDivElement;
}
