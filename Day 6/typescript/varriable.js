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
function sum(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b;
}
var d = sum(1, 2, 3, 4, 5, 6);
console.log(d);
