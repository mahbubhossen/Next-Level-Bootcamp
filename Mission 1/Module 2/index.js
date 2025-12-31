const course1 = {name: "programming hero"};
const course2 = {name : "Next level web development"};

const map = new Map();

map.set(course1 ,{courseID : 'level1'})
map.set(course2 ,{courseID : 'level2'})

// map.forEach((value , key) => {
//    key.name = "sohoj sorol simple " + key.name ;
// });
// for (let key of map.keys()){
//     console.log(key)
// }


console.log(map.entries());