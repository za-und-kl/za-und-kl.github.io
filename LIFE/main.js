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
  for (let i = 1; i < width-1; i++){
    for(let j = 1; j < height-1; j++){
      grid[i][j] = random([1, 0]);
    }
  }

  nextGrid = arrayClone(grid);
}

function draw() {
  check();
  render();
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
