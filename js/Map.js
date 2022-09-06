//Without built-in function
const array = [50, 100, 150];
const newArray = [];
for(let i = 0; i < array1.length; i++) {
  newArray.push(array1[i] /5);
}
console.log(newArray);// prints [ 10, 20, 30 ]

//with Using a Higher-Order Function (Map)
let array2 = [50, 100, 150];
array2 = array2.map(i => i / 5);
console.log(array2); // prints [ 10, 20, 30 ]