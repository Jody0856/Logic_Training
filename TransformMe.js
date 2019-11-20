function foo(input) {
   return allArr =  input.map(value => {
   	return value.toString() + value; 
   })
}
console.log(foo([1, 2, 3]));
// [1, 22, 333]
