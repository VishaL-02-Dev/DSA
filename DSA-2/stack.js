class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    push(elem){
        this.items.push(elem);
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join('->'));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(1);
stack.print();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());