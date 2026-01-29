// constraint : means give a strict rules 

const addStudentToCourse2 = <T extends { id: number; name: string }>(studentInfo: T) => {    // that means studentInfo must have id and name
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student3 = {
  id: 123,
  name: "Mahbub",
  hasPen: true,
};

const student4 = {
  id: 123,
  name: "Bappy",
  hasCar: true,
  isMarried: true,
};

const student5 ={
    hasPen : true,
}

// now if we try to pass without name and id it will throw error
// const  result5 = addStudentToCourse2(student5);   // this is error

