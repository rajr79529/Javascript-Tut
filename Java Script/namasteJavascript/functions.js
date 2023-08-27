var a = 10;
first();
second();
console.log("a", a);
function first() {
  var a = 100;
  console.log("a", a);
}
function second() {
  var a = 1000;
  console.log("a", a);
}
