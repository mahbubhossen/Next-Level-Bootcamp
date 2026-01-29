// generics => dynamically generalize

type GenericArray<T> = Array<T>;

// const friends : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"]; // same as above , we can declare array like this

// const rollNumber : number[] = [4,7,11];
const rollNumber: GenericArray<number> = [4, 7, 11];

// const isEligibleList : boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

// generics in tuple
type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];


// generics in array of object
type user ={ name: string; age: number }
const userList: GenericArray<user> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },

];
