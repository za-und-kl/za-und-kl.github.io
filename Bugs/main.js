var bugs = [];
var food = [];

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
	for(let f of food) {
		f.show();
		f.move();
	}
}

function foodRain() {
		food.push(new Food(random(0, width)));
}
