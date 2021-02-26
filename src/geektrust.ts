import process from 'process';
import fs from 'fs';
import { FileProcessor } from './processor/fileprocessor';

export default class Main {
	argument: string;
	fileProcessor: FileProcessor;

	constructor(arg: string) { 
		this.argument = arg;
		this.fileProcessor = new FileProcessor();
	}

	main(): Array<string> | string { 
		const file = fs.readFileSync(this.argument, 'utf-8');
		this.fileProcessor.setFile(file);
		const response = this.fileProcessor.contentProcessor();
		if (response.length < 3) { 
			return 'NONE';
		}
		response.unshift("SPACE");
		return response;
	}
}
