// DEPENDENCIES: graph.js, binaryHeap.js

Graph.prototype.dijkstras = function(startingNode, endingNode){
	this.cleanNodes();
	var frontier = new BinaryHeap(function(node){return node.cost});
	this.getNode(startingNode).parent = null;
	frontier.push(startingNode);
	while(frontier.length>0){
		var currentID = frontier.shift();
		console.log(currentID);
		if(currentID == endingNode) break;
		var current = this.getNode(currentID);
		for(edge in current.edges){
			var neighbor = current.edges[edge].target;
			if(neighbor.parent == '') {
				frontier.push(neighbor.id);
				neighbor.parent = current;
			}
		}
	}
	this.readPath(startingNode, endingNode);
}