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
                this.#insertNode(node.right,node);
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
}

const bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(6);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
console.log(bst.findMax(bst.root));
console.log(bst.findMin(bst.root));