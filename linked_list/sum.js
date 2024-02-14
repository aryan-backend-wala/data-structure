class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const num1 = new Node(2);
const num2 = new Node(8);
const num3 = new Node(3);
const num4 = new Node(7);

const arr = [num1, num2, num3, num4];

for(let i=1;i<arr.length;i++){
  arr[i-1].next = arr[i];
}

const printLinkedList = (head) => {
  let current = head;
  while(current !== null){
    console.log(current.val);
    current = current.next;
  }
}

const sum = (head) => {
  let current = head;
  let sum = 0;
  while(current !== null){
    sum += current.val;
    current = current.next;
  }
  return sum;
}

const sumR = (head) => {
  if(head === null) return 0;
  return head.val + sumR(head.next);
} 

// console.log(sum(num1));

console.log(sumR(num1));


// printLinkedList(num1);