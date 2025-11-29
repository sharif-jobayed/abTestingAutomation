import { BaseElement } from "../framework/BaseElement";

class Button extends BaseElement {

	constructor(Selector: string, Name: string) {
		super({
			Selector: Selector,
			Name: Name
		});

	}

}

export { Button }
