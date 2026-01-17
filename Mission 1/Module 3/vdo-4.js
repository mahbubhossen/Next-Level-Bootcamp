/*
Queue : First In First Out (FIFO) Data Structure
enqueue(value) : add value to the end of the queue
dequeue() : remove value from the front of the queue
we can implement queue using array or linked list
peek() : get the value from the front of the queue without removing it
*/

// Array Implementation of Queue
class Queue {
    constructor(){
        this.items = [];
    }

    // o(1)
    enqueue(value){
        this.items.push(value)
    };

    // o(n)
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
       return this.items.shift()
    };

    // o(1)
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[0];
    };

    // o(1)
    isEmpty(){
        return this.items.length === 0;
    };

    // o(n)
    print(){
        console.log("start ->" , this.items.join(" => ") , "<- end");
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
queue.print();
