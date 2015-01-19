var Graph = function(){
	this.nodes = [];
}

Graph.prototype = {
	addNode: function(x, y, weight){
		if(typeof id == 'object') this.nodes.push(x);
		else this.nodes.push(new Node(x, y, weight));
	},
	removeNode: function(node){
		var index = this.nodes.indexOf(node);
		if (index >= 0) {
		  this.nodes.splice( index, 1 );
		}
	},
	connectNodes: function(node1, node2, weight, undirected){
		var undirected = undirected || true;
		node1.addEdge(new Edge(node2, weight));
		if(undirected){
			node2.addEdge(new Edge(node1, weight));
		}
	},
	disconnectNodes: function(node1, node2, undirected){
		var undirected = undirected || true;
		node1.removeEdge(node2);
		if(undirected){
			node2.removeEdge(node1);
		}
	}
}



var Node = function(id, x, y, weight){
	this.x = x;
	this.y = y;
	this.weight = weight || 1;
	this.visited = false;
	this.edges = [];
	this.parent;
}

Node.prototype = {
	addEdge: function(edge){
		this.edges.push(edge);
	},
	removeEdge: function(target){
		var index = -1;
		for(var i=0; i<this.edges.length; i++){
			var e = this.edges[i];
			if(e.target == target) index = i;
		}
		if(index>=0) this.edges.splice( index, 1 );
		else console.log('There was no connection');
	},
	toString: function(){
		return 'x: '+this.x+' y: '+this.y+' weight: '+this.weight;
	}
}



var Edge = function(target, weight){
	this.target = target;
	this.weight = weight;
}

Edge.prototype = {

}


var graph = new Graph();
graph.addNode(1, 5, 2);
graph.addNode(4, 8, 1);
