//function
/*
two type of function : normal function and arrow function 
function when we use in object it call method . 
and function when we use in loop it call callback function.
*/


// normal function 
function addNormal (num1:number , num2:number): number{
    return num1 + num2;
}
addNormal(2,2)


// arrow function
const  addArrow = (num1:number , num2:number): number => num1 + num2;
addArrow(2,2)


//object => function => method
// if we use function in object it called method
const poorUser = {
    name : "Mahbub",
    balance : 0,
    addBalance (value:number): number{
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
poorUser.addBalance(100000)


// callback function
const arr:number[] = [1,2,4];
const sqrArray = arr.map((elm:number):number => elm*elm );
