var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.runs = function () {
        console.log('ruuns');
    };
    return Vehicle;
}());
var obj = new Vehicle('BMW');
