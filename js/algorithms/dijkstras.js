// DEPENDENCIES: graph.js, binaryHeap.js

Graph.prototype.dijkstras = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var frontier = new BinaryHeap(function(node){return node.cost});
	var startingNode = this.getNode(startingNodeID);
	var targetFound = false;
	startingNode.cost = 0;
	startingNode.parent = null;
	startingNode.visited = true;
	frontier.push(startingNode);
	while(frontier.size()>0){
		var currentNode = frontier.pop();
		console.log(currentNode);
		if(currentNode.id == endingNodeID){
			targetFound = true;
			break;
		}
		for(edge in currentNode.edges){
			var currentEdge = currentNode.edges[edge];
			var neighbor = currentEdge.target;
			var newCost = currentNode.cost+currentEdge.weight+neighbor.weight;
			if(newCost<neighbor.cost || !neighbor.visited){
				neighbor.cost = newCost;
				neighbor.visited = true;
				neighbor.parent = currentNode;
				frontier.push(neighbor);
			}
		}
	}
	if(targetFound){
		console.log('The is the path to the ending node.');
		this.readPath(startingNodeID, endingNodeID);
	}
	else{
		console.log('Sorry, the path cannot be completed.');
	}
}