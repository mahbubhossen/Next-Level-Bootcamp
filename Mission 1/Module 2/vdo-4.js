// const numbers = [1,2,3,4,5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber)


// const currentUserRole = ["user", "editor", "admin"];
// const featureAccessRole = ["admin", "manager"];

// const canAccess = currentUserRole.some((role) => featureAccessRole.includes(role));
// console.log(canAccess)


// const arr = Array.from([1,2,3], (value, i) => value * value );
// console.log(arr)


const range = (start , stop , step ) => Array.from(
    {length: Math.ceil((stop - start) / step )}, (_, i) => start + i * step
);
console.log(range(1,11,2))