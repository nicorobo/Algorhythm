
var map = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1]
	];
var graph = new Graph();
var grid = new Grid(map, {diagonal: true, closest: true});
grid.astar(11, 24);