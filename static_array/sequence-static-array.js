class StaticArray {
  constructor() {
    this.A = [];
    this.size = 0;
  }

  build(x){
    this.A = Array.from(x);
    this.size = this.A.length;
  }

  get len(){
    return this.size;
  }

  [Symbol.iterator]() {
    return this.A[Symbol.iterator];
  }

  get_at(i){
    if(!(i >= 0 && i < this.A.length)){
      return new Error('IndexError');
    }
    return this.A[i];
  }

  set_at(i, x){
    if(!(i >= 0 && i < this.A.length)){
      return new Error('IndexError');
    }
    this.A[i] = x;
  }

  copy_forward(i, n, A, j){
    for(let k=0;k<n;k++){
      A[j+k] = this.A[i+k];
    }
  }

  insert_at(i, x){
    if(!(i >= 0 && i < this.A.length)){
      return new Error('IndexError');
    }
    let n = this.len;
    const A = new Array(n + 1);
    this.copy_forward(0, i, A, 0);
    A[i] = x;
    this.copy_forward(i, n - i, A, i + 1);
    this.build(A);
  }

  delete_at(i){
    if(!(i >= 0 && i < this.A.length)){
      return new Error('IndexError');
    }
    let n = this.len - 1;
    const A = new Array(n - 1);
    this.copy_forward(0, i, A, 0);
    this.copy_forward(i + 1, n - i, A, i);
    this.build(A);
  }

  insert_first(x){
    let n = this.len;
    const A = new Array(n + 1);
    A[0] = x;
    this.copy_forward(0, n, A, 0 + 1);
    this.build(A);
  }

  delete_first(){
    let n = this.len - 1;
    const A = new Array(n);
    this.copy_forward(0 + 1, n, A, 0);
    this.build(A);
  }

  insert_last(x){
    let n = this.len;
    const A = new Array(n + 1);
    this.copy_forward(0, n, A, 0);
    A[n] = x;
    this.build(A);
  }

  delete_last(){
    let n = this.len - 1;
    const A = new Array(n);
    this.copy_forward(0, n, A, 0);
    this.build(A);
  }
}

const arr = [1, 2, 4, 8, 16];
const arrSeq = new StaticArray();
arrSeq.build(arr);
console.log(arrSeq); // 1, 2 , 4, 8, 16
arrSeq.insert_at(2, 55); 
console.log(arrSeq);// 1, 2 , 55, 4, 8, 16
arrSeq.delete_at(2);
console.log(arrSeq);// 1, 2 , 4, 8, 16
arrSeq.insert_first(90);
console.log(arrSeq);// 90, 1, 2 , 4, 8, 16
arrSeq.delete_first();
console.log(arrSeq);// 1, 2 , 4, 8, 16
arrSeq.insert_last(20);
console.log(arrSeq);// 1, 2 , 4, 8, 16, 20
arrSeq.delete_last();
console.log(arrSeq);// 1, 2 , 4, 8, 16