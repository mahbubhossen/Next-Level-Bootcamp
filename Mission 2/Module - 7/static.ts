class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count = Counter.count + 1);
  }

  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}



// without static of increment / decrement

// const instance1 = new Counter();
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());

// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());



// if we make static increment and decrement then we can access like this

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());