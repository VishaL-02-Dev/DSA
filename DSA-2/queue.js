class Queue{
    constructor(){
        this.items=[];
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }

    enqueue(elem){
        this.items.push(elem);
    }

    dequeue(){
        if(this.isEmpty()){
            return `Empty queue`
        }else{
            return this.items.shift();
        }
    }

    peek(){
        if(this.isEmpty()){
            return `Queue is empty`
        }else{
            return this.items[0];
        }
    }

    print(){
        console.log(this.items.join('<-'));
    }
}

const queue = new Queue;
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.print();
queue.dequeue();
queue.print();