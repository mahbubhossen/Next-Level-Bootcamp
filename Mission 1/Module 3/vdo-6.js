/*
Linked List : 
Singly Linked List : Each node contains data and a pointer to the  next node           
Doubly Linked List : Each node contains data, a pointer to the next node and a pointer to the previous node
In Linked list : first element is called head and last element is called tail
Node : basic unit of a linked list
In one node : data + pointer (address of next node)

*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
console.log(head)
let temp = head;
while(temp !== null){
    console.log(temp.value , " ")
    temp = temp.next;
}
