// how to find the execution time of a code block
/*
const startTime = performance.now();
for (let i = 0; i <= 5000; i++) {
  console.log(i);
}
const endTime = performance.now();
console.log(`This code took ${endTime - startTime} ms`);
*/


// another way to find the execution time of a code block
/*
console.time("task");
for (let i = 0; i <= 5000; i++) {
  console.log(i);
}
console.timeEnd("task");
*/

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log("first array", firstArray.length);
console.log("second array", secondArray.length);

console.time("map1");
const firstArrayList = firstArray.map((number) => ({ userId: number }));
console.timeEnd("map1");

console.time("map2");
const secondArrayList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");



