const Node = require('./linkedList');

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const getValueAtIndex = (head, index) => {
  let count = 0;
  let current = head;
  while(current !== null){
    if(count === index){
      return current.val;
    }
    count++;
    current = current.next;
  }
  return null;
}

const getValueAtIndexR = (head, index, count = 0) => {
  if(head === null) return null;
  if(count === index) return head.val;
  return getValueAtIndexR(head.next, index, ++count);
}

console.log(getValueAtIndexR(a, 0));
console.log(getValueAtIndexR(a, 2));
console.log(getValueAtIndexR(a, 5));