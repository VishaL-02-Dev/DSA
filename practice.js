class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size=0
    }

    isEmpty(){
        return this.size === 0;
    }

    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next = node;
        }
        this.size++;
        return `Value append`
    }

    prepend(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return `Value prepend`
    }

    insertAt(val,index){
        if(index<0 || index>this.size){
            return `Invalid index or size`
        }
        if(index === 0){
            this.prepend(val);
        }else{
            const node = new Node(val);
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr= curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
            return `Value inserted`
        }
    }

    reverse(){
        if(this.isEmpty()){
            return this.size===0;
        }
        let curr = this.head;
        let prev = null;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
        return  `List reversed`
    }
    
    print(){
        if(this.isEmpty()){
            return `List is empty`
        }else{
            let str = '';
            let curr = this.head;
            while(curr){
                str+=`${curr.val} `;
                curr = curr.next;
            }
            console.log(str);
        }
    }
}

const list = new linkedList();
console.log(list.append(20));
console.log(list.prepend(10));
list.print();
console.log(list.insertAt(30,2));
list.print();
// console.log(list.insertAt(10,1));
// list.print();
console.log(list.reverse());
list.print();


// function linearSearch(arr, target){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]===target){
//             return `Target found at index: ${i}`
//         }
//     }
//     return `Target not found`
// }

// console.log(linearSearch('hello world','x'))


// function multiSearch(ar,arr){
//     let res=[];
//     for(let i=0; i<arr.length; i++){
//         let found=false;
//         for(let j=0; j<ar.length; j++){
//             if(ar[i]===arr[j]){
//                 found=true;
//                 break;
//             }
//         }
//         res.push(found);
//     }
//     return res;
// }

// console.log(multiSearch([1, 2, 3, 4], [3, 5, 1]))

// function binarySearch(arr,target){
//     let left = 0;
//     let right = arr.length-1;
    
//     while(left<=right){
//         const mid = Math.floor((left+right)/2);
//         if(arr[mid]===target) return `Element found at ${mid}`;
//         else if(arr[mid]<target) left = mid+1;
//         else right = mid-1;
//     }
//     return `Element not found`
// }

// console.log(binarySearch([1,2,3,4,5,6],10));


// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
    
//     isEmpty(){
//         return this.size===0;
//     }
    
//     getSize(){
//         return this.size;
//     }
    
//     prepend(val){
//         const node = new Node(val);
//         if(this.isEmpty()){
//           this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//         return `Value prepend`
//     }
    
//     insertAt(val,index){
//         if(index<0 && index>this.size){
//             return `Invalid size or index`
//         }
//         if(index===0){
//             this.prepend(val);
//         }else{
//             const node = new Node(val);
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr=curr.next;
//             }
//             node.next=curr.next;
//             curr.next=node;
//             this.size++;
//             return `Value inserted`
//         }
//     }
    
//     print(){
//         if(this.isEmpty()){
//             return `List is empty`
//         }else{
//             let str='';
//             let curr = this.head;
//             while(curr){
//                 str+=`${curr.val} `
//                 curr=curr.next;
//             }
//             console.log(str);
//         }
//     }
// }

// const list = new linkedList();
// console.log(list.prepend(10));
// list.print();
// console.log(list.prepend(20));
// list.print();
// console.log(list.insertAt(30,1));
// list.print();


// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//         this.prev=null;
//     }
// }

// class dLinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }
    
//     isEmpty(){
//         return this.size===0;
//     }
    
//     getSize(){
//         return this.size;
//     }
    
//     prepend(val){
//         const node = new Node(val);
//         if(isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head.prev=node;
//             this.head=node;
//         }
//         this.size++;
//         return `Value prepend`
//     }
    
//     append(val){
//         const node = new Node(val){
//             if(this.isEmpty()){
//                 this.head=node;
//                 this.tail=node;
//             }else{
//                 this.tail.next=node;
//                 node.prev=this.tail;
//                 this.tail=node;
//             }
//             this.size++;
//             return `Value append`
//         }
//     }
// }






