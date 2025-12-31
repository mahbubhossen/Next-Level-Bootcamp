//object destructuring 

const user = {
    id : 123,
    name : {
        firstName : "Mahbub",
        middleName : "And",
        lastName : "Hossen"
    },
    gender : "male",
    fvrtColor : "black",
};

// const myFvrtColor = user.fvrtColor;
// const myMiddleName = user.name.middleName;
// console.log(myFvrtColor)
// console.log(myMiddleName)


const {fvrtColor : myfvrtColor , name: {middleName : myMiddleName}} = user;
console.log(myfvrtColor, myMiddleName)



//array destructuring 

const friends = ["rahim", "karim", "mahim"];
const [A, mybestFrnd, C] = friends;
const [ , , mybestFrnd2] = friends;
console.log(mybestFrnd)
console.log(mybestFrnd2)