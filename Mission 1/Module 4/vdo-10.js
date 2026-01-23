// insertion sort ([5,3,8,4,2]);

/*
firstly : [5,3,8,4,2] => [3,5,8,4,2]
secondly : [3,5,8,4,2] => [3,5,8,4,2]
thirdly : [3,5,8,4,2] => [3,4,5,8,2]
fourthly : [3,4,5,8,2] => [2,3,4,5,8]
*/

// worst case : 0(n^2)
// best case : 0(n)
const insertionSort = (arr) => {
    for(let i=1; i< arr.length; i++){
        let current = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort([5,3,8,4,2]));