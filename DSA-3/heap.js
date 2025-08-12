class MinHeap {
    constructor() {
        this.heap = [];
    }

    #getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    #getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    #getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.#heapifyUp();
    }

    #heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.#getParentIndex(index)] > this.heap[index]) {
            this.swap(this.#getParentIndex(index), index);
            index = this.#getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.#heapifyDown(0);
        return root;
    }

    buildHeap(array){
        this.heap = array;
        let lastParentIndex = Math.floor((this.heap.length-2)/2);
        for(let i = lastParentIndex; i>=0; i--){w
            this.#heapifyDown(i);
        }
    }

    #heapifyDown(index) {
        while (this.#getLeftChildIndex(index) < this.heap.length) {
            let smallerChild = this.#getLeftChildIndex(index);
            if (this.#getRightChildIndex(index) < this.heap.length && this.heap[this.#getRightChildIndex(index)] < this.heap[smallerChild]) {
                smallerChild = this.#getRightChildIndex(index);
            }
            if (this.heap[index] <= this.heap[smallerChild]) break;
            this.swap(index, smallerChild);
            index = smallerChild;
        }
    }

    print() {
        return this.heap;
    }
}
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
console.log(minHeap.print());
const builtHeap = new MinHeap();
builtHeap.buildHeap([2,1,41,2,-2,5,6]);
console.log('Build Heap: ',builtHeap.print());



class MaxHeap {
    constructor() {
        this.heap = [];
    }

    #getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    #getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    #getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.#heapifyUp();
    }

    #heapifyDown(index) {
            while (this.#getLeftChildIndex(index) < this.heap.length) {
            let largerChild = this.#getLeftChildIndex(index);
            if (
                this.#getRightChildIndex(index) < this.heap.length &&
                this.heap[this.#getRightChildIndex(index)] > this.heap[largerChild]
            ) {
                largerChild = this.#getRightChildIndex(index);
            }
            if (this.heap[index] >= this.heap[largerChild]) break;
            this.swap(index, largerChild);
            index = largerChild;
        }
    }

    #heapifyUp() {
        let index = this.heap.length - 1;;
        while (index > 0 &&
            this.heap[this.#getParentIndex(index)] < this.heap[index]) {
            this.swap(this.#getParentIndex(index), index);
            index = this.#getParentIndex(index);
        }
    }

    print() {
        return this.heap;
    }
}
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(8);
maxHeap.insert(12);

console.log(maxHeap.print());