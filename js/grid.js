var Grid = function(grid, options){
	Graph.call(this, options);
	this.grid = [];
	this.buildGrid(grid);
	// this.connectGrid();
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
			for(var i=0; i<this.grid.length; i++){
				for(var j=0; j<this.grid[i].length; j++){
					var node = this.grid[i][j];
				}
			}
		}
	}
});
