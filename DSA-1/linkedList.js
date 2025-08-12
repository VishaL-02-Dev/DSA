class Node{
    constructor(value){
        this.value= value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    
    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

     append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }

    insert(value, index){
        if(index<0 || index>this.size){
            return`Invalid index.`
        }
        if(index===0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev=this.head;
            for(let i=0; i<index-1; i++){
                prev=prev.next;
            }
            node.next=prev.next;
            prev.next=node;
            this.size++;
        }
    }

    remove(index){
        if(index<0 || index>=this.size){
            return `Invalid index`
        }
        let removedNode;
        if(index===0){
            removedNode=this.head;
            this.head=this.head.next;
        }else{
            let prev=this.head;
            for(let i=0; i<index-1; i++){
                prev=prev.next;   
            }
             removedNode=prev.next;
             prev.next=removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value){
        if(this.isEmpty()){
            return `List empty.`
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return `Value deleted`
        }else{
            let prev=this.head;
            while(prev.next && prev.next.value!== value){
                prev=prev.next;
            }
            if(prev.next){
                const removedNode=prev.next;
                prev.next = removedNode.next;
                this.size--;
                return `Value deleted`
            }
            return `No such value in list`
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr=this.head;
            let listVal= '';
            while(curr){
                listVal+=`${curr.value} `;
                curr=curr.next;
            }
            console.log(listVal);
        }
    }

}

const list= new LinkedList();
console.log('List is empty? ', list.isEmpty());
console.log('List size: ',list.getSize());
// list.append(10);
// list.print();
// list.append(20);
list.insert(10,0);
list.print();
list.insert(20,0);
list.print()
list.insert(30,1);
list.print();
list.insert(40,2);
list.print();
console.log(list.getSize());
console.log(list.removeValue(30));
// console.log(list.remove(1));
list.print();
console.log(list.getSize());




// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }

// class LinkedList{
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
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;

//         }
//         this.size++;
//     }

//     append(val){
//          const node = new Node(val);
//          if(this.isEmpty()){
//             this.head=node;
//          }else{
//             let curr = this.head;
//             while(curr.next){
//                 curr=curr.next;
//             }
//             curr.next=node; 
//          }
//          this.size++;
//     }

//     insert(val,index){
//         if(index<0 || index>this.size){
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

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return `Invalid index or size`
//         }
//         let rem;
//         if(index===0){
//             rem=this.head;
//             this.head=rem.next;
//         }else{
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr=curr.next;
//             }
//             rem=curr.next;
//             curr.next=rem.next;
//         }
//         this.size--;
//         return `Value removed`
//     }

//     removeValue(val){
//         if(this.isEmpty()){
//             return `List is empty`
//         }
//         if(this.head.val===val){
//             this.head=this.head.next;
//             this.size--;
//             return `Value deleted`
//         }else{
//             let curr= this.head;
//             while(curr.next && curr.next.val!==val){
//             curr=curr.next;
//            }
//            if(curr.next){
//             let rem=curr.next;
//             curr.next=rem.next;
//             this.size--;
//             return `Value deleted`
//            }
//            return `No such value`
//         }
//     }

//     search(val){
//         if(this.isEmpty()){
//             return `List is empty`;   
//         }
//         let curr= this.head;
//         let i=0;
//         while(curr){
//             if(curr.val===val){
//                 return `Value found at the index ${i}`
//             }
//             curr=curr.next;
//             i++;
//         }
//         return `Value not found`
//     }

//     reverse(){
//         if(this.isEmpty()){
//             return `List is empty`
//         }else{
//             let prev=null;
//             let curr=this.head;
//             while(curr){
//                 let temp=curr.next;
//                 curr.next=prev;
//                 prev=curr;
//                 curr=temp;
//             }
//             this.head=prev;
//             return `List reversed`
//         }
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log('List is empty')
//         }else{
//             let curr=this.head;
//             let str = ''
//             while(curr){
//                 str+=`${curr.val} `
//                 curr=curr.next;
//             }
//             console.log(str);
//         }
//     }
// }

// const list= new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.display();
// list.append(40);
// list.append(50)
// list.display();
// console.log(list.getSize());
// console.log(list.insert(60,5));
// list.display();
// console.log(list.getSize());
// console.log(list.removeFrom(0));
// list.display();
// console.log(list.removeValue(40));
// list.display();
// console.log(list.removeValue(90));
// console.log(list.search(50));
// console.log(list.search(90));
// console.log(list.reverse());
// list.display();

// // Doubly linkedList
// class Node {
//     constructor(val){
//         this.val = val;
//         this.next=null;
//         this.prev=null;
//     }
// }

// class dLL{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     isEmpty(){
//         return this.size===0;
//     }

//     prepend(val){
//         const node = new Node(val);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head.prev = node;
//             this.head = node;
//         }
//         this.size++;
//         return `Value prepend`
//     }

//     append(val){
//         const node = new Node(val);
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next= node;
//             node.prev = this.tail;
//             this.tail = node;
//         }
//         this.size++;
//         return `Value append`

//     }

//     removeFront(){
//         if(this.isEmpty()){
//             return `List is empty`
//         }
//         if(this.head === this.tail){
//             this.head=null;
//             this.tail=null;
//         }else{
//             this.head = this.head.next;
//             this.head.prev=null;
//         }
//         this.size--;
//         return `Value removed`
//     }

//     removeEnd(){
//         if(this.isEmpty()){
//             return `List is empty`
//         }
//         if(this.head === this.tail){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.tail=this.tail.prev;
//             this.tail.next=null;
//         }
//         this.size--;
//         return `Value removed`
//     }

//     print(){
//         if(this.isEmpty()){
//             return `List is empty`
//         }else{
//             let curr = this.head;
//             let str = '';
//             while(curr){
//                 str+=`${curr.val} `
//                 curr=curr.next;
//             }
//             console.log(str);
//         }
//     }
// }


// const dList = new dLL();
// console.log(dList.append(20));
// console.log(dList.prepend(10));
// console.log(dList.append(30));
// console.log(dList.append(40));
// dList.print();


// console.log(dList.removeFront());
// dList.print();
// console.log(dList.removeEnd());
// dList.print();



class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    
    isEmpty(){
        return this.size===0
    }
    
    append(val){
      const node = new Node(val);
      if(this.isEmpty()){
          this.head=node;
      }else{
          let curr=this.head;
          while(curr.next){
              curr=curr.next;
          }
          curr.next=node;
      }
      this.size++;
      return `Value added`
    }
    
    reverse(){
        if(this.isEmpty()){
            return `List is Empty`
        }
        let prev=null;
        let curr=this.head;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
        return `Lsit reversed`
    }
    
    middle(){
        if(this.isEmpty()){
            return `List is empty`
        }else{
            let prev = null;
            let slow = this.head;
            let fast = this.head;
            while(fast && fast.next){
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow ? slow.val : 0
        }
    }
    
    removeMiddle(){
        if(this.isEmpty()){
            return `List is empty`
        }else{
            let prev = null;
            let slow = this.head;
            let fast = this.head;
            while(fast && fast.next){
                fast = fast.next.next;
                prev = slow;
                slow = slow.next;
            }
            prev.next = slow.next;
            return `Middle element removed`;
        }
    }
    
    removeOdd(){
        if(this.isEmpty()){
            return `List is empty`
        }
        while(this.head && this.head.val%2!==0){
            this.head = this.head.next;
            this.size--;
        }
        if(!this.head){
            return `All values are odd`
        }else{
            let curr = this.head;
            while(curr && curr.next){
                if(curr.next.val % 2 !== 0){
                    curr.next = curr.next.next;
                    this.size--;
                }else{
                    curr = curr.next;
                }
            }
        }
        return `All odd values removed`
    }
    
    display(){
        if(this.isEmpty()){
            return `List is empty`
        }else{
            let str = ``;
            let curr = this.head;
            while(curr){
                str+=`${curr.val} `;
                curr = curr.next;
            }
            return str;
        }
    }
}



// const list1 = new linkedList();
// const list2 = new linkedList();
// console.log(list1.append(1));
// console.log(list1.append(2));
// console.log(list1.append(3));
// console.log(list1.append(4));
// // console.log(list1.append(50));
// console.log(list1.removeOdd());
// console.log(list1.display());



// console.log(list2.append(40));
// console.log(list2.append(50));
// console.log(list2.append(60));

// console.log(list2.display());
// console.log(list.reverse());
// console.log(list.display());








// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList{
    
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(val){
//         const node = new Node(val);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//         return `Value prepend`
//     }

//     append(val){
//         const node = new Node(val);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let curr = this.head;
//             while(curr.next){
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//         this.size++;
//         return 'Value added to list'
//     }

//     inserAt(val,index){
//         if(index<0 || index>this.size){
//             return `Invalid size or index`
//         }
//         if(index === 0){
//             this.prepend(val);
//         }else{
//             const node = new Node(val);
//             let curr = this.head;
//             for(let i=0; i<index; i++){
//                 curr= curr.next;
//             }
//             node.next = curr.next;
//             curr.next = node;
//             this.size++;
//             return `Value inserted`
//         }
//     }

//     display(){
//         if(this.isEmpty()){
//             return 'List is empty'
//         }else{
//             let curr = this.head;
//             let a = '';
//             while(curr){
//                 a+=`${curr.val} `;
//                 curr= curr.next;
//             }
//             return a;
//         }
//     }

// }

// const list = new LinkedList();
// console.log(list.append(1));
// console.log(list.append(2));
// console.log(list.append(3));
// console.log(list.display());


// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//         this.prev=null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     isEmpty(){
//         return this.size===0;
//     }

//     prepend(){
//         const node = new Node(val);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail = node;
//         }else{
//             node.next=this.head;
//             this.head.prev=node;
//             this.head=node;
//         }
//         this.size++;
//         return `Value prepend`
//     }

//     print(){
//         if(this.isEmpty()){
//             return `List is empty`
//         }else{
//             let curr = this.head;
//             let str = '';
//             while(curr){
//                 str+=`${curr.val} `;
//                 curr=curr.next;
//             }
//             console.log(str);
//         }
//     }
// }