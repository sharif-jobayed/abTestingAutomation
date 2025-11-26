
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

	openPage(): Promise<void>;

	closePage(): Promise<void>;
}

type PageType = {
	pagePath: string;
	pageName: string;
}

export {PageInterface, PageType}
