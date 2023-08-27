var a = 200;
let b = 100;
{
  var a = 20;
  let b = 10;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);
//we can see here a values is changed by block declared a value, as it is in global
//space and refres to same memory location.
//but b values is different in respective blocks as we have different memory locations
//for block-scope variables.
