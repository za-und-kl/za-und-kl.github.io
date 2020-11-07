var grid = [];
var nextGrid = [];
var rules = [];

function setup() {
  createCanvas(300, 129);

  //rules = [0, 1, 1, 1, 1, 0, 0, 0]
  rules = [0, 0, 0, 1, 1, 1, 1, 0]

  for(let i = 0; i < width; i++) {
    grid[i] = 0;
  }
  grid[width/2] = 1;
}

function draw() {
  render();
  check();
}

function render() {
  for(let i = 0; i < width; i++) {
    if(grid[i] == 1){
      stroke(0);
    } else {
      stroke(255);
    }
    point(i, frameCount);
  }

  if(frameCount > height){
    noLoop();
  }
}

function check() {
  nextGrid = [...grid];
  for(let i = 1; i < width-1; i++) {
    let neighbours = '';
    neighbours += grid[i-1];
    neighbours += grid[i];
    neighbours += grid[i+1];
    nextGrid[i] = rules[7 - parseInt(neighbours, 2)]
  }
  grid = [...nextGrid];
}
