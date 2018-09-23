<template>
  <div>
    <canvas id="myCanvas" resize></canvas>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'CanvasComponent',
  data: function () {
    return {
      spaceBetweenGrid: 20,
      firstPoint: null,
      tempLine: null,
      lines: null
    }
  }, 
  mounted () {
    var canvas = document.getElementById('myCanvas')
    paper.setup(canvas)

    window.addEventListener('resize', () => {
        paper.view.viewSize = new paper.Size(window.innerWidth, window.innerHeight)
    })

    paper.view.viewSize = new paper.Size(window.innerWidth, window.innerHeight)

    paper.view.on('mousedown', this.mouseDown);
    paper.view.on('mousedrag', this.mouseDrag);
    paper.view.on('mouseup', this.mouseUp);

    this.tempLine = new paper.Group();
    this.lines = new paper.Group();

    this.printGrid()
  },
  methods: {
    printGrid : function () {
      for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
          this.printCircle(i*this.spaceBetweenGrid, j*this.spaceBetweenGrid, 2)
        }
      }
    },
    printCircle: function (x, y, radius) {
      var circle = new paper.Path.Circle({
        center: new paper.Point(x, y),
        radius: radius,
        fillColor: '#000'
      })
    }, 
    printLine: function () {
      /*
      var line = new paper.Path.Line({
        from: pos1,
        to: pos2
      })
      line.strokeColor = 'black';*/
    }, 
    mouseDown: function (e) {
      var pos = this.findClosestPoint(e.point.x, e.point.y)
      this.firstPoint = pos

      return false
    }, 
    mouseDrag: function (e) {
      var pos = this.findClosestPoint(e.point.x, e.point.y)

      this.tempLine.removeChildren()
      this.tempLine.addChild(new paper.Path.Line({
        from: this.firstPoint,
        to: pos,
        strokeColor: 'black'
      }))

      return false
    }, 
    mouseUp: function (e) {
      var pos = this.findClosestPoint(e.point.x, e.point.y)

      this.tempLine.removeChildren()
      this.lines.addChild(new paper.Path.Line({
        from: this.firstPoint,
        to: pos,
        strokeColor: 'black'
      }))

      return false
    }, 
    findClosestPoint: function (x, y) {
      var closestX = 0;
      var extraX = x % this.spaceBetweenGrid;
      if (extraX < this.spaceBetweenGrid / 2) {
        closestX = x - extraX;
      } else {
        closestX = x  + (this.spaceBetweenGrid - extraX);
      }

      var closestY = 0;
      var extraY = y % this.spaceBetweenGrid;
      if (extraY < this.spaceBetweenGrid / 2) {
        closestY = y - extraY;
      } else {
        closestY = y  + (this.spaceBetweenGrid - extraY);
      }

      return new paper.Point(closestX, closestY)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
