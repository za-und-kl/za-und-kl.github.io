var bugs = [];
var food = [];
var canv;

function setup() {
	cnv = createCanvas(800, 500);
	let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
	bugs.push(new Bug(100, 100));
}

function draw() {
	render();
}

function render() {
	background(0);
	for(let b of bugs) {
		b.show();
		b.move();
		b.check();
	}
	for(let f of food) {
		f.show();
		f.move();
	}

	if(frameCount % 3 == 0){
		foodRain();
	}
}

function foodRain() {
		food.push(new Food(random(0, width)));
}

function windowResized() {
	let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
