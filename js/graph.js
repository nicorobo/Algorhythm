var Graph = function(options){
	this.nodes = [];
	this.nodeIDList = [];
	this.nodeID = 0;
}

Graph.prototype = {
	addNode: function(x, y, cost){
		var id = this.nodeID;
		this.nodes.push(new Node(x, y, cost, id));
		this.nodeIDList.push(id);
		this.nodeID++;
		return id;
	},
	removeNode: function(id){
		var index = this.nodeIDList.indexOf(id);
		var node = this.nodes[index];
		node.removeAllEdges();
		this.nodes.splice(index, 1);
		this.nodeIDList.splice(index, 1);
	},
	connectNodes: function(id1, id2, weight, undirected){
		var node1 = this.nodes[this.nodeIDList.indexOf(id1)];
		var node2 = this.nodes[this.nodeIDList.indexOf(id2)];
		node1.addEdge(new Edge(node2, weight));
		if(undirected){
			node2.addEdge(new Edge(node1, weight));
		}
	},
	disconnectNodes: function(id1, id2, undirected){
		var node1 = this.nodes[this.nodeIDList.indexOf(id1)];
		var node2 = this.nodes[this.nodeIDList.indexOf(id2)];
		var undirected = undirected || true;
		node1.removeEdge(node2);
		if(undirected){
			node2.removeEdge(node1);
		}
	},
	getNode: function(id){
		return this.nodes[this.nodeIDList.indexOf(id)];
	},
	readNodes: function(){
		for(node in this.nodes){
			console.log(this.nodes[node]);
		}
	}
}



var Node = function(x, y, cost, id){
	this.id = id;
	this.x = x;
	this.y = y;
	this.cost = cost || 1;
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
	removeAllEdges: function(){
		for(var i=0; i<this.edges.length; i++){
			this.edges[i].target.removeEdge(this);
		}
		this.edges = [];
	},
	toString: function(){
		return 'x: '+this.x+' y: '+this.y+' cost: '+this.cost+' Edge Length: '+this.edges.length;
	}
}



var Edge = function(target, cost){
	this.target = target;
	this.cost = cost;
}

Edge.prototype = {

}