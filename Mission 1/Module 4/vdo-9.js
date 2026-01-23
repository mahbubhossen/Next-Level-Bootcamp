// selectionSort([5, 3, 8, 4, 2]);

/*
first iteration : 2, 3, 8, 4, 5
second iteration : 2, 3, 4, 8, 5
third iteration : 2, 3, 4, 5, 8
fourth iteration : 2, 3, 4, 5, 8
*/

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    console.log("state of array : ", array);
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {

      //classical method
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;

      //ES6 method
      // [array[i], array[minIndex]] = [array[minIndex], array[i]];

    }
    console.log(`After pass ${i + 1}`, array);
  }
};

selectionSort([5, 3, 8, 4, 2]);