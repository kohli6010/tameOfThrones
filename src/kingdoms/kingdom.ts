export default class Kingdom {
    private name: string;
    private animal: string;
    characterFrequency: Map<string, number> = new Map();
    private message!: string;

    constructor(name: string, animal: string) {
        this.name = name;
        this.animal = animal;
    }

    get getName(): string {
        return this.name;
    }

    sendMessage(message: string) {
        this.message = message;
    }

	decryptMessage(): boolean {
		const cipher = this.animal.length;
		const newChars: string[] = [];
		for (let i = 0; i < this.message.length; i++) { 
			const charCode: number = this.message.charCodeAt(i);
			const decryptedCharCode: number = charCode - cipher;
			const distanceFromA = 65 - decryptedCharCode;
			if (distanceFromA > 0) {
				newChars.push(String.fromCharCode(90 - distanceFromA + 1));
			} else { 
				newChars.push(String.fromCharCode(decryptedCharCode));
			}
		}
		
		for (let i = 0; i < newChars.length; i++) { 
			if (this.characterFrequency.has(newChars[i])) {
				continue;
			} else { 
				this.characterFrequency.set(newChars[i], 1);
			}
		}

		for (let i = 0; i < this.animal.length; i++) { 
			if (this.characterFrequency.has(this.animal[i])) {
				continue;
			} else { 
				return false;
			}
		}
		return true; 
    }

    willThisKingdomBeRuled(): boolean {
        return this.decryptMessage();
    }
}
