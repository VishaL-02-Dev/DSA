// class TreeNode{
//     constructor(val){
//         this.val = val;
//         this.children = [];
//     }

//     addChild(node){
//         this.children.push(node);
//     }

//     preOrder(node){
//         if(!node) return;
//         console.log(node.val);
//         for(let child of node.children){
//             this.preOrder(child);
//         }
//     }

//     postOrder(node){
//         if(!node) return;
//         for(let child of node.children){
//             this.postOrder(child);
//         }
//         console.log(node.val);
//     }
// }

// const root = new TreeNode('A');
// const child1 = new TreeNode('B');
// const child2 = new TreeNode('C');

// root.addChild(child1);
// root.addChild(child2);
// child1.addChild(new TreeNode('D'));
// child1.addChild(new TreeNode('E'));

// root.preOrder(root);
// root.postOrder(root);


// Binary Search Tree
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
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
            this.#insertNode(this.root,node)
        }
        // console.log('Value inserted')
    }

    #insertNode(root,node){
        if(node.val < root.val){
            if(root. left === null){
                root.left = node;
            }else{
                this.#insertNode(root.left, node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.#insertNode(this.right, node);
            }
        }
        console.log('Value inserted')
    }

    search(root, val){
        if(!root){
            return false;
        }else{
            if(root.val === val){
                return true;
            }else if(val<root.val){
                return this.search(root.left,val);
            }else{
                return this.search(root.right,val);
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
        const queue =[];
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

    min(root){
        if(!root.left){
            return `Minimum: ${root.val}`;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        if(!root.right){
            return `Maximum: ${root.val}`;
        }else{
            return this.max(root.right);
        }
    }

    delete(val){
        this.root = this.#deleteNode(this.root,val);
    }
    
    #deleteNode(root, val){
        if(root === null){
            return root;
        }
        if(val<root.val){
            root.left = this.#deleteNode(root.left, val)
        }else if(val>root.val){
            root.right = this.#deleteNode(root.right, val);
        }else {
            if(!root.left && root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.val = this.min(root.right);
            root.right = this.#deleteNode(root.right, val)
        }
        return root;
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root, 9));
console.log(bst);
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
bst.levelOrder();
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
bst.delete(10);
bst.levelOrder();

// // Print All Nodes in Level Order (BFS)
// class TreeNode {
//     constructor(val){
//         this.val = val;
//         this.children =[];
//     }

//     addChild(node){
//         this.children.push(node);
//     }
// }

// function levelOrder(root){
//     if(!root) return;
//     const queue = [root];
//     while(queue.length){
//         const node = queue.shift();
//         console.log(node.val);
//         for(let child of node.children){
//             queue.push(child);
//         }
//     }
// }
// const root = new TreeNode('A');
// const child1 = new TreeNode('B');
// const child2 = new TreeNode('C');
// root.addChild(child1);
// root.addChild(child2);
// child1.addChild(new TreeNode('D'));
// child1.addChild(new TreeNode('E'));
// levelOrder(root);


// // BST Problem: Insert and Search a Value
// class BSTNode{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST{
//     constructor(){
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }
    
//     insert(val){
//         const node = new BSTNode(val);
//         if(this.isEmpty()){
//             this.root = node;
//         }else{
//             this.#insertNode(this.root,node);
//         }
//     }

//     #insertNode(root,node){
//         if(node.val < root.val){
//             if(root.left === null){
//                 root.left = node;
//             }else{
//                 this.#insertNode(root.left,node);
//             }
//         }else{
//             if(node.val > root.val){
//                 if(root.right === null){
//                     root.right = node;
//                 }else{
//                     this.#insertNode(root.right,node)
//                 }
//             }
//         }
//     }

//     levelOrder(){
//         const queue = [];
//         queue.push(this.root);
//         while(queue.length){
//             let curr = queue.shift();
//             console.log(curr.val);
//             if(curr.left){
//                 queue.push(curr.left);
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     search(val){
//         return this.#search(this.root,val);
//     }

//     #search(node, val){
//         if(!node) return false;
//         if(node.val === val) return true;
//         if(val < node.val) return this.#search(node.left, val);
//         else return this.#search(node.right, val);
//     }

//     findMin(node){
//         while(node.left !== null){
//             node = node.left;
//         }
//         return node.val;
//     }

//     findMax(node){
//         while(node.right !== null){
//             node = node.right;
//         }
//         return node.val;
//     }

// }

// const bsT = new BST();
// bsT.insert(50);
// bsT.insert(20);
// bsT.insert(60);
// bsT.insert(30);
// bsT.insert(70);
// // bsT.levelOrder();
// console.log(bsT.search(70));
// console.log(bsT.search(23));
// console.log(bsT.findMin(bsT.root));
// console.log(bsT.findMax(bsT.root));