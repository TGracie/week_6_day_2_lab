const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Room', function() {
  let room;
  beforeEach(function() {
    room = new Room(20, "unpainted");
  });

  it('should have an area', function(){
    assert.strictEqual(room.area, 20);
  }); // area end

  it('Should start unpainted', function(){
    assert.strictEqual(room.status, "unpainted");
  }); // status check end

  it('should be able to be painted', function(){
    room.paintRoom();
    assert.strictEqual(room.status, "painted");
  });

}); // Room Describe end

describe('Paint Can', function(){
  let paintCan;
  beforeEach(function(){
    blue = new PaintCan(10);
  }); // before end

  it('should have a volume', function(){
    assert.strictEqual(blue.volume, 10);
  });

}); //Paint can describe end







describe('Decorator', function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
  });

  it('Should start without any paint', function(){
    assert.deepStrictEqual(decorator.paintStock, [])
  });

}); // Decorator describe end
