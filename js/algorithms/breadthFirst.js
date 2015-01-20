// DEPENDENCIES: graph.js

Graph.prototype.breadthFirstSearch = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var frontier = [];
	this.getNode(startingNodeID).parent = null;
	this.getNode(startingNodeID).visited = true;
	frontier.push(startingNodeID);
	while(frontier.length>0){
		var currentID = frontier.shift();
		console.log(this.getNode(currentID));
		if(currentID == endingNodeID) break;
		var currentNode = this.getNode(currentID);
		for(edge in currentNode.edges){
			var neighbor = currentNode.edges[edge].target;
			if(!neighbor.visited) {
				neighbor.visited = true;
				neighbor.parent = currentNode;
				frontier.push(neighbor.id);
			}
		}
	}
	this.readPath(startingNodeID, endingNodeID);
}
