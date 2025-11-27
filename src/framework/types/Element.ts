
type ElementType = {
	Selector: string;
	Name: string;
}

interface ElementInterface {
	getSelector(): Promise<string>;

	getName(): Promise<string>;

	getText(): Promise<string>;

	getAttribute(attribute: string): Promise<string>;

	getValue(): Promise<string>;

	doesExist(timeout: number): Promise<boolean>;

	isVisible(timeout: number): Promise<boolean>;

	isActive(timeout: number): Promise<boolean>;

	scrollTo(): Promise<void>;

	doClick(): Promise<void>;
}

export { ElementType, ElementInterface }
