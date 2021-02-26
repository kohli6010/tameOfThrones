import Main from '../src/geektrust';
import { expect } from 'chai';

describe('Test #1', () => {
	it('should return the array of SPACE, AIR, LAND, ICE', () => { 
		const run = new Main('input1.txt');
		const response = run.main();
		expect(response).to.be.eql([ 'SPACE', 'AIR', 'LAND', 'ICE' ])
	})
})

describe('Test #2', () => {
	it('should return the array of SPACE, LAND, ICE, FIRE', () => { 
		const run = new Main('input2.txt');
		const response = run.main();
		expect(response).to.be.eql([ 'SPACE', 'LAND', 'ICE', 'FIRE' ])
	})
})

describe('Test #3', () => {
	it('should return the value NONE', () => { 
		const run = new Main('input3.txt');
		const response = run.main();
		console.log(response)
		expect(response).to.be.eql('NONE')
	})
})