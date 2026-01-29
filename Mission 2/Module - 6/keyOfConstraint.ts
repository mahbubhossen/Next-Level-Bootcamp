// keyof : means type operator.

type richPeopleVehicles = {
  car: string;
  bike: string;
  cng: string;
};

type vehicle1 = "car" | "bike" | "cng"; // this is string literal type.

// we can write this another way also
type vehicle2 = keyof richPeopleVehicles; // that means vehicle2 type is richPeopleVehicles type's key.

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222,
  name: "Mahbub",
  address: {
    city: "dhaka",
  },
};

// const myId = user.id;   //dot notation
// const myId = user["id"]; //bracket notation
// const myName = user["name"];
// const myAddress = user["address"]; 
// console.log({myId, myName, myAddress});

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const result = getPropertyFromObj(user, "name");
// const result2 = getPropertyFromObj(user, "emni");  // error because emni is not in user object
console.log(result);

const product = {
  brand: "HP",
};
const result3 = getPropertyFromObj(product, "brand");
console.log(result3);