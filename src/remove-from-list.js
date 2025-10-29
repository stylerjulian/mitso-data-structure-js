import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

export default function removeKFromList(l, k) {
  // Handle empty list
  if (!l) {
    return null;
  }

  // Create a dummy head to simplify edge cases (like removing the head)
  let dummy = { value: 0, next: l };
  let current = dummy;

  // Iterate through the list
  while (current.next !== null) {
    if (current.next.value === k) {
      // Skip the node with value k
      current.next = current.next.next;
    } else {
      // Move to next node
      current = current.next;
    }
  }

  // Return the modified list (without dummy head)
  return dummy.next;
}