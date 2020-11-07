class Agent {
	constructor(strat) {
		this.strat = strat;
    this.b = 1.2;
    this.t = 1.2;
    this.r = 1;
    this.p = 0;
    this.s = 0;

    this.prize = 0.0;
	}

  play(x, y) {
    this.prize = 0;

    if(this.strat == 0) {

      for(let k = -1; k < 2; k++) {
        for(let l = -1; l < 2; l++) {
          if(k != 0 && l != 0) {
            if(grid[x+k][y+l].strat == 0) {
              this.prize += this.p;
            } else {
              this.prize += this.t;
            }
          }
        }
      }

      this.prize *= this.b;

    } else {

      for(let k = -1; k < 2; k++) {
        for(let l = -1; l < 2; l++) {
          if(k != 0 && l != 0) {
            if(grid[x+k][y+l].strat == 0) {
              this.prize += this.s;
            } else {
              this.prize += this.r;
            }
          }
        }
      }
      this.prize += 1;
    }
  }

  compare(x, y) {
    let maxPrize = 0;
    for(let k = -1; k < 2; k++) {
      for(let l = -1; l < 2; l++) {
        if(grid[x+k][y+l].prize > maxPrize) {
          maxPrize = grid[x+k][y+l].prize;
          if(maxPrize > this.prize) {
            this.strat = grid[x+k][y+l].strat;
          }
        }
      }
    }
  }

  show(x, y) {
    stroke(255*this.strat);
    point(x, y);
  }
}
