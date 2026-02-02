{
  class Pizza {
    topping: string;
    size: number;

    constructor(topping: string, size: number) {
      this.topping = topping;
      this.size = size;
    }

    serve() {
      return `Serving a ${this.size} inch pizza with ${this.topping}`;
    }
  }

  const pizza = new Pizza("pepperoni", 12);
  console.log(pizza.serve());

  // another example

  class Car {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }

    drive() {
      return `Driving ${this.brand} at ${this.speed} km/h`;
    }
  }

  const car = new Car("BMW", 120);
  console.log(car.drive());
}
