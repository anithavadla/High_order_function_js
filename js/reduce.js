//without using built-in Function
const array= [20, 29, 18, 5,8];
let sub = 0;
for(let i = 0; i < array1.length; i++) {
  sub = sub + array[i];
}
console.log(sub); 


//with Using a Higher-Order Function (Reduce)
const array2 = [20, 29, 18, 5, 8];
const sub1 = array2.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sub1); 