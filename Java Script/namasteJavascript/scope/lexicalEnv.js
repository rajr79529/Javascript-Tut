var a = 10;
function apple() {
  var b = 20;
  function ball() {
    console.log(b);
    console.log(a);
  }
  ball();
}
apple();

//var a is accessible to appleFn and all the accessible variables of apple is accessible to
//ballFn, so log b and a will be printed correctly.
