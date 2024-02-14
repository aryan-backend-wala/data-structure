class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// insert node at given index if head is at index 0
const insertNode = (head, value, index) => {
  if(index === 0){
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  let count = 0;
  let current = head;
  while(current !== null){
    if(count === index - 1){
      let next = current.next;
      current.next = new Node(value);
      current.next.next = next
    }
    count += 1;
    current = current.next;
  }
  return head;
}

// print node value by recurion
const printLinkedListR = (head) => {
  if(head === null) return;
  console.log(head.val);
  printLinkedListR(head.next);
}

// print node value using while loop
const printLinkedList = (head) => {
  let current = head;
  while(current !== null){
    console.log(current.val);
    current = current.next;
  }
}

// insert at index 0
const m = insertNode(a, 'm', 0);

const e = insertNode(m, "e", 5); // insert at n - 1
const g = insertNode(m, 'g', 2);
printLinkedList(m);

// function to give length of linked list
function giveSize(head){
  let count = 0;
  let current = head;
  while(current !== null){
    count++;
    current = current.next;
  }
  return count;
}

// print node value using for loop
function printLinkedListF(head){
  const size = giveSize(m);
  let current = head;
  for(let i=0;i<size;i++){
    console.log(current.val);
    current = current.next;
  }
}
console.log("---");
printLinkedListF(m);