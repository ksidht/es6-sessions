
class Vehicle {
	public name:string;
	constructor(name) {
		this.name = name;	
	}
	
	runs() {
		console.log('ruuns');	
	}
}
var obj = new Vehicle('BMW');