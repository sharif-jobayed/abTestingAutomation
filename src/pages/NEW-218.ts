import BasePage from "../framework/BasePage";
import { BaseElement } from "../framework/BaseElement";

class NEW218 extends BasePage {

	constructor() {
		super({
			pagePath: `https://newshades.de/rollo-nach-mass/farbwelt-grau?ablyft_preview=65967022_66405349,28285978_12928034,65080195_81324457,27559468_53829199,64120252_36267924,99817635_91249384?qa=true`,
			pageName: `NEW-218 preview page`,
			cookieAcceptBtn: new BaseElement({
				Selector: `(//button[normalize-space()='Cookies zulassen'])`,
				Name: `Cookie Accept Button`
			})
		});
	}

	async isCookiesPopUpVisible(timeout: number): Promise<boolean> {
		try {
			return (await this.getCookieAcceptBtn()).isVisible(timeout);
		} catch (error) {
			console.error(`Error in NEW218.isCookiesPopUpVisible):`, error);
			throw error;
		}
	}

	async clickCookieAcceptBtn(): Promise<void> {
		try {
			return (await this.getCookieAcceptBtn()).doClick();
		} catch (error) {
			console.error(`Error in NEW218.clickCookieAcceptBtn):`, error);
			throw error;
		}
	}

}

export { NEW218 }