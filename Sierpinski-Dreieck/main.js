var grid = [];
var nextGrid = [];

function setup() {
  createCanvas(300, 129);

  for(let i = 0; i < width; i++) {
    grid[i] = 0;
  }
  grid[150] = 1;
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
    let neighborCount = 0;
    neighborCount += grid[i-1];
    neighborCount += grid[i+1];
    if(neighborCount == 1){
      nextGrid[i] = 1;
    } else {
      nextGrid[i] = 0;
    }
  }
  grid = [...nextGrid];
}
