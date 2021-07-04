/*
const x = [ [2], [3, 4], [[5], 6]];

const transformArr = arr =>  arr.reduce((arr, el) => Array.isArray(el) ? [...arr, ...transformArr(el)] : [...arr, el], [])

console.log(transformArr(x));

const applyAll = (func, ...arg) => {
	return func.apply(this, [...arg])
};
console.log(applyAll(Math.max, 2, -2, 3, 6, 7));
console.log(applyAll(Math.min, 2, -2, 3, -4, 0));
*/

/*
const inc = (()=> {
	let counter = 0;
	return ()=> console.log(++counter);
})();
inc();
inc();*/

/*
const word = ['banana', 'orange', 'apple', 'orange', 'orange', 'orange', 'banana'];

const sortMethod = arr => {
	let superSortArr = [];
	const temp = arr.reduce((acc, cur)=>{
		acc[cur] = (acc[cur] || 0) + 1;
		return acc
	}, {});
	for (let key in temp){
		key && superSortArr.push(key)
	}
	//const keys = Object.keys(temp);
	return superSortArr.sort((a,b)=> temp[b]-temp[a]);
};
console.log(sortMethod(word)); //orange, banana, apple
*/
/*
const multiply = [1,2,3,4,5,6,7,8,9,10];
const multiplyFunc = (...arr) => {
	/!*const newArr = [...arr].flat(1);
	let result = [];
	for (let i = 0; i < newArr.length; i++) {
		result.push(newArr[i]*2)
	}
	return result;*!/
	return arr.flat(1).map(el => el*2)
};
console.log(multiplyFunc(multiply));*/

/*const sum = (a,b)=> a+b;
const mul = (a,b)=> a*b;
const calculate = (func)=>{
	return (a)=>{
		return (b)=>{
				return func.apply(this, [a, b])
			}
		}
};
console.log(calculate(sum)(2)(4));
console.log(calculate(mul)(2)(4));*/
for (let i = 1; i <= 10; i++) {
	function foo (x){
		setTimeout(()=>console.log(x), 500)
	}
	foo(i)
}

