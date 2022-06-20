var canvas;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  bgImg = loadImage("assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  db = firebase.database();

  game = new Game();
  game.start();

}

function draw() {
  background(bgImg);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

