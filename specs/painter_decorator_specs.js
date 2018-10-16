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


  describe('Paint Can', function(){
    let blue;
    beforeEach(function(){
      blue = new PaintCan(10);
    }); // before end

    it('should have a volume', function(){
      assert.strictEqual(blue.volume, 10);
    });

    it('should be able to check if it is empty', function(){
      blue.paint(room)
      assert.strictEqual(blue.volume, 0)
    });

  }); //Paint can describe end

}); // Room Describe end






describe('Decorator', function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
  });

  it('Should start without any paint', function(){
    assert.deepStrictEqual(decorator.paintStock, [])
  });

}); // Decorator describe end
