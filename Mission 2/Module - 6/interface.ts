//interface we can use only object type datatype like : object, array , function 
interface Iuser {
    name: string;
    age : number;
}

interface IuserWithRole extends Iuser {
    role : "admin" | "user";
} 

const user1: Iuser = {
    name: "Mahbub",
    age: 22
}

const user2: IuserWithRole = {
    name: "Mahbub",
    age: 22,
    role: "admin"
}


// function 
interface Iadd {
    (num1:number , num2:number) : number;
}

const add: Iadd = (num1 , num2 ) => num1 + num2;



/*
Note : For  function and array we should use type alias because its easy  
*/ 



