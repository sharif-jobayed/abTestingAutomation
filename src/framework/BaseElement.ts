import { $, $$, browser } from '@wdio/globals';
import { ElementType, ElementInterface } from './types/Element';

class BaseElement implements ElementInterface {
	private selector: string;
	private elementName: string;

	constructor({ Selector, Name }: ElementType) {
		this.selector = Selector;
		this.elementName = Name;
	}

	/**
	 * Private getter to fetch the WebdriverIO element & an array of elements.
	 */
	private get element(): Promise<WebdriverIO.Element> {
		return $(this.selector);
	}

	private get elements(): Promise<WebdriverIO.Element[]> {
		return $$(this.selector);
	}

	async getElement() {
		try {
			// await this.element.waitForExist();
			return this.element;
		} catch (error) {
			console.error(`Error getting element "${this.elementName}" (${this.selector}):`, error);
			throw error;
		}
	}

	async getElements() {
		try {
			/* await this.elements.forEach(async (element) => {
				await element.waitForExist();
			}); */
			return this.elements;
		} catch (error) {
			console.error(`Error getting elements "${this.elementName}" (${this.selector}):`, error);
			throw error;
		}
	}

	async getSelector(): Promise<string> {
		try {
			return this.selector;
		} catch (error) {
			console.error(`Error in BaseElement.getSelector for element "${this.elementName}":`, error);
			throw error;
		}
	}

	async getName(): Promise<string> {
		try {
			return this.elementName;
		} catch (error) {
			console.error(`Error in BaseElement.getName for element "${this.elementName}":`, error);
			throw error;
		}
	}

	async getText(): Promise<string> {
		try {
			(await this.element).waitForDisplayed();
			return await (await this.element).getText();
		} catch (error) {
			console.error(`Error getting text from element "${this.elementName}" (${this.selector}):`, error);
			throw error;
		}
	}

	async getAttribute(attribute: string): Promise<string> {
		try {
			(await this.element).waitForExist();
			return (await this.element).getAttribute(attribute);
		} catch (error) {
			console.error(`Error getting attribute "${attribute}" from element "${this.elementName}" (${this.selector}):`, error);
			throw error;
		}
	}

	async getValue(): Promise<string> {
		try {
			(await this.element).waitForDisplayed();
			return (await this.element).getValue();
		} catch (error) {
			console.error(`Error getting value from element "${this.elementName}" (${this.selector}):`, error);
			throw error;
		}
	}

	async doesExist(timeout: number): Promise<boolean> {
		try {
			(await this.element).waitForExist({ timeout });
			return true;
		} catch (error) {
			console.log(`Element "${this.elementName}" (${this.selector}) did not exist within ${timeout}ms.`);
			return false;
		}
	}

	async isVisible(timeout: number): Promise<boolean> {
		try {
			(await this.element).waitForDisplayed({ timeout });
			return true;
		} catch (error) {
			console.log(`Element "${this.elementName}" (${this.selector}) was not visible within ${timeout}ms.`);
			return false;
		}
	}

	async isActive(timeout: number): Promise<boolean> {
		try {
			(await this.element).waitForEnabled({ timeout });
			return true;
		} catch (error) {
			console.log(`Element "${this.elementName}" (${this.selector}) was not enabled within ${timeout}ms.`);
			return false;
		}
	}

	async scrollTo(): Promise<void> {
		try {
			(await this.element).waitForExist();
			(await this.element).scrollIntoView();
		} catch (error) {
			console.error(`Error scrolling element "${this.elementName}" (${this.selector}) into view:`, error);
			throw error;
		}
	}

	async doClick(): Promise<void> {
		try {
			(await this.element).waitForClickable();
			(await this.element).click();
		} catch (error) {
			console.error(`Error clicking on element "${this.elementName}" (${this.selector}):`, error);
			throw error;
		}
	}
}

export { BaseElement }
