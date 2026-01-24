// Non Primitive Data type or reference type :  array , object , tuple

// array

let bazarList: string[] = ["eggs", "milk", "sugar"];
// bazarList.push(123); // error

let mixedArray: (string | number)[] = ["eggs", 1, "milk", 2, "sugar", 3];
mixedArray.push(123);

// tuple

// let cordinates : [number , number] = [1 , 2 , 3];  // error because tuple has fixed length
let couple: [string, string] = ["husband", "wife"];
let MahbubNameAndRoll: [string, number] = ["Mahbub", 1];
let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

//object

const user: {
  firstName: string;
  middleName?: string; // optional
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Mahbub",
  lastName: "Hossen",
  isMarried: true,
};

// Object Literal : 

const user2: {
  organization: "Programming Hero"; // value => type  (object literal)
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Mahbub",
  lastName: "Hossen",
  isMarried: true,
};

// user.organization = "Programming Hero Fire";
console.log(user);



// Access Modifier : 

const user3: {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Mahbub",
  lastName: "Hossen",
  isMarried: true,
};

// user.organization = "Programming Hero Fire";
console.log(user);
 