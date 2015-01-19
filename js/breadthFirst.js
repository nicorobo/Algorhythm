// DEPENDENCIES: graph.js

Graph.prototype.breadthFirstSearch = function(startingNodeID, endingNodeID){
	this.cleanNodes();
	var frontier = [];
	this.getNode(startingNodeID).parent = null;
	frontier.push(startingNodeID);
	while(frontier.length>0){
		var currentID = frontier.shift();
		console.log(currentID);
		if(currentID == endingNodeI) break;
		var currentNode = this.getNode(currentID);
		for(edge in currentNode.edges){
			var neighbor = currentNode.edges[edge].target;
			if(neighbor.parent == '') {
				frontier.push(neighbor.id);
				neighbor.parent = currentNode;
			}
		}
	}
	this.readPath(startingNodeID, endingNodeID);
}
