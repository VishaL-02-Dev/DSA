//BST 
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right =  null;
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
        if(node.val < root.val){
            if(root.left === null){
                root.left = node;
            }else{
                this.#insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.#insertNode(root.right,node);
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    search(node,val){
        if(!node) return false;
        if(node.val === val) return true;
        if(val<node.val) return this.search(node.left,val);
        else return this.search(node.right,val);
    }

    findMax(node){
        while(node.right !== null){
            node = node.right;
        }
        return node.val;
    }

    findMin(node){
        while(node.left !== null){
            node = node.left;
        }
        return node.val;
    }

    height(node = this.root){
        if(!node) return false;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    depth(val){
        let depth = 0;
        let curr = this.root;
        while(curr){
            if(curr.val === val) return `Depth: ${depth}`;
            else if(val < curr.val){
                curr = curr.left;
            }else{
                curr = curr.right;
            }
            depth++
        }
        return -1;
    }

    kthLargest(k){
        let count = 0;
        let result = null;

        reverseInorder(this.root);
        return result;

        function reverseInorder(node){
            if(!node || result !== null) return;

            reverseInorder(node.right);

            count++;
            if(count===k){
                result = node.val;
                return;
            }
            reverseInorder(node.left);
        }
    }

    leafCount(node = this.root){
        if(!node) return 0;
        if(!node.left && !node.right) return 1;
        return this.leafCount(node.left) + this.leafCount(node.right);
    }

    delete(val){
        this.root = this.#deleteNode(this.root,val);
        return `Value deleted`
    }

    #deleteNode(root,val){
        if(root === null) return root;
        if(val<root.val){
            root.left = this.#deleteNode(root.left,val);
        }else if(val>root.val){
            root.right = this.#deleteNode(root.right,val);
        }else{
            if(!root.left && root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.val = this.findMin(root.right);
            root.right = this.#deleteNode(root.right, val);
        }
        return root;
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(7);
bst.insert(3);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
console.log(bst.findMax(bst.root));
console.log(bst.findMin(bst.root));
bst.levelOrder();
console.log(bst.depth(3));
console.log(bst.kthLargest(1));
console.log(bst.leafCount());
console.log(bst.delete(4));
bst.levelOrder();



// Trie
class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }

    getWords(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]) return [];
            node = node.children[char];
        }
        return this.#collectAllWords(node,prefix);
    }

    #collectAllWords(node,prefix, result=[]){
        if(node.isEndOfWord) result.push(prefix);
        for(let char in node.children){
            this.#collectAllWords(node.children[char], prefix+char, result);
        }
        return result;
    }
}

const trie = new Trie();
trie.insert('apple');
trie.insert('banana');
trie.insert('application');
console.log(trie.startsWith('app'));
console.log(trie.getWords('app'));


// Heap
class minHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(i){ return Math.floor((i-1)/2); }
    getLeftChildIndex(i){ return 2*i+1 }
    getRightChildeIndex(i) { return 2*1+2 }

    swap(i1,i2){
        [this.heap[i1],this.heap[i2]] = [this.heap[i2],this.heap[i1]];
    }

    peek(){
        return this.heap[0];
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
        }
    }

    delete(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown(){
        let index = 0;
        while(this.getLeftChildIndex(index) < this.heap.length){
            let smallerChild = this.getLeftChildIndex(index);
            if(
                this.getRightChildeIndex(index) < this.heap.length &&
                this.heap[this.getRightChildeIndex(index)] < this.heap[smallerChild]
            ){
                smallerChild = this.getRightChildeIndex(index);
            }

            if(this.heap[index] <= this.heap[smallerChild]) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }

    print(){
        return this.heap;
    }
}
const heap = new minHeap();
heap.insert(40);
heap.insert(50);
heap.insert(55);
heap.insert(60);
heap.insert(65);
console.log(heap.print());


// Heap Sort
function heapSort(arr){
    let n = arr.length;

    for(let i= Math.floor(n/2)-1; i>=0; i--){
        heapify(arr,i,0);
    }
    return arr;
}

function heapify(arr, size, i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left < size && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < size && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]];
        heapify(arr,size,largest);
    }
}
let array = [4,10,1,23,5,9];
console.log('Original: ',array);
console.log('Sorted: ',heapSort(array));



// Graph
class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(v){
        if(!this.adjList[v]){
            this.adjList[v] = new Set();
        }
    }

    addEdge(v1,v2){
        if(!this.adjList[v1]){
            this.addVertex(v1);
        }
        if(!this.adjList[v2]){
            this.addVertex(v2);
        }

        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    removeEdge(v1,v2){
        this.adjList[v1].delete(v2);
        this.adjList[v2].delete(v1);
    }

    hasEdge(v1,v2){
        return this.adjList[v1].has(v2) && this.adjList[v2].has(v1);
    }

    removeVertex(v){
        if(!this.adjList[v1].delete(v2));
        for(let vertex of this.adjList[v]){
            this.removeEdge(vertex, v);
        }
        delete this.adjList[v];
    }

    neighboprs(v){
        return this.adjList[v] ? [...this.adjList[v]] : [];
    }

    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex} -> ${[...this.adjList[vertex]]}`);
        }
    }

    bfs(start){
        if(!this.adjList[start]) return [];

        const visited = new Set();
        const order = [];
        const queue = [start];
        let head = 0;

        visited.add(start);

        while(head<queue.length){
            const node = queue[head++];
            order.push(node);
            
            for(const neighbor of this.adjList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return order;
    }

    dfs(node, visited =new Set(), order=[]){
        if(!node || visited.has(node)) return;
        visited.add(node);
        order.push(node);
        console.log(node);

        for(let neighbor of this.adjList[node]){
            this.dfs(neighbor, visited, order);
        }
        return order;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A','B');
graph.addEdge('C','B');
graph.addEdge('D','A');
// graph.print()
// console.log(graph.bfs('A'));
console.log(graph.bfs('A'));