//javascript console API
//console.log("Hello World");
// alert("Hi");
// document.write('This is Document dot write')
// console.warn("this is your first warning");
// console.error("this is your first error");
// console.assert(4 == 6);
// var num1 = 25;
// var num2 = 35.56;                                     //let -> local Variable
// console.log(num1 + num2)                              //var -> global variable
                                                         //const -> var that cant be changed
// var str1 = "This is a string";
// var str2 = 'This is also a string';
// console.log(str1,str2);

// var object ={
//     obj1:'Ramu',
//     obj2:'shyam',
//     obj3:'mohan'
// }
// console.log(object);

// var bool1 = true;
// var bool2 = false;
// console.log(bool1,bool2);

// var und;
// var und1 = undefined;
// console.log(und,und1);

// var a = null;
// console.log(a);

/*Data Types
1. Primitives : number,string,boolean,symbol,null,undefined
2. Non Primitives : Arrays , objects
*/

// var arr = [2,4,5,68,5];
// console.log(arr);

// operators
// var a= 100;
// var b = 10;
// console.log('value of a+b is', a+b);
// console.log('value of a-b is', a-b);
// console.log('value of a*b is', a*b);
// console.log('value of a/b is', a/b);

//Function
// function avg(x,y){
//     return (x+y)/2;
// }
// var z = avg(16,4);
// console.log(z);

var arr = [1,2,3,4,5,6];
arr.forEach(function(element){
    console.log(element);
}
)
//different functions for Array and String

// let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());
// console.log(myDate.getTime());

//Dom methods
let id = document.getElementById('click');
id.click();
let classVar = document.getElementsByClassName("container");
console.log(classVar);
console.log(classVar[0]);
classVar[0].classList.add("textColor");
classVar[0].classList.remove("textColor");
console.log(classVar[0].innerHTML);
console.log(classVar[0].innerText);
let tn = document.getElementsByTagName("div");
console.log(tn);

let createdElement = document.createElement('p');
createdElement.innerText = 'This is my Created Element';
tn[0].appendChild(createdElement);
let createdElement2 = document.createElement('a');
createdElement2.innerText = 'This is my Created Element 2';
tn[0].replaceChild(createdElement2,createdElement);

//selecting using query
sel = document.querySelector('.container');
console.log(sel);
sel2 = document.querySelectorAll('.container');
console.log(sel2);

//EventListner

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Clicked";
// })
// firstcontainer.addEventListener('mouseover',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> mouse Over ";
//     console.log("mouse Over");
// })

// temp =  document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> mouse down ";
//     console.log("mouse Down");})
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = temp;
//     console.log("mouse up");
// })                                                               

// Arrow Functions
// function sum(a,b){
//     return a+b;
// }
sum = (a,b)=>{return a+b;}

//setTimeout and setInterval
// logkaro =()=>{
//     console.log("setTimeOut run");
//     document.querySelectorAll('.container')[1].innerHTML = 'SetInterval';
// }
//setTimeout(logkaro,2000); 
//clr = setInterval(logkaro,3000);

//localStorage(every domain have a localStorage on your system,donot put senstive and hectic data here)
// localStorage.setItem('name', 'Rahul');
// localStorage.setItem('age','25');
// localStorage.getItem('name');
// localStorage;
//localStorage.removeItem('name');
//localStorage.clear();

//JSON          //we use JSON so that we can transfer object as a string 
obj = {age: "25", name: "Rahul", length: 2};
console.log(obj);
str = JSON.stringify(obj);         //convert obj to string 
console.log(str);
obj1 = JSON.parse(str);            // convert string to obj
console.log(obj1);
