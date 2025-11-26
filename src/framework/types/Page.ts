
type PageType = {
	pagePath: string;
	pageName: string;
}

type HeightAndWidth = {
	height: number;
	width: number;
}

interface PageInterface {
	getPagePath(): Promise<string>;

	getPageName(): Promise<string>;

	getPageTitle(): Promise<string>;

	getFullURL(): Promise<string>;

	isCookiesPopUpVisible(timeout: number): Promise<boolean>;

	isPageOpen(timeout: number): Promise<boolean>;

	isPageLoaded(timeout: number): Promise<boolean>;

	hasTestBucketed(timeout: number): Promise<boolean>;

	generatePageName(): Promise<void>;

	scrolltoPosition(xAxis: number, yAxis: number): Promise<void>;

	openPage(): Promise<void>;

	resizeWindowBy({ height, width }: HeightAndWidth): Promise<void>;

	closePage(): Promise<void>;
}

export { PageType, HeightAndWidth, PageInterface }
