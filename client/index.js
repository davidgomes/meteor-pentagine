function GameState () {
  this.setup = function () { };

  this.update = function () {
    if (penta.isMouseDown('left')) {
      var newCircle = { x: penta.getMouseX(),
                        y: penta.getMouseY(),
                        radius: 50,
                        color: '#ff00ff' };

      Circles.insert(newCircle);
      
      penta.drawCircle(newCircle.x, newCircle.y,
                       newCircle.radius, newCircle.color);
    }
  };

  this.draw = function () {
    _.each(Circles.find({ }).fetch(), function (circle) {
      penta.drawCircle(circle.x, circle.y, circle.radius,
                       circle.color);
    });
  };
}

Template.main.rendered = function () {
  penta = new Pentagine().setup();
  penta.switchState(new GameState());
};
