
class Greeter {
    
    @propertyDecorator() greeting:string;

    constructor(@requireed message:string){
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

function propertyDecorator() {
    return function(target, key) {
        
            console.log('Hello');
        
    }
}

var a = new Greeter('CDE');
console.log(a.greet());