var someElts = ['1', '5', 'bar', 'undefined', '6', '1', 'bar', 'undefined', '7', '6'];


var newElements = someElts.sort().reduce(function(someElts, el){
	if(!someElts.length || someElts.length && someElts[someElts.length - 1] != el) {
		someElts.push(el);
	}
	return someElts;
}, []);

console.log( newElements );


