var someElts = ['1', '5', 'bar', 'undefined', '6', '1', 'bar', 'undefined', 1, 1, 1,  '7', '6'];
function elArr (arr){
	var result =[];
	for (var item of arr){
		if (result.indexOf(item)<0){
			result.push(item);
		}
	}
	return result;
}
elArr(someElts);


/*  Если добавить элементы в вар то сработает не правильно ( элементы 1 будет сравнивать не обращая внимания на тип что является ошибкой)
var someElts = ['1', '5', 'bar', 'undefined', '6', '1', 'bar', 'undefined', 1, 1, 1,  '7', '6'];


Вариант №1
var someElts = ['1', '5', 'bar', 'undefined', '6', '1', 'bar', 'undefined', '7', '6'];


var newElements = someElts.sort().reduce(function(someElts, el){
	if(!someElts.length || someElts.length && someElts[someElts.length - 1] != el) {
		someElts.push(el);
	}
	return someElts;
}, []);

console.log( newElements ); */





/* Вариант №2
var someElts = ['1', '5', 'bar', 'undefined', '6', '1', 'bar', 'undefined', 1, 1, 1,  '7', '6'];


var newElements = someElts.sort().reduce(function(someElts, el){
	if(!someElts.length || someElts.length && someElts[someElts.length - 1] !== el) {
		someElts.push(el);
	}
	return someElts;
}, []);

console.log( newElements ); */