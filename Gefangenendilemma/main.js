var grid = [];

function setup() {
  createCanvas(200, 200);
  frameRate(30);
  for (let i = 0; i < width; i++){
    grid[i] = [];
    for(let j = 0; j < height; j++){
      grid[i][j] = new Agent(random([0, 1]));
    }
  }
}

function draw() {
  render();
  check();
}

function check() {
  for(let i = 1; i < width-1; i++){
    for(let j = 1; j < height-1; j++){
      grid[i][j].play(i, j);
    }
  }
  for(let i = 1; i < width-1; i++){
    for(let j = 1; j < height-1; j++){
      grid[i][j].compare(i, j);
    }
  }
}

function render() {
  for(let i in grid){
    for(let j in grid[i]){
      grid[i][j].show(i, j);
    }
  }
}
