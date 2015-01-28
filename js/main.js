
var map = [
	[1, 1, 0, 1, 1],
	[1, 1, 0, 1, 1],
	[1, 1, 0, 0, 0],
	[1, 1, 2, 1, 1],
	[1, 1, 1, 1, 1]
	];
var graph = new Graph();
var grid = new Grid(map, {diagonal: true, wall: 0});
grid.greedyBest(0, 19, {closest: false, heuristic: 'manhattan', avoid: 2});