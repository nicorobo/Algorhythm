
var map = [
	[1, 9, 1, 1, 1],
	[1, 2, 1, 1, 1],
	[1, 9, 1, 1, 1],
	[1, 9, 1, 1, 1],
	[1, 9, 1, 1, 1]
	];
var graph = new Graph();
var grid = new Grid(map);
grid.greedyBestFirst(0, 24);