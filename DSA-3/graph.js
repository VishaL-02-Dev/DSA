// // Adjacency list Graph
// class GraphList {
//     constructor(){
//         this.adjacencyList = {};
//     }

//     addVer(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=new Set();
//         }
//     }

//     addEd(ver1, ver2){
//         if(this.adjacencyList[ver1]){
//             this.addVer(ver1);
//         }
//         if(this.adjacencyList[ver2]){
//             this.addVer(ver2);
//         }
//         this.adjacencyList[ver1].add(ver2);
//         this.adjacencyList[ver2].add(ver1);
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return;
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex);
//         }
//         delete this.adjacencyList[vertex];
//     }

//     removeEdge(vertex1, vertex2){
//         this.adjacencyList[vertex1].delete(vertex2);
//         this.adjacencyList[vertex2].delete(vertex1);
//     }

//     hasEdge(vertex1, vertex2){
//         return this.adjacencyList[vertex1].has(vertex2) &&
//         this.adjacencyList[vertex2].has(vertex1);
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + '->' + [...this.adjacencyList[vertex]])
//         }
//     }
// }

// const graph = new GraphList();
// graph.addVer('A');
// graph.addVer('B');
// graph.addVer('C');
// graph.addEd('A','B');
// graph.addEd('B','C');
// // graph.display();
// // console.log(graph.hasEdge('A','C'));
// graph.removeVertex('B');
// graph.display();

// Adjacency List 
class GraphL{
    constructor(){
        this.adjList = {};
    }

    addVertex(v){
        if(!this.adjList[v]){
            this.adjList[v]=new Set();
        }
    }

    addEdge(v1,v2){
        if(!this.adjList[v1]){
            this.addVertex(v1);
        }
        if(!this.adjList[v2]){  
            this.addVertex(v2)
        }
        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    removeEdge(v1,v2){
        this.adjList[v1].delete(v2);
        this.adjList[v2].delete(v1);
    }

    removeVertex(v){
        if(!this.adjList[v]) return `No such vertex`;
        for(let vertex of this.adjList[v]){
            this.removeEdge(vertex, v);
        }
        delete this.adjList[v];
    }

    hasEdge(v1,v2){
        return this.adjList[v1].has(v2) && this.adjList[v2].has(v1);
    }

    neighbors(v){
        return this.adjList[v] ? [...this.adjList[v]] : [];
    }

    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex} -> ${[...this.adjList[vertex]]}`)
        }
    }

    bfs(start){
        if(!this.adjList[start]) return [];

        const visited = new Set();
        const order = [];
        const queue = [start];
        let head = 0;

        visited.add(start);

        while(head<queue.length){
            const node= queue[head++];
            console.log(node);
            order.push(node);

            for(const neighbor of this.adjList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return order;
    }

    dfs(node, visited = new Set(), order=[]){
        if(!node ||visited.has(node)) return;
        visited.add(node);
        order.push(node);
        console.log(node);

        for(let neighbor of this.adjList[node]){
            this.dfs(neighbor, visited, order);
        }

        return order;
    }
}

const gL = new GraphL();
gL.addVertex('A');
gL.addVertex('B');
gL.addEdge('A','B');
gL.addEdge('A','C');
gL.addEdge('B','E')
gL.addEdge('B','D')
// gL.addEdge('C','G');
// gL.removeEdge('C','D');
// gL.removeVertex('C')
// console.log(gL.neighbors('A'));
// console.log(gL.bfs('A'));
console.log(gL.dfs('A'));
// gL.print();