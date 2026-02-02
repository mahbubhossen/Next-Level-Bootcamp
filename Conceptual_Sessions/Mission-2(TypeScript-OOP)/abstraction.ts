{
    // if we declare interface then we have to implement it in class
//   interface Vehicle {
//     start(): void;
//     stop(): void;
//   }


// if we declare abstract class we need to extend it
  abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
  }

  // if we use interface 
//   class Bike implements Vehicle {
//     start(): void {
//       console.log("Bike started");
//     }
//     stop(): void {
//       console.log("Bike stopped");
//     }
//   }

  class Car extends Vehicle {
    start(): void {
      console.log("Car started");
    }
    stop(): void {
      console.log("Car stopped");
    }
  }

  const car = new Car();
  car.start();
  car.stop();

}
