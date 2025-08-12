// class Node{
//     constructor(value){
//         this.value=value;
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

//     append(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//         }else{
//             let prev=this.head;
//             while(prev.next){
//                 prev=prev.next;
//             }
//             prev.next=node;
//         }
//         this.size++;
//     }

//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return `Invalid index.`
//         }
//         if(index===0){
//             this.prepend(value);
//         }else{
//             const node= new Node(value);
//             let prev=this.head;
//             for(let i=0; i<index-1; i++){
//                 prev=prev.next;
//             }
//             node.next=prev.next;
//             prev.next=node;
//             this.size++;
//         }
//         return `Value inserted.`
//     }

//     search(value){
//         if(this.isEmpty()){
//             return `Empty list`
//         }else{
//             let i=0;
//             let curr=this.head;
//             while(curr){
//                 if(curr.value === value){
//                     return `Element found at index ${i}`;
//                 }
//                 curr=curr.next;
//                 i++;
//             }
//         }
//         return `Element not found`
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log(`List is empty`);
//         }else{
//             let curr=this.head;
//             let listVal='';
//             while(curr){
//                 listVal+=`${curr.value} `;
//                 curr=curr.next;
//             }
//             console.log(listVal);
//         }
//     }
// }

// const list= new linkedList;

// list.append(10);
// list.append(20);
// list.prepend(30);
// console.log(list.getSize());
// list.print();
// console.log(list.insert(40,3));
// list.print();
// console.log(list.search(10));


class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
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

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            return `List is empty.`
        }else{
            const curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
        }
        this.size++;
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

    insert(value,index){
       if(index<0 || index>this.size){
        return `Invalid index`;
       }
       if(index===0){
        this.prepend(value);
       }else{
        const node = new Node(value);
        let curr = this.head;
        for(let i=0; i<index-1; i++){
            curr=curr.next;
        }
        node.next=curr.next;
        curr.next=node;
        this.size++;
       }
       return `Value inserted`
    }
}

