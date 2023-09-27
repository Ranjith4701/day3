let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};
let A = Object.keys(obj1).sort();
let B = Object.keys(obj2).sort();
console.log(A);
console.log(B);
if(JSON.stringify(A) === JSON.stringify(B))
{
    console.log("equal");
}else{
    console.log("not equal");
}

