// DEPENDENCIES: none

var Graph = function(options){
	this.nodes = [];
	this.nodeIDList = [];
	this.nodeID = 0;
	this.options = options || {};
}

Graph.prototype = {
	addNode: function(x, y, weight){
		var id = this.nodeID;
		this.nodes.push(new Node(x, y, weight, id));
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
	cleanNodes: function(){
		for(node in this.nodes){
			var aNode = this.nodes[node];
			aNode.visited = false;
			aNode.cost = 9999999;
			aNode.parent = '';
		}
	},
	readPath: function(startingNodeID, endingNodeID){
		console.log('Beginning Path!');
		var path = [endingNodeID];
		var child = this.getNode(endingNodeID);
		var parent = child.parent;
		while(parent!=null){
			path.push(parent.id);
			child = parent;
			parent = child.parent;
		}
		console.log(path.reverse())
	},
	readNodes: function(){
		for(node in this.nodes){
			console.log(this.nodes[node]);
		}
	}
}


var Node = function(x, y, weight, id){
	this.id = id;
	this.x = x;
	this.y = y;
	this.weight = weight;
	this.cost = 0;
	this.estimate = 0;
	this.visited = false;
	this.edges = [];
	this.parent = '';
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
		return 'x: '+this.x+' y: '+this.y+' weight: '+this.weight+' Edge Length: '+this.edges.length;
	}
}


var Edge = function(target, weight){
	this.target = target;
	this.weight = weight;
}

Edge.prototype = {

}