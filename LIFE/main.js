var grid;
var nextGrid = [];

function setup() {
  createCanvas(200, 200);
  grid = new Array(width);


  for (let i = 0; i < width; i++){
    grid[i] = new Array(height);
    for(let j = 0; j < height; j++){
      grid[i][j] = 0;
    }
  }
  gliderCanon();
  //fillRandom();

  nextGrid = arrayClone(grid);
}

function draw() {
  render();
  check();
}

function check() {
  nextGrid = arrayClone(grid);
  for(let i = 1; i < width-1; i++){
    for(let j = 1; j < height-1; j++){

      let neighboors = [];
      let neighboorCount = 0;

      for(let x = -1; x < 2; x++){
        for(let y = -1; y < 2; y++){
          neighboorCount += grid[i+x][j+y];
        }
      }

      neighboorCount -= grid[i][j];

      if(grid[i][j] == 1){
        if(neighboorCount == 2 || neighboorCount == 3){
          nextGrid[i][j] = 1;
        }else{
          nextGrid[i][j] = 0;
        }
      }else{
        if(neighboorCount == 3){
          nextGrid[i][j] = 1;
        }else{
          nextGrid[i][j] = 0;
        }
      }
    }
  }
  grid = arrayClone(nextGrid);
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

function clear() {
}

function fillRandom() {
  for (let i = 1; i < width-1; i++){
    for(let j = 1; j < height-1; j++){
      grid[i][j] = random([1, 0]);
    }
  }
}

function gliderCanon() {
  let x = 10;
  let y = 10;

  grid[x][y+4] = 1;
  grid[x+1][y+4] = 1;
  grid[x][y+5] = 1;
  grid[x+1][y+5] = 1;

  grid[x+12][y+2] = 1;
  grid[x+11][y+3] = 1;
  grid[x+12][y+3] = 1;
  grid[x+10][y+4] = 1;
  grid[x+11][y+4] = 1;
  grid[x+9][y+5] = 1;
  grid[x+10][y+5] = 1;
  grid[x+11][y+5] = 1;
  grid[x+10][y+6] = 1;
  grid[x+11][y+6] = 1;
  grid[x+11][y+7] = 1;
  grid[x+12][y+7] = 1;
  grid[x+12][y+8] = 1;

  grid[x+16][y+4] = 1;
  grid[x+17][y+4] = 1;
  grid[x+16][y+5] = 1;
  grid[x+17][y+5] = 1;
  grid[x+16][y+6] = 1;
  grid[x+17][y+6] = 1;

  grid[x+19][y+3] = 1;
  grid[x+20][y+2] = 1;
  grid[x+20][y+4] = 1;
  grid[x+21][y+1] = 1;
  grid[x+21][y+5] = 1;
  grid[x+22][y+2] = 1;
  grid[x+22][y+3] = 1;
  grid[x+22][y+4] = 1;
  grid[x+23][y] = 1;
  grid[x+23][y+1] = 1;
  grid[x+23][y+5] = 1;
  grid[x+23][y+6] = 1;

  grid[x+34][y+2] = 1;
  grid[x+35][y+2] = 1;
  grid[x+34][y+3] = 1;
  grid[x+35][y+3] = 1;
}

function arrayClone( arr ) {

    let i, copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else if( typeof arr === 'object' ) {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }

}
