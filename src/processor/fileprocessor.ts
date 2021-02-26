import { Controller } from '../controller/controller';

export default class FileProcessor { 
	file!: string;
	controller: Controller;
	constructor() { 
		this.controller = new Controller();
	}

	setFile(file: string) {
		this.file = file;
	}

	contentProcessor(): Array<string> { 
		const contentByLine = this.file.split("\r\n");
		const contentBySpace = contentByLine.map(content => { 
			return content.split(" ");
		})
		this.controller.sendKingdomsAndMessages(contentBySpace);
		return this.controller.whoWillSpaceRule();
	}
}