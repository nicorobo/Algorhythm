
var map = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1]
	];
var graph = new Graph();
var grid = new Grid(map, {diagonal: true, closest: true, wall: 0});
grid.greedyBestFirst(0, 4);