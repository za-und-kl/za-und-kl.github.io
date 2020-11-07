class Bug {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.dir = createVector(1, 0);
		this.dirs = [0, 60, 120, 180, -120, -60];	//vw, r, sr, rw, sl, l
		this.dna = [50, 10, 1, 1, 1, 1];
		this.energy = 800;
	}

	show() {
		strokeWeight(8);
		stroke(255);
		point(this.pos.x, this.pos.y);
	}

	move() {
		let vals = 0;
		let map = [];
		for(let d in this.dna) {
			vals += this.dna[d];
			for(let i = 0; i < this.dna[d]; i++) {
				map.push(d);
			}
		}
		let r = random(map);
		this.dir.rotate(radians(this.dirs[r]));
		this.pos.add(this.dir);
		this.pos.x = (this.pos.x+width) % width;
		this.pos.y = (this.pos.y+height) % height;
		this.energy -= 1;
	}

	check() {
		for(let f in food) {
			if(dist(this.pos.x, this.pos.y, food[f].pos.x, food[f].pos.y) < 6) {
				this.energy += 40;
				food.splice(f, 1);
			}
		}
		if(this.energy < 1) {
			this.die();
		}
	}

	die() {
		for(let b in bugs) {
			if(bugs[b] == this) {
				bugs.splice(b, 1);
			}
		}
	}
}
