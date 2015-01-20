// DEPENDENCIES: graph.js, heuristics.js, binaryHeap.js

Graph.prototype.greedyBestFirst = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var h = new Heuristic();
	var frontier = new BinaryHeap(function(node){return node.estimate});
	var startingNode = this.getNode(startingNodeID);
	startingNode.estimate = 0;
	startingNode.parent = null;
	frontier.push(startingNode);
	while(frontier.size()>0){
		var currentNode = frontier.pop();
		console.log(currentNode);
		if(currentNode.id == endingNodeID) break;
		for(edge in currentNode.edges){
			var currentEdge = currentNode.edges[edge];
			var neighbor = currentEdge.target;
			if(neighbor.parent == ''){
				var estimate = h.manhattan(this.getNode(endingNodeID), neighbor);
				neighbor.estimate = estimate;
				neighbor.parent = currentNode;
				frontier.push(neighbor);
			}
		}
	}
	this.readPath(startingNodeID, endingNodeID);
}