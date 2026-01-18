class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    //if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    //if the linked list is not empty 
    else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this; // evabe return this likhle amra linkedlist.append(0).append(1).append(3); evabe likhte parbo. 
  }
  prepend(value) {
    const newNode = new Node(value);
    //if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    //if the linked list is not empty
    else {
     newNode.next = this.head;
     this.head = newNode;
    }
    this.length++;
    return this; 
  }
  insert(index, value) {
    if(index < 0 || index > this.length) {
      console.error("index out of bound : shohoj bangla bashay bolte pari bai tui muri kha ");
      return undefined;
    }

    // if the insert is in the start of the linked list 
    if(index === 0) {
       return this.prepend(value); 
    }

    // if the insert is in the end of the linked list 
    if(index === this.length) {
       return this.append(value); 
    }

    // if the insert is in the middle 
    //step-1: find the leading node
    const leadingNode = this._traverseToIndex(index-1); // leading node : target node er ager node tai leading node . 
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);

    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
    
  }
  remove(index) {
    if(index === 0){
      const removedHead = this.head.value;
      this.head = this.head.next;

      if(this.length === 1){
        this.tail = null;
      }

      this.length--;
      return removedHead; 
    }

    const leadingNode = this._traverseToIndex(index-1);
    const nodeToRemove = leadingNode.next;

    leadingNode.next = nodeToRemove.next;

    if(leadingNode.next === null){
      this.tail = leadingNode;
    }

    return nodeToRemove.value;
  }

  _traverseToIndex(index){ // ekhane underscore _ dewa mane holo eti private function . 
    let count = 0;
    let currentNode = this.head;

    while (count !== index ) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);

      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), "-> null");
  }
}

const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// linkedList.prepend(10);
// linkedList.prepend(20);
// linkedList.prepend(30);

// linkedList.append(0);
// linkedList.append(1);
// linkedList.append(3);

// linkedList.append(0).append(1).append(3); // return this likhar karone evabe likhte partesi . 

// linkedList.insert(2, 2);

// linkedList.append("A"); //*0
// linkedList.append("B"); //*1
// // linkedList.append("C"); //*2
// linkedList.append("D"); //*3

// linkedList.print();

// linkedList.remove(2); // remove form middle
// linkedList.print();

// linkedList.remove(3); // remove from last
// linkedList.print();

// linkedList.remove(2);
// linkedList.remove(0); // remove from first 
// linkedList.print();


linkedList.append("A"); //*0
linkedList.remove(0);
linkedList.print();
