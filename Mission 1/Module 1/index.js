const arr = ["apple", "banana", "mango", "apple"];

//brute force 
const removeDupArr = (arr) => {
    const newArray = [];
    
    arr.forEach((element) => {
        if(!newArray.includes(element)){
            newArray.push(element)
        }

    });

    return newArray;
}
console.log(removeDupArr(arr));


//using set 
const removeDupSet = (arr) => {
    const set = new Set(arr);

    return Array.from(set);
}
console.log(removeDupSet(arr))

