//fruits

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits); //outputs the whole structure

console.log(fruits[1]); //outputs the second item in the array

console.log(fruits.length); //outputs the length of the array

fruits.push('pear'); //adds an item to the end of the array
console.log(fruits); //outputs the whole structure

fruits.pop(); //removes the last item in the array
console.log(fruits); //outputs the whole structure

fruits.shift(); //removes the first item in the array
console.log(fruits); //outputs the whole structure

fruits.unshift('mango'); //adds an item to the beginning of the array
console.log(fruits); //outputs the whole structure

fruits.splice(1, 0, 'kiwi'); //adds an item to the array at the specified index
console.log(fruits); //outputs the whole structure

fruits.splice(1, 1); //removes an item from the array at the specified index
console.log(fruits); //outputs the whole structure

fruits.reverse(); //reverses the order of the array
console.log(fruits); //outputs the whole structure

fruits.sort(); //sorts the array
console.log(fruits); //outputs the whole structure

