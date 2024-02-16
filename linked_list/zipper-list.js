const Node = require('./linkedList');

// linked list 1
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

// linked list 2
const x = new Node("X");
const y = new Node("Y");
const z = new Node("Z");

a.next = b;
b.next = c;

x.next = y;
y.next = z;

const zipper = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while(current1 !== null && current2 !== null){
    if(count % 2 === 0){
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }

  if(current1 !== null) tail.next = current1;
  if(current2 !== null) tail.next = current2;

  return head1;
}

const zipperR = (head1, head2) => {
  if(head1 === null && head2 === null) return null;
  if(head1 === null) return head2;
  if(head2 === null) return head1;

  const n1 = head1.next;
  const n2 = head2.next;
  head1.next = head2;
  head2.next = zipperR(n1, n2);
  return head1;
}

const printLinkedList = (head) => {
  let current = head;
  while(current !== null){
    console.log(current.val);
    current = current.next;
  }
}

const zz = zipperR(a, x);
console.log(zz);
printLinkedList(zz);