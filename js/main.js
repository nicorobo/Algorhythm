
var map = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1]
	];
var graph = new Graph();
var grid = new Grid(map);
grid.astar(11, 24);