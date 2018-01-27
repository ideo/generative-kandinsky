// http://www.wassilykandinsky.net/work-247.php
function regenerate(seed) {

  // Sets Math.random to a PRNG initialized using the given explicit seed.
  if (seed) {
    Math.seedrandom(seed)
  } else {
    Math.seedrandom()
  }
  
  var N_X = 11
  var N_Y = 11
  var BACKGROUND_COLOR = Snap.rgb(230, 220, 210)
  var BIG_CIRCLE_STROKE_WIDTH = 0.5
  var BIG_CIRCLE_RADIUS = N_X / 2 - 0.5
  var BIG_CIRCLE_COLOR = Snap.rgb(25, 35, 45)
  var N_CIRCLES = 15
  var N_LINES = 5
  var N_BARS = 2

  var drawBars = function (nBars) {
    var n_done = 0
    while (n_done < nBars) {
      var bar = s.rect(-N_X / 2, N_Y / 2, 2 * N_X, 2).attr({
        stroke: 'none',
        fill: chroma.random(),
        style: 'mix-blend-mode: darken'
      })
      bar.transform(
        Snap.format('r{angle},{x_center},{y_center}', {
          angle: 360 * Math.random(),
          x_center: N_X / 2,
          y_center: N_Y / 2
        })
      )
      n_done += 1
    }
  }

  var drawCircles = function (nCircles, maxRadius) {
    var n_done = 0
    while (n_done < nCircles) {
      var color = chroma.random().hex()
      var x = 2 + (N_X - 4) * Math.random()
      var y = 2 + (N_Y - 4) * Math.random()
      var r = Math.pow(2 * Math.random(), 1)
      var dx = (x - N_X / 2)
      var dy = (y - N_Y / 2)
      var dr = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
      if ((dr + r) < maxRadius) {
        s.circle(x, y, r).attr({
          stroke: 'none',
          fill: color,
          style: 'mix-blend-mode: darken'
        })
        n_done += 1
      }
    }
  }

  var drawLines = function (nLines, length, baseWidth, jitterWidth, color) {
    var n_done = 0
    while (n_done < nLines) {
      var x1 = 2 + (N_X - 4) * Math.random()
      var y1 = 2 + (N_Y - 4) * Math.random()
      var x2 = 2 + (N_X - 4) * Math.random()
      var y2 = 2 + (N_Y - 4) * Math.random()
      var dx = x2 - x1
      var dy = y2 - y1
      var dr = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
      if (dr < N_X / length) {
        var strokeWidth = baseWidth + jitterWidth * Math.random()
        s.line(x1, y1, x2, y2).attr({
          stroke: color,
          strokeWidth: strokeWidth
        })
        n_done += 1
      }
    }
  }
  
  var s = makeSVG(N_X, N_Y)

  // background square
  s.rect(-1, -1, N_X + 2, N_Y + 2).attr({
    stroke: 'none',
    fill: BACKGROUND_COLOR,
    style: 'mix-blend-mode: darken'
  })
  
  // draw big circle
  s.circle(N_X / 2, N_Y / 2, BIG_CIRCLE_RADIUS).attr({
    stroke: BIG_CIRCLE_COLOR,
    fill: 'none',
    strokeWidth: BIG_CIRCLE_STROKE_WIDTH
  })

  drawBars(N_BARS)
  drawCircles(N_CIRCLES, BIG_CIRCLE_RADIUS - BIG_CIRCLE_STROKE_WIDTH)
  drawLines(N_LINES, 2, 0.01, 0.09, 'black')
  drawLines(N_LINES, 3, 0.005, 0.015, 'black')

}
regenerate(window.location.hash.toLowerCase())
