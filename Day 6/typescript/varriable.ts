/*
class Vehicle {
	public name:string;
	constructor(name) {
		this.name = name;	
	}
	
	runs() {
		console.log('ruuns');	
	}
}
var obj = new Vehicle('BMW');*/

interface ParameterSum {
	a:number;
	b:number;
	c?:number;
}


function sum(c: ParameterSum) {
	return a+b;
}

var d = sum(1,2,3,4,5,6);

console.log(d);