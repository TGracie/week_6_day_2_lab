const Decorator = function () {
  this.paintStock = [];
};


Decorator.prototype.paintLevel = function(){
  return this.paintStock.length
};

Decorator.prototype.addPaint = function(paint){
  this.paintStock.push(paint);
};

module.exports = Decorator
