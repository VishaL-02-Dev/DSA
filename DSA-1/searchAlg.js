// // Linear Search
// function linearSearch(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(n==arr[i]){
//             return i;
//         }
//     }
//     return -1;
// }
// const ar=[-3,-9,12,99,48,53,10];
// console.log(linearSearch([-3,-9,12,99,48,53,10],1));


// //Binary Search
// function binarySearch(arr,target){
//     let left = 0;
//     let right = arr.length-1
//     while (left<=right){
//         let mid = Math.floor((left + right )/2)
//         if(arr[mid] === target){
//             return mid
//         }
//         else if(arr[mid]<target){
//              left = mid+1
//         }
//        else right = mid - 1
//     }
//     return -1
// }
// console.log(binarySearch([2,3,4,6,7],6))


// // Binary Search
// function binarySearch(arr,value){
//     let left = 0;
//     let right= arr.length-1;

//     while(left<=right){
//         const mid=Math.floor((left+right)/2);
//         if(arr[mid]===value) return mid;
//         else if(arr[mid]<value) left=mid+1;
//         else right=mid-1;
//     }
//     return -1;
// }

// console.log(binarySearch([1,2,12,13,14,15],12));

function binary(arr,val){
    let left = 0; 
    let right = arr.length-1;
    
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(arr[mid]===val) return mid;
        else if(arr[mid]<val) left=mid+1;
        else right=mid-1;
    }
    return -1;
}
console.log(binary([1,2,3,4,5,6,7],6));