class StaticArray {
  constructor() {
    this.A = [];
    this.size = 0;
  }

  build(x){
    this.A = Array.from(x);
    this.size = this.A.length;
  }

  len(){
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
}

const arr = [1, 2, 4, 8, 16];
const arrSeq = new StaticArray();
arrSeq.build(arr);
console.log(arrSeq.len());