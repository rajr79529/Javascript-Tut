// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej({ message: "promise rejected" });
//   }, 3000);
// });
// // console.log(promise);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.resolve("Success").then((data) => console.log(data));

async function x() {
  try {
    await Promise.reject("Rejected!!");
  } catch (e) {
    console.log(e);
  }
}

x().catch((msg) => {
  console.log(msg);
});
