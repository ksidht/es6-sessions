interface ParameterSum {
	readonly a:number;
	b:number;
	c?:number;
}


function sum(c: ParameterSum) {
	return a+b;
}

var d = sum(1,2,3,4,5,6);

console.log(d);
