import process from 'process';
import fs from 'fs';
import { FileProcessor } from './processor/fileprocessor';

class Main {
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
		if (response.length < 1) { 
			return 'None';
		}
		response.unshift("SPACE");
		return response;
	}
}

const run = new Main(process.argv[2]);
console.log(run.main());