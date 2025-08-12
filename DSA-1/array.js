// Second largest element in an array
function secondLargest(arr){
    let lar = arr[0];
    let secondLar=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>lar){
            secondLar = lar;
            lar = arr[i];
        }
        if(arr[i]>secondLar && arr[i]<lar){
            secondLar = arr[i];
        }
    }
    return secondLar;
}
console.log(secondLargest([12,31,32,52,23,21,45,2]));

// Frequency of each number in an array
const arr = [1,2,3,2,2,2,1,2,3,3,1,];
const freq = arr.reduce((acc,cur)=>{
    acc[cur]=(acc[cur]||0)+1;
    return acc;
},{});
console.log(freq);

function frequency(arr){
    let freq={};
    for(let i=0; i<arr.length; i++){
        const num=arr[i];
        if(freq[num]===undefined){
            freq[num]=1;
        }else{
            freq[num]++;
        }
    }
    return freq;
}
console.log(frequency([1,2,3,2,2,2,1,2,3,3,1,]));


// Create a function to find the average of even numbers in an array
const array = [12,31,32,52,23,21,45,2];
let even = array.filter((num)=>num%2==0);
const avg = array.filter((num)=>num%2==0).reduce((acc,cur)=>acc+cur)/even.length;
console.log(avg);

// Function for finding average of even numbers
function average(arr){
    let avg = 0;
    let sum = 0;
    let even = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            even++;
            sum+=arr[i];
        }
    }
    avg=sum/even;
    return avg;
}
console.log(average([12,31,32,52,23,21,45,2]));


// Remove the smallest element from an array
const ar=[23,13,2,4,32,42,12,35];
let s = ar.sort((a,b)=>a-b);
s.pop();
console.log(s);


// Reverse each word in an array
const words=['hi','hello','good'];
for(let i=0; i<words.length;i++){
    words[i]=words[i].split('').reverse().join('');
}
console.log(words);

