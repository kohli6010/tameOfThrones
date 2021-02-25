import Factory from '../factory';
import Kingdom from '../kingdoms/kingdom';
export class Controller { 
	kingdomAndMessages!: string[][];
	kingdomsName!: string[];
	messages!: string[];
	kingdoms!: Kingdom[];
	factory: Factory;
	constructor() { 
		this.factory = new Factory(); // factory to create new Kingdoms.
	}

	sendKingdomsAndMessages(kingdomsAndMessages: string[][]) { 
		this.kingdomAndMessages = kingdomsAndMessages;
	}

	seperatingKingdomsAndMessages() { 
		this.kingdomsName = this.kingdomAndMessages.map((kingdom) => { 
			return kingdom[0];
		})

		this.messages = this.kingdomAndMessages.map((message) => { 
			return message[1]
		})
	}

	whoWillSpaceRule(): string[] {
		this.seperatingKingdomsAndMessages();
		this.factory.setKingdomNames(this.kingdomsName);
		const kingdoms: Kingdom[] = this.factory.getKingdoms();
		const toRule: string[] = [];
		kingdoms.forEach((kingdom, i) => { 
			kingdom.sendMessage(this.messages[i]);
			if (kingdom.willThisKingdomBeRuled()) { 
				toRule.push(kingdom.getName);
			}
		})

		return toRule;
	}
}