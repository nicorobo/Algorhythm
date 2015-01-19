// DEPENDENCIES: graph.js, binaryHeap.js

Graph.prototype.dijkstras = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var frontier = new BinaryHeap(function(node){return node.cost});
	var startingNode = this.getNode(startingNodeID);
	startingNode.cost = 0;
	startingNode.parent = null;
	frontier.push(startingNode);
	while(frontier.size()>0){
		var currentNode = frontier.pop();
		console.log(currentNode);
		if(currentNode.id == endingNodeID) break;
		for(edge in currentNode.edges){
			var currentEdge = currentNode.edges[edge];
			var neighbor = currentEdge.target;
			var newCost = currentNode.cost+currentEdge.weight+neighbor.weight;
			if(newCost<neighbor.cost){
				neighbor.cost = newCost;
				neighbor.parent = currentNode;
				frontier.push(neighbor);
			}
			
		}
	}
	this.readPath(startingNodeID, endingNodeID);
}