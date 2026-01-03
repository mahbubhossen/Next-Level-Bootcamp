//we cannot access a string parameter from a object by direct dot notation . we use [ ] bracket notation . 

/*
const obj = {
  nextLevel: { courseId: "level2" },
  "Programming hero": { courseId: "level1" },
};
console.log(obj.nextLevel);
console.log(obj["Programming hero"]);
console.log(obj["nextLevel"]);
*/



//in object in the key property it allows everything as a string . 
/*
const obj = {};
(obj.nextLevel = { courseId: "level2" }), (obj[true] = { courseId: "level1" });
console.log(obj);
*/


//how to use map in javascript

/*
const course1 = { name: "programming hero" };
const course2 = { name: "Next level web development" };

const map = new Map();

map.set(course1, { courseID: "level1" });
map.set(course2, { courseID: "level2" });

map.delete(course1);
console.log(map);
console.log(map.size);
console.log(map.has(course1));
map.clear();
*/


//map.forEach : 
/*
const course1 = { name: "programming hero" };
const course2 = { name: "Next level web development" };

const map = new Map();

map.set(course1, { courseID: "level1" });
map.set(course2, { courseID: "level2" });

map.forEach((value, key) => {
  console.log("key: ", key, "value: ", value);
});
*/


/*
const course1 = { name: "programming hero" };
const course2 = { name: "Next level web development" };

const map = new Map();

map.set(course1, { courseID: "level1" });
map.set(course2, { courseID: "level2" });

//add something in key
map.forEach((value, key) => {
  key.name = "sohoj sorol simple " + key.name;
});
console.log(map);

//iteration
console.log(map.keys());

//array of object
console.log([...map.keys()]);
console.log([...map.values()]);

// show only keys
for (let key of map.keys()) {
  console.log(key);
}

// show only entries 
console.log(map.entries());
*/



