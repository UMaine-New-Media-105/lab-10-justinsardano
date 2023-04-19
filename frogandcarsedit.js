function setup() {
  createCanvas(400, 400);
  Cars = [];
  Cars2 = [];
  Frogs = [];
  addX = 3;
  addX2 = 5;

  for (let carsDrawn = 0; carsDrawn < 2; carsDrawn++) {
    Cars[carsDrawn] = new Car(0, 160);
  }
  for (let cars2Drawn = 0; cars2Drawn < 2; cars2Drawn++) {
    Cars2[cars2Drawn] = new Car2(0, 320);
  }
  for (let frogsDrawn = 0; frogsDrawn < 2; frogsDrawn++) {
    Frogs[frogsDrawn] = new Frog(200, 375);
  }
}

function draw() {
  background("gray");
  fill("lightgray");
  rect(0, 80, 400, 120);
  rect(0, 240, 400, 120);
  fill("yellow");
  rect(10, 140, 50, 10);
  rect(80, 140, 50, 10);
  rect(150, 140, 50, 10);
  rect(220, 140, 50, 10);
  rect(290, 140, 50, 10);
  rect(360, 140, 50, 10);

  rect(10, 300, 50, 10);
  rect(80, 300, 50, 10);
  rect(150, 300, 50, 10);
  rect(220, 300, 50, 10);
  rect(290, 300, 50, 10);
  rect(360, 300, 50, 10);
  // let myFrog=new Frog(x,y)
  //myFrog.move()
  //myFrog.show()

  for (let carsShown = 0; carsShown < 2; carsShown++) {
    Cars[carsShown].move();
    Cars[carsShown].show();
  }
  for (let cars2Shown = 0; cars2Shown < 2; cars2Shown++) {
    Cars2[cars2Shown].move();
    Cars2[cars2Shown].show();
  }
  for (let frogsShown = 0; frogsShown < 2; frogsShown++) {
    Frogs[frogsShown].move();
    Frogs[frogsShown].show();
  }
}
class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    if (this.x > width - 130 || this.x < 0) {
      this.addX = -this.addX;
    }
  }
  show() {
    push();

    fill("red");
    translate(this.x, this.y);
    rect(90, 0, 40, 40);
    fill("lightgray");
    rect(85, 10, 5, 20);
    fill("gray");
    rect(0, 0, 85, 40);
    pop();
  }
}
class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("lightgreen");
    ellipse(0, 0, 50);
    fill("white");
    ellipse(0, 7, 35);
    fill("lightgreen");
    ellipse(-15, -25, 15);
    fill("white");
    ellipse(-15, -25, 12);
    fill("black");
    ellipse(-15, -25, 5);
    fill("lightgreen");
    ellipse(15, -25, 15);
    fill("white");
    ellipse(15, -25, 12);
    fill("black");
    ellipse(15, -25, 5);
    pop();
  }
}
class Car2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX2 = addX2;
  }
  move() {
    this.x = this.x + this.addX2;
    if (this.x > width - 50 || this.x < 0) {
      this.addX2 = -this.addX2;
    }
  }
  show() {
    push();

    fill("red");
    translate(this.x, this.y);
    fill("red");
    rect(0, 0, 50, 40);
    fill("lightgray");
    rect(30, 7, 10, 25);
    pop();
  }
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    Frog.move(0, -40);
  }
  if (keyCode == DOWN_ARROW) {
    Frog.move(0, 40);
  }
  if (keyCode == LEFT_ARROW) {
    Frog.move(-40, 0);
  }
  if (keyCode == RIGHT_ARROW) {
    Frog.move(40, 0);
  }
}
