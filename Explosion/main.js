var grid = [];
var nextGrid = [];

function setup() {
  createCanvas(200, 200);
  frameRate(300);
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
  nextGrid = arrayClone(grid);
  print(nextGrid);
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

      for(let x = -1; x < 2; x++){
        for(let y = -1; y < 2; y++){
          neighboors.push(grid[i+x][j+y]);
        }
      }

      neighboors.splice(4, 1)

      nextGrid[i][j] = random(neighboors);
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
