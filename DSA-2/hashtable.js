class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i<key.length; i++){
            total+=key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, val){
        const index = this.hash(key);
        // this.table[index] = val;
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,val]];
        }else{
            const sameKey = bucket.find(item =>item[0] === key);
            if(sameKey){
                sameKey[1] = val;
            }else{
                bucket.push([key,val]);
            }
        }
    }

    get(key){
        const index = this.hash(key);
        // return this.table[index]
        const bucket = this.table[index];
        if(bucket){
            const sameKey = bucket.find(item => item[0]===key);
            if(sameKey){
                return sameKey[1];
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if(bucket){
            const sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1);
            }
        }
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50);
table.set('name',"Bruce");
table.set('age',24);
table.display();
console.log(table.get('name'));
// table.remove('name');
table.set('mane', 'Clark');
table.set('anme', 'Siree')
table.display();
// table.remove('name')
// table.display()



// // Count occurances
// function occurances(arr){
//     const map = {};
//     for(let num of arr){
//         map[num] = (map[num]||0)+1;
//     }
//     return map;
// }
// console.log(occurances([1, 2, 2, 3, 1, 4]));


// // First Non-repeating character
// function nonRepeating(str){
//     const arr = str.split('');
//     const map ={};
//     for(let char of arr){
//         map[char] = (map[char]||0)+1;
//     }
//     for(let i=0; i<str.length; i++){
//         if(map[str[i]]===1) return i;
//     }
//     return -1;
// }
// console.log(nonRepeating("aabccd"));

// // Are two strings Anagram
// function anagram(str1,str2){
//     if(str1.length!==str2.length) return false;
//     const count = {};
    
//     for(let char of str1){
//         count[char] = (count[char]||0)+1;
//     }

//     console.log(count);

//     for(let char of str2){
//         if(!count[char]) return false;
//         count[char]--;
//     }
//     console.log(count);
//     return true;
// }
// console.log(anagram('listen', 'silent'));


// // Find duplicates in array
// function duplicates(arr){
//     const count = {};

//     for(let num of arr){
//         count[num]=(count[num]||0)+1;
//     }

//     let ar =[];
//     for(let num in count){
//         if(count[num]>1){
//             ar.push(Number(num));
//         }
//     }
//     return ar;
// }
// console.log(duplicates([1, 2, 3, 2, 4, 5, 1]));

// // Two sum
// function twoSum(nums, target){
//     const map = {};

//     for(let i=0; i<nums.length; i++){
//         const diff = target - nums[i];

//         if(map[diff] !== undefined){
//             return [map[diff],i];
//         }
//         map[nums[i]] = i;
//     }
//     console.log(map);
//     return [];
// }
// console.log(twoSum([2, 7, 11, 15],9));

// // Find all pairs with given sum
// function givenSum(arr,target){
//     const seen = new Set();
//     const pairs = new Set();

//     for(let num of arr){
//         const complement = target - num;
//         if(seen.has(complement)){
//             const pair = [Math.min(num, complement), Math.max(num,complement)].toString();
//             pairs.add(pair);
//         }
//         seen.add(num);
//     }
//     return Array.from(pairs).map(p=>p.split(',').map(Number));
// }
// console.log(givenSum([1, 3, 2, 2, 4, 0], 4));