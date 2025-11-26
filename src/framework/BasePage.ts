import { PageType, HeightAndWidth, PageInterface } from "./types/Page";

class BasePage implements PageInterface {
	private pagePath: string;
	private pageName: string;

	constructor({ pagePath, pageName }: PageType) {
		this.pagePath = pagePath;
		this.pageName = pageName;
	}

	async getPagePath(): Promise<string> {
		try {
			return this.pagePath;
		} catch (error) {
			throw new Error(error);			
		}
		
	}
	async getPageName(): Promise<string> {
		throw new Error("Method not implemented.");
	}
	async getPageTitle(): Promise<string> {
		throw new Error("Method not implemented.");
	}
	async getFullURL(): Promise<string> {
		throw new Error("Method not implemented.");
	}
	async isCookiesPopUpVisible(timeout: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async isPageOpen(timeout: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async isPageLoaded(timeout: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async hasTestBucketed(timeout: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async generatePageName(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	async scrolltoPosition(xAxis: number, yAxis: number): Promise<void> {
		throw new Error("Method not implemented.");
	}
	async openPage(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	async resizeWindowBy({ height, width }: HeightAndWidth): Promise<void> {
		throw new Error("Method not implemented.");
	}
	async closePage(): Promise<void> {
		throw new Error("Method not implemented.");
	}
}