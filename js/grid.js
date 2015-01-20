// DEPENDENCIES: graph.js


var Grid = function(grid, options){
	Graph.call(this, options);
	this.grid = [];
	this.buildGrid(grid);
	this.connectGrid();
}

Grid.prototype = Object.create(Graph.prototype, {
	buildGrid: { 
	    value: function(grid){ 
	    	console.log('We have a grid!');
			for(var i=0; i<grid.length; i++){
				var row = [];
				for(var j=0; j<grid[i].length; j++){
					row.push(this.addNode(j, i, grid[i][j]));
				}
				this.grid.push(row);
			}
		}
	}, 
	connectGrid: {
		value: function(){
			var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
			// var directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
			for(var i=0; i<this.grid.length; i++){
				for(var j=0; j<this.grid[i].length; j++){
					var node = this.grid[i][j];
					for(direction in directions){
						var dir = directions[direction];
						var newX = j+dir[0];
						var newY = i+dir[1];
						if((0<=newX && newX<this.grid[i].length) && (0<=newY && newY<this.grid.length)){
							this.connectNodes(node, this.grid[newY][newX], 0, false, false);
						}
					}
				}
			}
		}
	}
});
