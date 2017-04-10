/**
 * UniversalPassthrough server version, no-op.
 */
export declare class PassthroughRegistry {
    /**
     * Initialize the registry with the server elements
     */
    static init(): void;
    /**
     * Check if the browser element is already registered
     */
    isRegistered(id: string): boolean;
    /**
     * Register the browser element
     * Replace it with corresponding server element if found
     */
    replaceElement(browserId: string, el: HTMLElement): void;
    /**
     * Removes the element from DOM
     */
    detach(id: string, el: HTMLElement): void;
    /**
     * Adds the element to DOM
     */
    reattach(id: string, el: HTMLElement): void;
}
