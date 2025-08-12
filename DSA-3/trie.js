// class Node{
//     constructor(){
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node();
//     }

//     insert(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     search(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return node.isEndOfWord;
//     }

//     printTrie(node=this.root, level=0){
//         for(let char in node.children){
//             const childNode = node.children[char];
//             console.log(' '.repeat(level*2) + char + (childNode.isEndOfWord ? "*" : ""));
//             this.printTrie(node.children[char],level++);
//         }
//     }
// }
// const trie = new Trie();
// trie.insert('apple');
// trie.insert('app');
// trie.insert('application');
// trie.insert('people')
// trie.printTrie();


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
        let node =this.root;
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

    getWordsWithPrefix(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return `No words found`;
            }
            node = node.children[char];
        }
        return this.#collectAllWords(node,prefix)
    }

    #collectAllWords(node,prefix, result = []){
        if(node.isEndOfWord){
            result.push(prefix);
        }
        for(let char in node.children){
            this.#collectAllWords(node.children[char], prefix+char, result);
        }
        return result;
    }
}
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('application');
trie.insert('apply');
trie.insert('banana');
trie.insert('bat');

console.log(trie.getWordsWithPrefix('app'));
console.log(trie.getWordsWithPrefix('ba'));
console.log(trie.getWordsWithPrefix('cat'));