{
  // type guard : in, typeof

  type alphaNumeric = number | string;
  const add = (num1: alphaNumeric, num2: alphaNumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number")
      return num1 + num2;
    else return num1.toString() + num2.toString();
  };

  // console.log(add(10, 20));
  // console.log(add("10", "20"));

  // in guard

  type normalUser = {
    name: string;
  };

  type adminUser = {
    name: string;
    role: "admin";
  };

  const getUserInfo = (user: normalUser | adminUser) => {
    if ("role" in user) {
      console.log(`This ${user.name} and his role is : ${user.role}`);
    } else {
      console.log(`${user.name}`);
    }
  };

  getUserInfo({ name: "Normal" });
  getUserInfo({ name: "Normal", role: "admin" });
}
