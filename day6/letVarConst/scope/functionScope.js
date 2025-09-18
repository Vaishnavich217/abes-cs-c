function fun(){
  var a = 20;
  let b = 30;
    const pi = 3.24;
    console.log("blockScope:");
  console.log(a);
  console.log(b);
  console.log(pi);
}
fun();
console.logq("Outside the function:");
console.log(a);
console.log(b);
console.log(pi);
