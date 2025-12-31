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



