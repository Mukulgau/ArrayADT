class Array{
  constructor(){
    this.data = {};
    this.len = 0;
  }

  insert(ele){
    this.data[this.len] = ele;
    this.len++;
    return this.data;
  }

  remove(){
    delete this.data[this.len-1];
    this.len--;
    return this.data;
  }

  // insertAtIndex(index, element){
  //   for(let i = index; i < this.len; i++){
  //     let item = this.data[i];
  //     this.data[i + 1] = item;
  //   }
  //   this.data[index] = element;
  //   this.len++; 
  //   return this.data;
  // }
  insertAtIndex(index, element){
    for(let i = this.len; i >= index; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = element;
    this.len++; 
    return this.data;
  }

  removeAtIndex(index) {
    for(let i = index; i < this.len - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.len-1];
    this.len--;
    return this.data;
  }

  getElementAtIndex(index){
    return this.data[index];
  }

  sum(){
    let sum = 0;
    for(let i = 0; i < this.len; i++){
      sum += this.data[i];
    }
    return sum;
  }

  average(){
    // let sum = 0;
    let average;
    // for(let i = 0; i < this.len; i++){
    //   sum += this.data[i];
    // }
    average = this.sum() / this.len;
    return average;
  }

  linearSearch(element){
    for(let i = 0; i < this.len; i++){
      if(element == this.data[i]){
        return i;
      }
    }
    return -1;
  }

  maxElement(){
    let max = 0;
    for(let i = 0; i < this.len; i++){
      if(this.data[i] > max){
        max = this.data[i];
      }
    }
    return max;
  }

  minElement(){
    let min = this.data[0];
    for(let i = 0; i < this.len; i++){
      if(this.data[i] < min){
        min = this.data[i];
      }
    }
    return min;
  }

  swap(ele1, ele2){
    let i, indexOfNumber1, indexOfNumber2, temp;
    for(i = 0; i < this.len; i++){
      if(ele1 == this.data[i]){
        indexOfNumber1 = i;
      }
      if(ele2 == this.data[i]){
        indexOfNumber2 = i;
      }
    }
    temp = this.data[indexOfNumber1];
    this.data[indexOfNumber1] =  this.data[indexOfNumber2];
    this.data[indexOfNumber2] =  temp;
  }

  swapThroughIndex(index1, index2){
    let temp;
    temp = this.data[index1];
    this.data[index1] =  this.data[index2];
    this.data[index2] =  temp;
  }

  reverse(){
    for(let i = 0; i < Math.floor(this.len / 2); i++){
      let temp;
      temp = this.data[i];
      this.data[i] = this.data[this.len - 1 - i];
      this.data[this.len - 1 - i] = temp;
    }
  }

  leftShift(){
    for(let i = 0; i < this.len; i++){
      this.data[i] = this.data[i + 1];
    }
    this.data[this.len - 1] = 0;
  }

  rightShift(){
    for(let i = this.len - 1; i >= 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = 0;
  }

  leftRotate(){
    let temp = this.data[0];
    for(let i = 0; i < this.len; i++){
      this.data[i] = this.data[i + 1];
    }
    this.data[this.len - 1] = temp;
  }

  rightRotate(){
    let temp = this.data[this.len - 1];
    for(let i = this.len - 1; i >= 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = temp;
  }

  sortedInsert(){}

  isSorted(){
    for(let i = 0; i < this.len; i++){
      if(this.data[i] > this.data[i + 1]){
        return false;
      }
    }
    return true;
  }

  mergeTwoArray(){
    // let mergedArray = {};
    // return mergedArray;
  }

  intersection(){}

  isSuperSet(){}

  union(){}

  difference(){}

  arrangeNegative(){
    let temp;
    for(let i = 0; i < this.len; i++){
      for(let j = 0; j < i; j++){
        if(this.data[i] < this.data[j]){
          temp = this.data[i];
          this.data[i] = this.data[j];
          this.data[j] = temp;
        }
      }
    }
  }

  sortStringArray(){}
  
  display(){
    console.log(this.data);
  }
}

const arr = new Array();

// const arr1 = new Array();
// const arr2 = new Array();

arr.insert(1);
arr.insert(2);
arr.insert(3);
arr.insert(4);
arr.insert(5);
arr.insert(6);
arr.insert(7);
arr.insert(8);
arr.insert(9);
arr.insert(-16);
arr.insert(-15);


// console.log(arr.remove());
// console.log(arr.remove());

// arr.insertAtIndex(8, 500);

// arr.removeAtIndex(8);

// arr.getElementAtIndex(5);

// arr.sum();

// arr.average();

// arr.linearSearch(11);

// arr.maxElement();

// arr.minElement();

// arr.swap(3, 6);

// arr.swapThroughIndex(2, 5);

// arr.reverse();

// arr.leftRotate();

// arr.rightRotate();

// arr.leftShift();

// arr.rightShift();

// arr.isSorted();

arr.arrangeNegative();

arr.display();