const numbers = [40,100,1,5,25,10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// const sortedNumber = numbers.sort();

// const sortedNumber = numbers.sort((a, b) => a - b); // small to large (ascending order)
const sortedNumber = numbers.sort((a, b) => b - a); // large to small (descending order)

const sortedFruits = fruits.sort((a,b) => a.localeCompare(b)); //alphabetical order

// console.log(numbers)
// console.log(sortedNumber);
// console.log(fruits);
// console.log(sortedFruits);


const arr = [1,2,3,[4,5, [6,7, [8,9,[10,11]]]]];
const flatArr = arr.flat(Infinity);
// console.log(flatArr)

const tagsFromPosts = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"]
];
const filterTags = new Set (tagsFromPosts.flat());
console.log(filterTags)