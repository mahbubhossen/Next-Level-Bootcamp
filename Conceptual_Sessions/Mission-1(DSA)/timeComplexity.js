//Big O(1)

function bigOOne(arr) {
    return arr[1];
}
// console.log(bigOOne(["A","V","D"]));


//Big O(n)
function bigON(arr){
    for(let i of arr){
        // console.log(i);
    }
}
(bigON(["A","V","D"]));


//Big O(n^2)
function bigON2(arr){
    for(let i of arr){
        for(let j of arr){
            // console.log(i,j);
        }
    }
}
(bigON2(["A","V","D"]));


// Big O(log n)
function targetNumber(n){
    while(n>1){
        console.log(n);
        n = Math.floor(n/2);
    }
}

targetNumber(16);