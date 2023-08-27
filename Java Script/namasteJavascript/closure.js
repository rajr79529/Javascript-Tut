//1
// function a() {
//   var x = 100;
//   function c() {
//     function b() {
//       console.log(x);
//     }
//     return b;
//   }

//   return c();
// }
// var result = a();
// result();

//2
function a() {
  var x = 100;
  setTimeout(function () {
    console.log(x);
  }, 2000);
  x = 200;
}
a();
