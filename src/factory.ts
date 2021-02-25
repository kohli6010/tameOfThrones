import Kingdom from './kingdoms/kingdom';

export default class Factory {
	public kingdoms!: string[];
	public kingdomObjects: Kingdom[] = [];
	constructor() { }

	public setKingdomNames(kingdoms: string[]) { 
		this.kingdoms = kingdoms;
		this.kingdoms.forEach(kingdom => { 
			if (kingdom == "AIR") { 
				this.kingdomObjects.push(new Kingdom('AIR', 'OWL'));
			}

			if (kingdom == "LAND") {
				this.kingdomObjects.push(new Kingdom('LAND', 'PANDA'));
			}
			
			if (kingdom == "WATER") { 
				this.kingdomObjects.push(new Kingdom('WATER', 'OCTOPUS'));
			}

			if (kingdom == "ICE") { 
				this.kingdomObjects.push(new Kingdom('ICE', 'MAMMOTH'));
			}

			if (kingdom == "FIRE") { 
				this.kingdomObjects.push(new Kingdom('FIRE', 'DRAGON'));
			}
		})
	}
	
	public getKingdoms(): Kingdom[] {
		return this.kingdomObjects;
	}
}