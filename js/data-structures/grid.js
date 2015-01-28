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
	    	console.log('Building grid...');
			for(var i=0; i<grid.length; i++){
				var row = [];
				for(var j=0; j<grid[i].length; j++){
					row.push(this.addNode(j, i, grid[i][j]));
				}
				this.grid.push(row);
			}
			console.log('Grid complete!')
		}
	}, 
	connectGrid: {
		value: function(){
			console.log('Connecting grid...');
			var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
			var diagonal_directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
			for(var i=0; i<this.grid.length; i++){
				for(var j=0; j<this.grid[i].length; j++){
					var node = this.grid[i][j];
					for(direction in directions){
						var dir = directions[direction];
						var newX = j+dir[0];
						var newY = i+dir[1];
						if((0<=newX && newX<this.grid[i].length) && (0<=newY && newY<this.grid.length)){
							if(this.getNode(this.grid[newY][newX]).weight != this.options.wall){
								this.connectNodes(node, this.grid[newY][newX], 0, false);
							}
						}
					}
					if(this.options.diagonal){
						for(direction in diagonal_directions){
						var dir = diagonal_directions[direction];
						var newX = j+dir[0];
						var newY = i+dir[1];
						if((0<=newX && newX<this.grid[i].length) && (0<=newY && newY<this.grid.length)){
							if(this.getNode(this.grid[newY][newX]).weight != this.options.wall){
								//.41421356237 is 1-sqrt(2).
								this.connectNodes(node, this.grid[newY][newX], 0.4142136, false);
							}
						}
					}
					}
				}
			}
			console.log('Grid connected!');
		}
	},
	getNode: {
		value: function(id){
			if(typeof id == "object"){
				id = this.grid[id[1]][id[0]];
			}
			return this.nodes[this.nodeIDList.indexOf(id)];
		}
	}
});
