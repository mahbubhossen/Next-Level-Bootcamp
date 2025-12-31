// let bazarList: string[] = ["eggs", "milk", "suger"];
// bazarList.push(123);

// let mixedArray: (string | number)[] = ["eggs", 1 , "milk", 2 , "suger", 3];
// mixedArray.push(123);

// // tuple

// let couple : [string, string] = ["husband", "wife"];
// let MahbubNameandRoll : [string , number] = ["Mahbub" , 1];


//object
const user: {
    readonly organization : string;  // access modifier
    firstName : string;
    middleName?: string;
    lastName : string;
    isMarried : boolean;
} = {
    organization: "Programming Hero",
    firstName : "Mahbub",
    lastName : "Hossen",
    isMarried: true
};

// user.organization = "Programming Hero Fire";
console.log(user)


