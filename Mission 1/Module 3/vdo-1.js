//* Stateless vs Stateful 

// Stateless : it can not hold data . example : functions , methods etc.
// const counter = (amount) => {
//     let count = 0;
//     count = count + amount;

//     return count;
// };
// console.log(counter(3));
// console.log(counter(2));



// Stateful : it can hold data . example : object , class etc.
const counter = {
    count : 0,

    add(amount){
        this.count = this.count + amount;
    },

    print(){
        console.log(this.count);
    },
};
counter.add(2);
counter.add(3);

counter.print();




