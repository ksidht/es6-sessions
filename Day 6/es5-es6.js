//ES6 Class
class Vehicle {
	constructor(engine) {
		this.engine = engine;

	}

	runs() {
		console.log('Vehicle Engine'+ this.engine);
	}

}

class Car extends Vehicle {
	
	constructor(name) {
		var engine = 2000;
		super(2000);
		this.name = name;
	}
}
//ES5 Class

function Vehicle(engine) {
	this.engine = engine;
}

Vehicle.prototype.runs = function() {
	console.log('Vehicle Engine'+ this.engine);
}

function Vehicle(engine) {
	this.engine = engine;
}
Vehicle.prototype.runs = function() {
	console.log('Vehicle Engine'+ this.engine);
}

function Car(name) {
	this.name = name;
	var engine = 2000;
	Vehicle.call(this, engine);
}
Car.prototype = Object.create(Vehicle.prototype);


var obj = new Car('BMW');
obj.runs();

