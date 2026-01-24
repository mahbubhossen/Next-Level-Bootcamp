function isort(arr){
    for(let i=1; i< arr.length; i++){
        let key = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

const num = [2,5,8,1,4];
console.log(isort(num));