// // Factorial of a number

// function factorial(n){
//     let fact=1;
//     for(let i=n; i>0; i--){
//         fact=fact*i
//     }
//     return fact;
// }
// console.log(factorial(4));
// console.log(factorial(5));


// //Prime number
// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2; i<n; i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(5));
// console.log(isPrime(1));
// console.log(isPrime(29));


// // Recursive Fibonacci
// function fib(n){
//     if(n<2){
//         return n;
//     }
//     return fib(n-1)+fib(n-2);
// }
// console.log(0)
// console.log(fib(1));
// console.log(fib(7));

// // Recursive Factorial
// function fact(n){
//     if(n===0){
//         return 1;
//     }
//     return n * fact(n-1);
// }
// console.log(fact(0));
// console.log(fact(2));
// console.log(fact(4));
// console.log(fact(5));


// // Sum of n natural numbers
// function sum(n){
//     if(n===0){
//         return 0;
//     }
//     return n+sum(n-1);
// }
// console.log(sum(5));
// console.log(sum(4));


// const arr= [1,23,4,525,561,35,12,2];
// function revRec(ar,start=0, end=ar.length-1){
//     if(start>=end){
//         return ar;
//     }
    
//     let temp=ar[start];
//     ar[start]=ar[end];
//     ar[end]=temp;
    
//     return revRec(ar,start+1, end-1)
// }
// console.log('Recursive reverse: ', revRec(arr));


// function fact(n){
//     if(n<=1){
//         return 1
//     }else{
//         return n * fact(n-1);
//     }
// }

// console.log(fact(4));

// //  Print numbers from N to 1 
// function printN(n){
//     if(n!=0){
//         console.log(n);   
//         printN(n-1)
//     }
// }
// printN(5);

// // Print numbers 1 to N
// function nTo1(n, i=1){
//     if(i>n) return;
//     console.log(i);
//     nTo1(n,i+1)
// }
// nTo1(10);

// // Sum of first N numbers
// function sumOfN(n){
//     if(n===0) return 0;
//     return n + sumOfN(n-1)
// }
// console.log(sumOfN(5));

// // Factorial 
// function factorial(n){
//     if(n===1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// // Reverse String 
// function rev(str){
//     if(str.length<=1) return str;
//     return rev(str.slice(1)) + str[0];
// }
// function rev(str){
//     if(str.length<=1) return str;
//     let reversed = '';
//     for(let i=str.length-1; i>=0; i--){
//         reversed+=str[i];
//     }
//     return reversed;
// }
// console.log(rev('Sreesha'));

// // Palindrome 
// function palindromeRec(str){
//     if(str.length<=1)return true;
//     if(str[0]!==str[str.length-1]) return false;
//     return palindrome(str.slice(1,-1));
// }
// function palindrome(str){
//     for(let i=0; i<str.length/2;i++){
//         if(str[i]!==str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(palindrome("madam"));
// console.log(palindromeRec('hello'));

// // Sum of digits
// function sumOfDigits(num){
//     let sum = 0;
//     if(num==0) return 0;
//     sum=sum+num%10;
//     return Math.floor(sumOfDigits(num/10)) + sum;
// }
// console.log(sumOfDigits(345));

// // Sum of an array
// function sumOfAray(arr, index=0){
//     if(index === arr.length)return 0;
//     return arr[index] + sumOfAray(arr, index+1);
// }
// console.log(sumOfAray([1,2,3,4]));

// // Remove 'l' from 'Hello World'
// function removeL(str, index=0){
//     if(index===str.length) return '';
//     const char = str[index] === 'l' ? '' : str[index];
//     return char + removeL(str,index+1);
// }
// console.log(removeL('Hello World'));
// function removeL(str){
//     let char = '';
//     for(let i=0; i<str.length; i++){
//         if(str[i]!=='l'){
//             char+=str[i];
//         }
//     }
//     return char;
// }
// console.log(removeL('Hello World'));

// //Recurssive Fibonacci
// function fibonacciRec(n){
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return fibonacciRec(n-1) + fibonacciRec(n-2);
// }
// for(let i=0; i<10; i++){
//     console.log(fibonacciRec(i));
// }

// //Remove even nunbers from an array
// function remEve(arr, index=0){
//     if(index === arr.length) return;
//     if(arr[index]%2==0){
//         arr.splice(index,1);
//         remEve(arr,index);
//     }else{
//         remEve(arr,index+1);
//     }
//     return arr;
// }
// console.log(remEve([1,2,3,4,5,6,7,8,9]));
