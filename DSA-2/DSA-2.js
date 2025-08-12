// function firstOcc(str){
//     const map = {};
//     for(let char of str){
//         map[char]=(map[char]||0)+1;
//     }
//     let st=[];
//     for(key in map){
//         if(map[key] == 1){
//             st.push(key)
//         }
//     }
//     return st[0];
// }
// console.log(firstOcc('swiss'));

// function revStr(str){
//     const stack = [];
//     for(let i=str.length-1; i>=0; i--){
//         stack.push(str[i]);
//     }
//     return stack.join('')
// }
// console.log(revStr('heloo'));

// class Stack{
//     constructor(){
//         this.items= [];
//     }
    
//     isEmpty(){
//         return this.items.length === 0;
//     }
    
//     push(x){
//         this.items.push(x);
//     }
    
//     pop(){
//         if(this.isEmpty()){
//             return `Stack is empty`
//         }else{
//             this.items.shift();
//         }
//     }
    
//     print(){
//         console.log(this.items.join('->'));
//     }
// }

// const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.push(8);
// stack.print();
// stack.pop();
// stack.print();


// class Queue{
//     constructor(){
//         this.items=[];
//     }
    
//     enqueue(x){
//         this.items.push(x);
//     }
    
//     dequeue(){
//         if(this.items.length===0) return `Queue is empty`;
//         this.items.shift();
//     }
    
//     print(){
//         console.log(this.items.join('<-'))
//     }
// }
// const queue = new Queue();
// queue.enqueue(80);
// queue.enqueue(90);
// queue.enqueue(100);
// queue.print();
// queue.dequeue();
// queue.print();

// function mergeSort(arr){
//     arr.split('');
//     if(arr.length<2) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
    
//     return merge(mergeSort(left), mergeSort(right));
// }
// function merge(leftArr, rightArr){
//     const sortedArr = [];
    
//     while(leftArr.length && rightArr.length){
//         if(rightArr){
//             sortedArr.push(rightArr.pop());
//         }else{
//             sortedArr.push(leftArr.pop());
//         }
//     }
//     return sortedArr.join('');
// }
// console.log(mergeSort('hello'));

function bubbleSort(arr){
    let swap;
    do{
        swap = false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap = true;
            }
        }
    }while(swap);   
}
const array = [4,3,5,6,-2,-8];
bubbleSort(array);
console.log(array);








