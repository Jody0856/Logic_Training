function foo(input) {
    splitStr =  input.toString().split("");
    revArr 	 =	splitStr.reverse();
    return revArr.join("")
}
console.log(foo(12345));
