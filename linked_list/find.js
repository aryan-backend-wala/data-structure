const Node = require('./linkedList.js');

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const find = (head, value) => {
  let current = head;
  while(current !== null){
    if(value === current.val){
      return true;
    }
    current = current.next;
  }
  return false;
}

const findR = (head, value) => {
  if(head === null) return false;
  return findR(head.next, value) || (value === head.val);
}

const findR2 = (head, value) => {
  if(head === null) return false;
  if(head.val === value) return true;
  return findR2(head.next, value);
}

console.log(findR(a, "B"));