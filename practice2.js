// // Trie
// class Node{
//     constructor(){
//         this.children = {};
//         this.isEndOfWord =false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node();
//     }

//     insert(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node;
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     search(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return node.isEndOfWord;
//     }

//     startsWith(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return true;
//     }

//     getWords(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]) return [];
//             node = node.children[char]
//         }
//         return this.#collectAllWords(node,prefix);
//     }

//     #collectAllWords(node,prefix,result=[]){
//         if(node.isEndOfWord) result.push(prefix);
//         for(let char in node.children){
//             this.#collectAllWords(node.children[char],prefix+char,result);
//         }
//         return result;
//     }
// }
// const trie = new Trie();
// trie.insert('apple');
// trie.insert('application');
// console.log(trie.search('app'));
// console.log(trie.startsWith('app'));
// console.log(trie.getWords('app'));


// Heap
// class minHeap{
//     constructor(){
//         this.heap=[];
//     }

//     getParentIndex(i){ return Math.floor((i-1)/2); }
//     getLeftChildIndex(i){ return 2 * i + 1 }
//     getRightChildIndex(i){ return 2 * i +2 }

//     swap(i1, i2){
//         [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
//     }

//     peek(){
//         return this.heap[0];
//     }

//     insert(val){
//         this.heap.push(val);
//         this.heapifyUp();
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1;
//         while(
//             index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]
//         ){
//             this.swap(this.getParentIndex(index),index);
//             index = this.getParentIndex(index);
//         }
//     }

//     delete(){
//         if(this.heap.length === 0) return null;
//         if(this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return root;
//     }

//     heapifyDown(){
//         let index = 0;
//         while(
//             this.getLeftChildIndex(index) < this.heap.length
//         ){
//             let smallerChild = this.getLeftChildIndex(index);
//             if(
//                 this.getRightChildIndex(index) < this.heap.length &&
//                 this.heap[this.getRightChildIndex(index)] < this.heap[smallerChild]
//             ){
//                 smallerChild = this.getRightChildIndex(index);
//             }

//             if(this.heap[index] <= this.heap[smallerChild]) break;

//             this.swap(index, smallerChild);
//             index = smallerChild;

//         }
//     }

//     print(){
//         return this.heap;
//     }
// }




// // Heap Sort
// function heapSort(arr){
//     let n = arr.length;

//     for(let i=Math.floor(n/2)-1; i>=0; i--){
//         heapify(arr,n,i);
//     }

//     for(let i=n-1; i>0; i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]];
//         heapify(arr,i,0);
//     }
//     return arr;
// }
// function heapify(arr, size, i){
//     let largest = i;
//     let left = 2*i+1;
//     let right = 2*i+2;

//     if(left < size && arr[left] > arr[largest]){
//         largest = left;
//     }

//     if(right<size && arr[right]>arr[largest]){
//         largest = right;
//     }

//     if(largest !==i ){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]];
//         heapify(arr,size,largest);
//     }
// }

// let array = [4,10,1,23,5,9];
// console.log('Original: ',array);
// console.log('Sorted: ',heapSort(array));


//BST
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.#insertNode(this.root,node);
        }
    }

    #insertNode(root,node){
        if(node.val<root.val){
            if(root.left === null){
                root.left = node;
            }else{
                this.#insertNode(root.left,node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.#insertNode(root.right, node);
            }
        }
    }

    search(node,val){
        if(!node) return false;
        if(node.val === val) return true;
        if(val<node.val) return this.search(node.left,val);
        else return this.search(node.right,val)
    }

    height(node = this.root){
        if(!node) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    depth(val){
        let depth = 0;
        let curr = this.root;
        while(curr){
            if(curr.val === val) return depth;
            else if(val < curr.val){
                curr = curr.left;
            }else{
                curr = curr.right;
            }
            depth++;
        }
        return -1;
    }

    height(node = this.root){
        if(!node) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    kthLargest(k){
        let count = 0;
        let result = null;
        
        function reverseInorder(node){
            if(!node || result !==null) return;
            reverseInorder(node.right);

            count++;
            if(count === k){
                result= node.val;
                return;
            }
            reverseInorder(node.left);
        }

        reverseInorder(this.root);
        return result;
    }

    leafCount(node = this.root){
        if(!node) return 0;
        if(!node.left && !node.right) return 1;
        return this.leafCount(node.left) + this.leafCount(node.right);
    }

    checkBalance(node){
        if(!node) return 0;

        const leftHeight = this.checkBalance(node.left);
        
        if(leftHeight === -1){
            return -1;
        }

        const rightHeight = this.checkBalance(node.right);
        if(rightHeight === -1){
            return -1;
        }

        if(Math.abs(leftHeight - rightHeight)>1){
            return -1;
        }

        return 1+ Math.max(leftHeight, rightHeight);
    }

    preOrder(root, arr=[]){
        if(root){
            arr.push(root.val);
            this.preOrder(root.left,arr);
            this.preOrder(root.right,arr);
        }
        return arr;
    }

    inOrder(root,arr=[]){
        if(root){
            this.inOrder(root.left,arr);
            arr.push(root.val);
            this.inOrder(root.right,arr);
        }
        return arr;
    }

    postOrder(root,arr=[]){
        if(root){
            this.postOrder(root.left,arr);
            this.postOrder(root.right,arr);
            arr.push(root.val);
        }
        return arr;
    }
    
}

const bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(60);
bst.insert(55);
bst.insert(70);
bst.insert(65);
bst.insert(75);
// console.log(bst.kthLargest(3));
// console.log(bst.height(bst.root));
// console.log(bst.checkBalance(bst.root));
const preOrder = bst.preOrder(bst.root);
const inOrder = bst.inOrder(bst.root);
const postOrder = bst.postOrder(bst.root);
console.log(preOrder);
console.log(inOrder);
console.log(postOrder);