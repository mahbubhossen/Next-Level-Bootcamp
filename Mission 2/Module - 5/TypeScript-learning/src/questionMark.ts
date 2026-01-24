// ? : ternary operator : decision making 

const biyerJonnoEligible = (age: number ) => {
    // if (age >= 21){
    //     console.log("You are eligible");
    // }else{
    //     console.log("You are not eligible ");
    // }

    const result = age >= 21 ? "You are eligible" : "You are not eligible";
    // console.log(result)
};
biyerJonnoEligible(21)



// ?? : nullish coalescing operator : null or undefined  (it only works for undefined or null value . )

const userTheme = undefined; // or null
const selectedTheme = userTheme ?? "dark theme";
// console.log(selectedTheme)

const userTheme2 = "green theme"; // or null
const selectedTheme2 = userTheme2 ?? "dark theme";
// console.log(selectedTheme2)


// ternary + nullish coalescing

// const isAuthenticated = null;
const isAuthenticated = "";
const authenticationWithTernary = isAuthenticated ? "you are authenticated" : "you are guest";
const authenticationWithNullish = isAuthenticated ?? "you are guest";
// console.log({authenticationWithTernary}, {authenticationWithNullish})


// ?. optional chaining

const user : {
    address: {
        city : string;
        town : string;
        postalCode ?: number;
    };
} = {
    address : {
        city : "Dhaka",
        town : "Gulshan"
    }
};
// const userPostalCode = user.address.postalCode;
const userPostalCode = user?.address?.postalCode;
console.log(userPostalCode)