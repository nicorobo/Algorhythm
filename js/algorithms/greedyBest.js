// DEPENDENCIES: graph.js, heuristics.js, binaryHeap.js

Graph.prototype.greedyBestFirst = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var h = new Heuristic();
	var frontier = new BinaryHeap(function(node){return node.estimate});
	var startingNode = this.getNode(startingNodeID);
	var closest = startingNode;
	var targetFound = false;
	startingNode.estimate = 99999;
	startingNode.parent = null;
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
			if(neighbor.parent == ''){
				var estimate = h.manhattan(this.getNode(endingNodeID), neighbor);
				neighbor.estimate = estimate;
				neighbor.parent = currentNode;
				if(this.options.closest){
					if(estimate<closest.estimate) closest = neighbor;
				}
				frontier.push(neighbor);
			}
		}
	}
	if(targetFound){
		console.log('The is the path to the ending node.');
		this.readPath(startingNodeID, endingNodeID);
	}
	else if(this.options.closest){
		console.log('This is the path to the closest node.');
		this.readPath(startingNodeID, closest.id);
	}
	else{
		console.log('Sorry, the path cannot be completed.');
	}
}