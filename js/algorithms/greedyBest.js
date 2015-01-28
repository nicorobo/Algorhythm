// DEPENDENCIES: graph.js, heuristics.js, binaryHeap.js

Graph.prototype.greedyBest = function(startingNodeID, endingNodeID, algorithmOptions){
	if(!algorithmOptions.heuristic) algorithmOptions.heuristic = 'manhattan';
	this.cleanNodes();
	var h = new Heuristic()[algorithmOptions.heuristic];
	var frontier = new BinaryHeap(function(node){return node.estimate});
	var startingNode = this.getNode(startingNodeID);
	endingNodeID = this.getNode(endingNodeID).id;
	var closest = startingNode;
	var targetFound = false;
	var checkAvoid = false;
	if(algorithmOptions.avoid != undefined){
		checkAvoid = true;
		if(typeof algorithmOptions.avoid != 'object') algorithmOptions.avoid = [algorithmOptions.avoid];
	}
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
			if(checkAvoid){
				if(algorithmOptions.avoid.indexOf(neighbor.weight) != -1) break;
			}
			if(neighbor.parent == ''){
				var estimate = h(this.getNode(endingNodeID), neighbor);
				neighbor.estimate = estimate;
				neighbor.parent = currentNode;
				if(algorithmOptions.closest){
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
	else if(algorithmOptions.closest){
		console.log('This is the path to the closest node.');
		this.readPath(startingNodeID, closest.id);
	}
	else{
		console.log('Sorry, the path cannot be completed.');
	}
}