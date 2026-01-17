/*
Stack : LIFO (Last In First Out) data structure
We can implement stack in two ways : array and linked list
Here we are implementing stack using array
push(value) : add value to the top of the stack
pop() : remove value from the top of the stack
peek() : get the value from the top or the end of the stack without removing it
isEmpty() : check if the stack is empty
print() : print the stack 
*/

class Stack {
    constructor(){
        this.items = [];
    }

    // o(1)
    push(value){
        this.items.push(value)
    };

    // o(1)
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
       return this.items.pop()
    };

    // o(1)
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.items.length - 1];
    };

    // o(1)
    isEmpty(){
        return this.items.length === 0;
    };

    // o(n)
    print(){
        console.log(this.items. slice().reverse().join(" => "));
    }
}

const stack = new Stack();

console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.peek());
console.log(stack.pop());
