
type ElementType = {
	elementPath: string;
	elementName: string;
}

type HeightAndWidth = {
	height: number;
	width: number;
}

type Paddings = {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

type Margins = {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

interface ElementInterface {
	getElementPath(): Promise<string>;

	getElementName(): Promise<string>;

	getElementText(): Promise<string>;

	getElementAttribute(attribute: string): Promise<string>;

	getElementValue(): Promise<string>;

	doesElementExist(timeout: number): Promise<boolean>;

	isElementVisible(timeout: number): Promise<boolean>;

	isElementEnabled(timeout: number): Promise<boolean>;

	scrollToElement(): Promise<void>;

	clickElement(): Promise<void>;
}
