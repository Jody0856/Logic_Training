function foo(input) {
  splitStr =  input.toString().split("");

   return splitStr.filter(arr => {
     return arr!='a' && arr!='i' && arr!='u' && arr!='e' && arr!='o';
   })
    
  
}
console.log(foo("abbdeceijfjndoojkf"));
