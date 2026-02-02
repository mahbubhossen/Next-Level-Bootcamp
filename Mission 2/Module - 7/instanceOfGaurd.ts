// instance of type guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta ghumay `);
  }
}

class Student2 extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta study kore `);
  }
}

class teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class ney `);
  }
}


// function guard

const isStudent = (user:Person) => {
  return user instanceof Student2
}

const isTeacher = (user:Person) => {
  return user instanceof teacher
}

const getUserInfo2 = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student3 = new Student2("Mr. student");
const teacher2 = new teacher("Mr. teacher");
const person = new Person("Mr. Fakibaaz");

getUserInfo2(student3);
getUserInfo2(teacher2);
getUserInfo2(person);




