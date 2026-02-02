{
  class Person1 {
    getSleep() {
      console.log(`I am a normal happy person. I sleep for 8 hours`);
    }
  }

  class Student1 extends Person1 {
    getSleep() {
      console.log(`I am a student. I sleep for 7 hours`);
    }
  }

  class NextLevelDeveloper1 extends Student1 {
    getSleep() {
      console.log(`I am a next level developer. I sleep for 6 hours`);
    }
  }

  const getSleepingHours = (param: Person1) => {
    param.getSleep();
  };

  const person1 = new Person1();
  const person2 = new Student1();
  const person3 = new NextLevelDeveloper1();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  // another example
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  const getArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const circle1 = new Circle(10);
  const rectangle1 = new Rectangle(10, 20);

  getArea(shape1);
  getArea(circle1);
  getArea(rectangle1);
}
