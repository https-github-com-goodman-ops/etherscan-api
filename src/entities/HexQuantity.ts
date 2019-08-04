
import { Entity } from '../interfaces/Entity'
import { EntityBase } from './EntityBase'
/*
 * @see https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
 */
export class HexQuantity extends EntityBase implements Entity {
	public errorMessage:string =  'invalid'
	private hexString:string
	
	constructor(hexString: string) {
		super()
		this.hexString = hexString
	}

	valid(): boolean {
		var a = parseInt(this.hexString,16);
		return (a.toString(16) === this.hexString)
	}
}