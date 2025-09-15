// // Tree
// class TreeNode{
//     constructor(val){
//         this.val=val;
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
//             postOrder(child);
//         }
//         console.log(node.val);
//     }

//     treeHeight(node){ // Add node= this to find height from the root 
//         if(!node) return 0
//         if(node.children.length===0) return 1;

//         let maxHeight = 0;
//         for(let child of node.children){
//             maxHeight = Math.max(maxHeight, this.treeHeight(child));
//         }
//         return 1 + maxHeight;
//     }

//     getDepth(node, target,depth =0){
//         if(!node) return -1;
//         if(node === target) return depth;
//         for(let child of node.children){
//             let d = this.getDepth(child, target, depth+1);
//             if(d!==-1) return d;
//         }
//         return -1;
//     }

    
// }
// const root = new TreeNode(10);
// const child1 = new TreeNode(11);
// const child2 = new TreeNode(12);
// const child3 = new TreeNode(13);
// const child4 = new TreeNode(14);
// root.addChild(child1);
// root.addChild(child2);
// child1.addChild(child3);
// child1.addChild(child4);
// root.preOrder(root);
// console.log('Height of the tree: ',root.treeHeight(root));
// console.log('Depth of child3: ',root.getDepth(root, child3));


// BST Problems
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
            this.#insertNode(this.root, node);
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
        if(val<node.val) return this.search(node.left, val);
        else return this.search(node.right, val);
    }

    height(node =this.root){
        if(!node) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    depth(val){
        let depth = 0;
        let curr = this.root;
        while(curr){
            if(curr.val === val) return depth;
            else if(val< curr.val){
                curr = curr.left;
            }else{
                curr = curr.right; 
            }
            depth++;
        }
        return -1;
    }

    preOrder(root){
        if(root){
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    }

    levelOrder(){            // BFS
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

    kthLargest(k){
        let count = 0;
        let result =null;

        function reverseInorder(node){
            if(!node || result !== null) return;

            reverseInorder(node.right);

            count++;
            if(count=== k){
                result = node.val;
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

    findMin(node){
        while(node.left !== null){
            node = node.left;
        }
        return node.val;
    }

    findMax(node){
        while(node.right !==null){
            node=node.right;
        }
        return node.val;
    }

    isValid(root, min=-Infinity, max=+Infinity){
        if(!root) return true;
        if(root.val<=min || root.val >= max) return false;
        return this.isValid(root.left, min, root.val) && this.isValid(root.right, root.val, max);
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
// bst.levelOrder();
// console.log('3rd Largest:',bst.kthLargest(3));
// console.log('Height of tree:',bst.height());
// console.log('Depth of 65:',bst.depth(65));
// console.log('Leaf nodes:',bst.leafCount());
// console.log(bst.search(bst.root,71));
// console.log(bst.findMax(bst.root));
// console.log(bst.findMin(bst.root));
// console.log(bst.isValid(bst.root));
console.log(bst.search(bst.root,99));
// console.log('DFS:',bst.DFS());
// console.group('BFS',bst.BFS());
console.log(bst.height());