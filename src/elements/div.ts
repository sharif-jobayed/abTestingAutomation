import { BaseElement } from "../framework/BaseElement";

class Div extends BaseElement {

	constructor(Selector: string, Name: string) {
		super({
			Selector: Selector,
			Name: Name
		});

	}

}

export { Div }
