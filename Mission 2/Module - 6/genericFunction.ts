// Generic Function

const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObj = (value: { id: number; name: string }) => {
  [value];
};

const arrString = createArrayWithString("apple");
const arrNumber = createArrayWithNumber(222);
const arrUserObj = createArrayWithUserObj({ id: 123, name: "next level" });

// we can do this same task by generic function like this
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrStringGeneric = createArrayWithGeneric("apple");
const arrNumberGeneric = createArrayWithGeneric(222);
const arrUserObjGeneric = createArrayWithGeneric({
  id: 123,
  name: "next level",
});

// tuple

// normal
const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};

// generic
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};

const res1 = createArrayTupleWithGeneric("Mahbub", false);
const res2 = createArrayTupleWithGeneric(12, { name: "Mahbub", age: 22 });



// another example
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
};

const student1 = {
  id: 123,
  name: "Mahbub",
  hasPen: true,
};

const student2 = {
  id: 123,
  name: "Bappy",
  hasCar: true,
  isMarried: true,
};

const result11 = addStudentToCourse(student1);
console.log(result11);
const result22 = addStudentToCourse(student2);
console.log(result22);
