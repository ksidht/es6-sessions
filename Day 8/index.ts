//Generics

interface Person {
    name:string,
    age?: number
}


function pickItems<X extends Person>(obj: X) {
    
    return obj;
}

let a = pickItems({name:'XYZ'});
console.log(a);

//async and await functions.
async function f() {
    var i = Promise.resolve(1);
    let result = await i;
    alert(result);
}

f();

//Map Operators
var obj = {
    "1": "ABC",
    1: 12,
    true: 'ANC'
};

var map = new Map();
map.set("1","ABC");
map.set(1,12);
map.set(true,"ANC");
map.set(obj,"A")
console.log(obj);
console.log(map);

//Set Operators.
var a = new Set();
a.add("A");
a.add("B");
console.log(a);

//Typescript Unions.
var a:number|number[]|string|string[];

a = 1;
a ="ABC"; 
console.log(a);