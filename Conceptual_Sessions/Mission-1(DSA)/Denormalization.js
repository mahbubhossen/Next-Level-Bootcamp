// students + snacks basket example

// student List
const student = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Sadia" },
  { id: 3, name: "Noman" },
];

//snacks list
const snacks = [
  { id: 201, studentId: 1, title: "chocolate" },
  { id: 202, studentId: 2, title: "chips" },
  { id: 203, studentId: 1, title: "cookies" },
  { id: 204, studentId: 3, title: "juice" },
  { id: 205, studentId: 2, title: "nuts" },
];

//output
/*
[
{id: 1,name:'Rafi',  basket:[{id:201, ...}, {id:203, ...}] },
{id: 2,name:'Sadia', basket:[{id:202, ...}, {id:205, ...}] },
{id: 3,name:'Noman', basket:[{id:204, ...}] }
]
*/

const mainBasket = snacks.reduce((basket, snack) => {
  // console.log(basket);
  // console.log(snack);

  const { studentId } = snack;

  if (!basket[studentId]) {
    basket[studentId] = [];
  }

  basket[studentId].push(snack);
  //   console.log(basket);
  return basket;
}, {});

// console.log(mainBasket);

const studentWithSnacks = student.map((student) => ({
  ...student,
  basket: mainBasket[student.id] || [],
}));
console.log(JSON.stringify(studentWithSnacks));
