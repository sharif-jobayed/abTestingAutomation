
import { ElementType } from './Element';
import { BaseElement } from '../BaseElement';

type PageType = {
	PagePath: string;
	PageName: string;
	CookiePopup: BaseElement;
	CookieAcceptBtn: BaseElement;
}

type HeightAndWidth = {
	Height: number;
	Width: number;
}

interface PageInterface {
	getPagePath(): Promise<string>;

	getPageName(): Promise<string>;

	getPageTitle(): Promise<string>;

	getCurrentURL(): Promise<string>;

	getFullURL(): Promise<string>;

	getCookiePopup({ Selector, Name }: ElementType): Promise<BaseElement>;

	getCookieAcceptBtn(): Promise<BaseElement>;

	isPageOpen(timeout: number): Promise<boolean>;

	isPageLoaded(timeout: number): Promise<boolean>;

	hasTestBucketed(timeout: number): Promise<boolean>;

	generatePageName(): Promise<void>;

	scrolltoPosition(xAxis: number, yAxis: number): Promise<void>;

	openPage(): Promise<void>;

	resizeWindowBy({ Height, Width }: HeightAndWidth): Promise<void>;

	goBack(): Promise<void>;

	goForward(): Promise<void>;

	refreshPage(): Promise<void>;

	closePage(): Promise<void>;
}

export { PageType, HeightAndWidth, PageInterface }
