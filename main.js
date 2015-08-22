// Create a fullscreen canvas and get width/height
var canvas = document.createElement("canvas");
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

// Get context and setup font
var ctx = canvas.getContext("2d");
ctx.font = "80px Lucida Console, Arial, Helvatica, Sans-serif";
ctx.textAlign = "center";

var Z = 7;

// Black (red+green+blue) twitch on white, uses multiply
var twitchMul = function(cb) {
  ctx.globalCompositeOperation = "multiply";
  ["red", "green", "blue"].map(function(e) {
    var x, y;
    x = Math.random() * z - z/2;
    y = Math.random() * z - z/2;
    ctx.fillStyle = e;
    cb(x,y);
  });
};

// White (cyan+magenta+yellow) twitch on black, uses screen
var twitchAdd = function(cb) {
  ctx.globalCompositeOperation = "screen";
  ["cyan", "magenta", "yellow"].map(function(e) {
    var x, y;
    x = Math.random() * z - z/2;
    y = Math.random() * z - z/2;
    ctx.fillStyle = e;
    cb(x,y);
  });
};

// Render function
var render = function() {
  requestAnimationFrame(render);
  ctx.clearRect(0,0, w, h);
  var d = Date.now();
  
  // Twitch for 200 ms every 1500 ms
  if (d % 1500 < 300) {
    z = Z;
  } else {
    z = 0;
  }
  
  // Make the white twitchy writing on the bottom part
  twitchAdd(function(x, y){
  ctx.fillText("同", w/2+x, h-h/1.5+y);
  ctx.fillText("化", w/2+x, h-h/1.8+y);
  ctx.fillText("の", w/2+x, h-h/2.2+y);
  ctx.fillText("失", w/2+x, h-h/2.8+y);
  ctx.fillText("敗", w/2+x, h-h/3.9+y);
  });
};


document.body.appendChild(canvas);
render();