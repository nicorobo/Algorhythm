var Heuristic = function(){};

Heuristic.prototype = {
	manhattan: function(pos1, pos2){
		return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
	},
	diagonal: function(pos1, pos2){

	},
	chebyschev: function(pos1, pos2){

	}
}