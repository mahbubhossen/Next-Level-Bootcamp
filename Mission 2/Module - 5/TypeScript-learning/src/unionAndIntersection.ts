//union (|)

type userRole = "Admin" | "user";
const getDashboard = (role : userRole) => {
    if(role === "Admin"){
        console.log("admin dashboard");
    }
    else if(role === "user"){
        console.log("user dashboard");
    }
    else {
        console.log("guest dashboard")
    }
}


//intersection ( & ) 
type Employee = {
    id : number;
    name : string ;
    phoneNo : string;
};

type Manager = {
    designation : string; 
    teamSize : number;
};

type employeeManager = Employee & Manager;
const chowdhurySaheb : employeeManager = {
    id : 1,
    name : "Chowdhury Saheb",
    phoneNo : "0180000000",
    designation : "CEO",
    teamSize : 10
};
