// Use of Some : if any condition is true then it will return true 

// const numbers = [1,2,3,4,5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber)


// how to use some for checking user role and access permission : 

// const currentUserRole = ["user", "editor", "admin"];
// const featureAccessRole = ["admin", "manager"];
// const canAccess = currentUserRole.some((role) => featureAccessRole.includes(role));
// console.log(canAccess)


// Array.from : it creates array from array like object or iterable object .

// const arr = Array.from({ length: 5 });
// console.log(arr);

// const arr = Array.from({ length: 5 }).fill(0);  // we can fill anything here 0,null etc..
// console.log(arr);

// const arr = Array.from({ length: 5 }, (_, i) => i);
// console.log(arr);

// const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr); 


// const arr = Array.from([1,2,3], (value, i) => value * value );
// console.log(arr)


// range is a function that creates an array of numbers within a specified range with a given step value.
// like here : start is 1 , stop is 11 , and step is 2 that means it will start from 1 and go to 11 with a step of 2 .
// so the output will be [1,3,5,7,9]
/*
const range = (start , stop , step ) => Array.from(
    {length: Math.ceil((stop - start) / step )}, (_, i) => start + i * step
);
console.log(range(1,11,2))
*/