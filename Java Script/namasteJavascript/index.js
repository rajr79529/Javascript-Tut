setTimeout(function () {
  console.log("setTimeOut Function");
}, 5000);

function a(b) {
  console.log("In Function A");
  b();
}
a(function b() {
  console.log("In Fn B");
});
