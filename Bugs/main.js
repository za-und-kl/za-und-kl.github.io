var bugs = [];

function setup() {
	createCanvas(200, 200);
	bugs.push(new Bug(100, 100));
}

function draw() {
	render();
}

function render() {
	background(255);
	for(let b of bugs) {
		b.show();
  		b.move();
	}
}

class Bug {
	constructor(sx, sy) {
		this.pos = createVector(sx, sy);
		this.dir = createVector(1, 1);
		this.dirs = [0, 60, 120, 180, -120, -60];	//vw, r, sr, rw, sl, l
		this.dna = [1, 1, 1, 1, 1, 1];
	}
	
	show() {
		strokeWeight(3);
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
		print(map);	
		let r = random(map);
		this.dir.rotate(radians(this.dirs[r]));
		this.pos.add(this.dir);
	}
}