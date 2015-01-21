// DEPENDENCIES: graph.js, heuristics.js, binaryHeap.js

Graph.prototype.astar = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var h = new Heuristic();
	var frontier = new BinaryHeap(function(node){return node.estimate});
	var startingNode = this.getNode(startingNodeID);
	var closest = startingNode;
	startingNode.estimate = 0;
	startingNode.cost = 0;
	startingNode.parent = null;
	startingNode.visited = true;
	frontier.push(startingNode);
	while(frontier.size()>0){
		var currentNode = frontier.pop();
		console.log(currentNode);
		if(currentNode.id == endingNodeID) break;
		for(edge in currentNode.edges){
			var currentEdge = currentNode.edges[edge];
			var neighbor = currentEdge.target;
			var newCost = currentNode.cost+currentEdge.weight+neighbor.weight;
			if(!neighbor.visited || newCost<neighbor.cost){
				var estimate = h.manhattan(this.getNode(endingNodeID), neighbor)+newCost;
				if(this.options.closest){
					if(estimate<closest.estimate){
						closest = neighbor;
					}
				}
				neighbor.cost = newCost;
				neighbor.estimate = estimate;
				neighbor.parent = currentNode;
				neighbor.visited = true;
				frontier.push(neighbor);
			}
		}
	}
	this.readPath(startingNodeID, endingNodeID);
}