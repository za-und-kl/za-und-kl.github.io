class Food {
	constructor(x) {
		this.pos = createVector(x, 0);
		this.speed = createVector(0, 3);
	}

	move() {
		this.pos.add(this.speed);
	}

	show() {
		strokeWeight(3);
		stroke(0, 255, 0);
		point(this.pos.x, this.pos.y);
	}
}
