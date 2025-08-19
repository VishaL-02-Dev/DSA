// Adjacency List
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // remove for directed graph
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex]) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

// Adjacency list Graph
class GraphList {
    constructor(){
        this.adjacencyList = {};
    }

    addVer(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }
    }

    addEd(ver1, ver2){
        if(this.adjacencyList[ver1]){
            this.addVer(ver1);
        }
        if(this.adjacencyList[ver2]){
            this.addVer(ver2);
        }
        this.adjacencyList[ver1].add(ver2);
        this.adjacencyList[ver2].add(ver1);
    }

    
}

const graph = new GraphList();
graph.addVer('A');
graph.addVer('B');
graph.addVer('C');
graph.addEd('A','B');
graph.addEd('B','C');
