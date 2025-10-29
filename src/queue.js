import { NotImplementedError } from '../extensions/index.js';

import { ListNode } from '../extensions/list-node.js';

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
export default class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (this.rear === null) {
      // Queue is empty, both front and rear point to new node
      this.front = newNode;
      this.rear = newNode;
    } else {
      // Add the new node at the end and update rear
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.front === null) {
      return null; // or throw an error, depending on requirements
    }
    
    // Remove front node and return its value
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    
    // If front becomes null, then rear should also become null
    if (this.front === null) {
      this.rear = null;
    }
    
    return dequeuedValue;
  }
}