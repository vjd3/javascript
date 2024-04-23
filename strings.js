let str1 = 'Hello';
let str2 = "World";
let str3 = `JavaScript`;
let str4 = str1 + ', ' + str2 + ' written in ' + str3;
let sl1 = 14; sl2 = 19;

console.log(str1, str2, str3);
console.log(typeof str1, typeof str2, typeof str3);
console.log(str1 + ' ' + str2 + ' ' + str3);
console.log('********');
console.log('1 + 2 = ' + (1 + 2));
console.log('********');
console.log(`1 + 2 = ${1 + 2}`);
console.log('********');

console.log('length of string 2 (' + str2 + ') = ' + str2.length)
console.log('********');

console.log('Second character of string 1 (' + str1 + ') = ' + str1.charAt(1));

console.log(str1.concat(', ', str2, ' written in ', str3));

console.log('In the phrase "' + str4 + '" chracters from ' + sl1 + ' to ' + sl2 + ' are: ' + str4.slice(14, 19));
console.log('In the phrase "' + str4 + '" chracters from ' + sl1 + ' to ' + sl2 + ' are: ' + str4.substring(14, 19));

console.log('********');

console.log(str4.toUpperCase());