'use strict';

function Game() {
  this._scorecard = [];
};

Game.prototype.roll = function(pinsDown) {
  this._scorecard.push(pinsDown);
};

Game.prototype.tot = function() {
  var total = 0;
  for(var idx = 0; idx < this._scorecard.length; ++idx ) {
      total += this._scorecard[idx];
  };
  return total;
};
