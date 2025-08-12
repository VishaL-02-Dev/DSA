// //Bubble Sort
// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false;
//         for(let i = 0; i<arr.length-1; i++){
//             if(arr[i]>arr[i+1]){
//                 let temp  =arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 swapped = true;
//             }
//         }
//     }while(swapped);
// }
// const arr =[8,20,-2,4,-6];
// bubbleSort(arr);
// console.log(arr);


// // Insertion Sort 
// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let nti = arr[i];
//         let j = i - 1;
//         while(j>=0 && arr[j]>nti){
//             arr[j+1]=arr[j];
//             j=j-1;
//         }
//         arr[j+1] = nti;
//     }
// }
// const arr =[8,20,-2,4,-6];
// insertionSort(arr);
// console.log(arr);


// // Selection sort
// function selectionSort(arr){
//     let n = arr.length;
//     for(let i=0; i<n; i++){
//         let minIdx = i;
//         for(let j = i+1; j<n; j++ ){
//             if(arr[j]<arr[minIdx]){
//                 minIdx = j;
//             }
//         }
//         [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]];
//     }
//     return arr;
// }
// console.log(selectionSort([5, 1, 4, 2, 8]))


// //Quick Sort
// function quickSort(arr){
//     if(arr.length<2){
//         return arr; 
//     }
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// const arr =[8,20,-2,4,-6];
// console.log(quickSort(arr));


// Merge Sort
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}
function merge(leftArr, rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
const arr =[8,20,-2,4,-6];
console.log(mergeSort(arr));


// class HashTabe{
//     constructor(size=50){
//         this.table = new Array(size);
//         this.size= size;
//     }

//     _hash(key){
//         let hash = 0;
//         for(let char of key){
//             hash += char.charCodeAt(0);
//         }
//         return hash % this.size;
//     }

//     set(key, val){
//         const index = this._hash(key);
//         if(!this.table[index]){
//             this.table[index] = [];
//         }
//         this.table[index].push([key,val]);
//     }

//     get(key){
//         const index = this._hash(key);
//         const bucket = this.table[index];
//         if(bucket){
//             for(let [k,v] of bucket){
//                 if(k === key) return v;
//             }
//         }
//         return undefined;
//     }
// }