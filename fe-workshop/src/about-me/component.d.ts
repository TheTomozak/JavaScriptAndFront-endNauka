export declare class AboutMe extends HTMLElement {
    static readonly observedAttributes: string[];
    constructor();
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    render(me: string): Promise<void>;
}
