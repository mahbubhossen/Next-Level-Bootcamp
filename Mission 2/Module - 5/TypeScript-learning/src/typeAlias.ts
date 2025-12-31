type user = {
    id : number;
    name : {
        firstName : string;
        lastName : string;
    }; 
    gender : "male" | "female";
    contactNo : string;
    address : {
        division : string;
        city : string;
    };
};
 const user1: user = {
    id : 123, 
    name : {
        firstName : "Mahbub",
        lastName : "Hossen"
    },
    gender : "male",
    contactNo : "0180000000",
    address : {
        division : "Dhaka",
        city : "Dhaka"
    }
};

 const user2: user = {
    id : 123, 
    name : {
        firstName : "Mahbub",
        lastName : "Hossen"
    },
    gender : "male",
    contactNo : "0180000000",
    address : {
        division : "Dhaka",
        city : "Dhaka"
    }
};



type addFunc = (num1 : number ,  num2 : number) => number;
const add: addFunc = (num1 , num2 ) => num1 + num2;