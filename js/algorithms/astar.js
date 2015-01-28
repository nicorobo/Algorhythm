// DEPENDENCIES: graph.js, heuristics.js, binaryHeap.js

Graph.prototype.astar = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var h = new Heuristic();
	var frontier = new BinaryHeap(function(node){return node.estimate});
	var startingNode = this.getNode(startingNodeID);
	var closest = startingNode;
	var targetFound = false;
	startingNode.estimate = 99999999;
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
			if(!neighbor.visited || newCost<neighbor.cost){
				var estimate = h.manhattan(this.getNode(endingNodeID), neighbor)+newCost;
				if(this.options.closest){
					console.log('Hmm is this the new closest node?');
					console.log('Estimate: '+estimate+' closest.estimate: '+closest.estimate );
					if(estimate<closest.estimate || (estimate==closest.estimate && newCost<closest.estimate)){
						console.log('We have a new closest node!');
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