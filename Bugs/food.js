class Food {
	constructor(x) {
		this.pos = createVector(x, 0);
		this.speed = createVector(0, 1);
		this.stuck = false;
	}

	move() {
		if(this.stuck == false) {
			for(let f of food) {
				if(f != this && dist(this.pos.x, this.pos.y, f.pos.x, f.pos.y) <= 4) {
					this.stuck = true;
				}
			}
		}
		if(this.stuck == false && this.pos.y < height-2) {
			this.pos.add(this.speed);
		}
	}

	show() {
		strokeWeight(4);
		stroke(0, 255, 0);
		point(this.pos.x, this.pos.y);
	}


}
