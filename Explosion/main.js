var grid = [];
var nextGrid = [];

function setup() {
  createCanvas(200, 200);
  for (let i = 0; i < width; i++){
    print(i);
    grid[i] = [];
    for(let j = 0; j < height; j++){
      grid[i][j] = 0;
    }
  }
  for (let i = 80; i < 120; i++){
    for(let j = 80; j < 120; j++){
      grid[i][j] = 1;
    }
  }
  nextGrid = grid;
  print(nextGrid);
}

function draw() {
  check();
  render();
}

function check() {
  nextGrid = grid;
  for(let i = 0; i < width; i++){
    for(let j = 0; j < height; j++){
      let neighboors = [];
      if(j < height-1){
        neighboors.push(grid[i][j+1]);
        if(i < width-1){
          neighboors.push(grid[i+1][j+1]);
        }
      }
      if(i < width-1){
        neighboors.push(grid[i+1][j]);
        if(j > 0){
          neighboors.push(grid[i+1][j-1]);
        }
      }
      if(j > 0){
        neighboors.push(grid[i][j-1]);
        if(i > 0){
          neighboors.push(grid[i-1][j-1]);
        }
      }
      if(i > 0){
        neighboors.push(grid[i-1][j]);
        if(j < height-1){
          neighboors.push(grid[i-1][j+1]);
        }
      }
      nextGrid[i][j] = random(neighboors);
    }
  }
  grid = nextGrid;
}

function render() {
  for(let i in grid){
    for(let j in grid[i]){
      if(grid[i][j] == 0){
        stroke(255);
      }else{
        stroke(0);
      }
      point(i,j);
    }
  }
}
