/* class Student {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common method
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumay `); // here before  numOfHours no this keyword because this is external function
  }
}

const student1 = new Student("Mr. Fakibaaz", 18, "Bangladesh");
// student1.getSleep(15);

class Teacher {
  name: string; // common
  age: number;  // common
  address: string; // common
  designation: string; // own property

  constructor(name: string, age: number, address: string, designation: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation = designation;
  }

  // common method
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumay `); // here before  numOfHours no this keyword because this is external function
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} ${numOfClass} ghonta class ney`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  25,
  "Bangladesh",
  "Senior Teacher",
);
teacher1.takeClass(4);
*/

class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumay `);
  }
}

class Student extends Parent {}
const student1 = new Student("Mr. Fakibaaz", 18, "Bangladesh");
student1.getSleep(15);

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} ${numOfClass} ghonta class ney`);
  }
}
const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  25,
  "Bangladesh",
  "Senior Teacher",
);
teacher1.takeClass(4);