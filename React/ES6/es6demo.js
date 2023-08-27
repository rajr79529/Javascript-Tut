/* let & const
function display() {
    var x = 9;
    if (x > 0) {
        var a = "positive"
    }
    console.log(a);
    const PI = 3.17
    console.log(PI)
    const PERSON = Object.freeze({ firstname: 'nagaraju' })
    PERSON.firstname = 'avdoot'
    console.log(PERSON)
    PERSON.lastname = "setti"
    console.log(PERSON)
}
display();
*/
/* default parameter
function print(a = 0) {
    console.log(a);
}

print();  // undefined
print(5); // 5
print(undefined); // 0
*/
/* rest parameter
// syntax: ...Param_name
// rest parameter must be last formal parameter
function print(b, ...a) {
    console.log(b, a);
}

print(4); // 4
print(4, 6, 8, 10, 12); // 4
*/

/* spread operator
// can only be used with iterables

let n1 = [1, 2, 3];

let n2 = [7, 8, 9]

let nums = [...n1, 4, 5, 6, ...n2]

console.log(nums);

let s = 'hello';
let str = [...s];
console.log(str);
*/

/* destructuring
// array destructring
let nums = [9, 7, 5, 8]

let [a, b, ...c] = nums;
console.log(a, c)

function getNums() {
    return [8, 9]
}

let [x = 0, y = 0] = getNums();
console.log(x, y)

// object destrcturing

let person = { firstname: 'nagaraju', lastname: 'setti' }
// console.log(person.firstname, person.lastname)
let { firstname, lastname } = person;
console.log(fname, lastname)
*/

/* template literals
// backticks (``)
// allow us to write multi line string
// allow us to interpolate variables and expression within string

let template = `<b>Mr. Setti, Good Afternoon</b>
    <p> Very Good Afternoon</p> `

document.write(template)

let fullname = 'nagaraju setti'
console.log(`Fullname: ${fullname}`)

let sql = "insert into products(id, name) values(" + id + ", '" + name + "')";

sql = `insert into products(id, name) values(${id}, '${name}')`
*/















































































