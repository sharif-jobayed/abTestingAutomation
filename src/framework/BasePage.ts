import { browser } from "@wdio/globals";
import { PageType, HeightAndWidth, PageInterface } from "./types/Page";
import commonTestData from '../data/commonTestData.json';
import { ElementType } from './types/Element';
import { BaseElement } from './BaseElement';



class BasePage implements PageInterface {
	private pagePath: string;
	private pageName: string;
	private cookieAcceptBtn: BaseElement;


	constructor({ pagePath, pageName, cookieAcceptBtn }: PageType) {
		this.pagePath = pagePath;
		this.pageName = pageName;
		this.cookieAcceptBtn = cookieAcceptBtn;
	}

	async getPagePath(): Promise<string> {
		try {
			return this.pagePath;
		} catch (error) {
			console.error(`Error in BasePage.getPagePath for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async getPageName(): Promise<string> {
		try {
			return this.pageName;
		} catch (error) {
			console.error(`Error in BasePage.getPageName for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async getPageTitle(): Promise<string> {
		try {
			return await browser.getTitle();
		} catch (error) {
			console.error(`Error in BasePage.getPageTitle for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async getCurrentURL(): Promise<string> {
		try {
			return await browser.getUrl();
		} catch (error) {
			console.error(`Error in BasePage.getCurrentURL for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async getFullURL(): Promise<string> {
		try {
			// Note: This requires `BaseURL` to be set in `src/data/commonTestData.json`.
			const url = `${commonTestData.BaseURL}${await this.getPagePath()}`;
			return url;
		} catch (error) {
			console.error(`Error in BasePage.getFullURL for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async getCookieAcceptBtn(): Promise<BaseElement> {
		try {
			return this.cookieAcceptBtn;
		} catch (error) {
			console.error(`Error in BasePage.getCookiePopUp for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async isPageOpen(timeout: number): Promise<boolean> {
		try {
			await browser.waitUntil(
				async () => (await this.getCurrentURL()).includes(this.pagePath),
				{
					timeout,
					timeoutMsg: `Page with path "${this.pagePath}" was not open within ${timeout}ms`
				}
			);
			return true;
		} catch (error) {
			console.error(`Condition 'isPageOpen' failed for page "${this.pageName}":`, error);
			return false;
		}
	}

	async isPageLoaded(timeout: number): Promise<boolean> {
		try {
			await browser.waitUntil(
				async () => (await browser.execute(() => document.readyState)) === 'complete',
				{
					timeout,
					timeoutMsg: `Page did not reach 'complete' readyState within ${timeout}ms`
				}
			);
			return true;
		} catch (error) {
			console.error(`Condition 'isPageLoaded' failed for page "${this.pageName}":`, error);
			return false;
		}
	}

	async hasTestBucketed(timeout: number): Promise<boolean> {
		try {
			// This is a conceptual method checking for a hypothetical 'ab-variant' cookie.
			await browser.waitUntil(async () => (await browser.getCookies(['ab-variant'])).length > 0, {
				timeout,
				timeoutMsg: `A/B test bucketing cookie not found within ${timeout}ms`
			});
			return true;
		} catch (error) {
			console.error(`Condition 'hasTestBucketed' failed for page "${this.pageName}":`, error);
			return false;
		}
	}

	async generatePageName(): Promise<void> {
		try {
			console.log(`Current page context: ${this.pageName} (${this.pagePath})`);
		} catch (error) {
			console.error(`Error in BasePage.generatePageName for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async scrolltoPosition(xAxis: number, yAxis: number): Promise<void> {
		try {
			await browser.execute((x, y) => window.scrollTo(x, y), xAxis, yAxis);
		} catch (error) {
			console.error(`Error in BasePage.scrolltoPosition for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async openPage(): Promise<void> {
		try {
			// Assumes a `baseUrl` is configured in `wdio.conf.ts` for relative paths.
			await browser.url(this.pagePath);
		} catch (error) {
			console.error(`Error in BasePage.openPage for page "${this.pageName}" with path "${this.pagePath}":`, error);
			throw error;
		}
	}

	async resizeWindowBy({ height, width }: HeightAndWidth): Promise<void> {
		try {
			await browser.setWindowSize(width, height);
		} catch (error) {
			console.error(`Error in BasePage.resizeWindowBy for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async goBack(): Promise<void> {
		try {
			await browser.back();
		} catch (error) {
			console.error(`Error in BasePage.goBack for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async goForward(): Promise<void> {
		try {
			await browser.forward();
		} catch (error) {
			console.error(`Error in BasePage.goForward for page "${this.pageName}":`, error);
			throw error;
		}
	}

	async refreshPage(): Promise<void> {
		return browser.refresh();
	}

	async closePage(): Promise<void> {
		try {
			await browser.closeWindow();
		} catch (error) {
			console.error(`Error in BasePage.closePage for page "${this.pageName}":`, error);
			throw error;
		}
	}
}

export default BasePage;
