
import { browser } from '@wdio/globals';
import { describe, it, beforeEach, afterEach, before, after } from 'mocha';
import { NEW218 } from '../pages/NEW-218';
import commonTestData from '../data/commonTestData.json' assert {type: 'json'};

const new218 = new NEW218();

describe(`Test the NEW-218`, async () => {

	before(async (): Promise<void> => {
		await browser.setWindowSize(commonTestData.Viewports.DesktopViewports.DesktopSmall.Width, commonTestData.Viewports.DesktopViewports.DesktopSmall.Height);
		await new218.openPage();
	});

	/* after(async (): Promise<void> => {
		await browser.closeWindow();
	}); */

	it(`Verify`, async () => {
		console.log(`The test has run`);
	});
});