var a = 20;
let b = 30;
const pi = 3.14;
console.log("Global Scope:");
console.log("Value of a in global scope:", a);
console.log("Value of b in global scope:", b);
console.log("Value of pi in global scope:", pi);
function callValues(a, b, pi) {
    console.log(a);
    console.log(b);
    console.log(pi);
}
callValues(a, b, pi);