const ListNode = require('./linkedList');

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');

a.next = b;
b.next = c;

const reverse = (head) => {
  let prev = null;
  let current = head;
  while(current !== null){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

const reverseR = (head, prev = null) => {
  if(head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseR(next, head);
}

const printLinkedList = (head) => {
  if(head === null) return false;
  console.log(head.val);
  printLinkedList(head.next);
}

printLinkedList(a);
const rev = reverseR(a);
console.log(rev);
printLinkedList(rev);