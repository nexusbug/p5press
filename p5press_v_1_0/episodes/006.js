epNameEn = "THE CITY";

epStoryEn = "";

epNameEs = "";

epStoryEs = "";

epNameTr = "";

epStoryTr = "";

epGithubLink = "https://github.com/nexusbug/Bee-Nautilus/tree/master/Story_of_One/006_The_City";

sketch = function(p) {

  p.boston;

  p.boat1;
  p.boat2;
  p.boat3;

  p.bird1;
  p.bird2;
  p.bird3;

  p.human;
  p.littleHuman;

  p.flock = [];


  p.preload = function() {
    p.bee = loadImage("images/bee_white_left.png");
    p.nautilus = loadImage("images/nautilus_white_right.png");
  }

  p.setup = function() {
    p.cnv = p.createCanvas(cW, cH);

    p.boston = new p.Boston(0, -60);
    p.boat1 = new p.Boat(30, 200)
    p.boat2 = new p.Boat(-190, 170);
    p.boat3 = new p.Boat(-90, 120);

    p.bird1 = new p.Bird(-10, -240, 0.3, -2);
    p.bird2 = new p.Bird(-100, -310, 0.3, -2);
    p.bird3 = new p.Bird(700, -10, 0.5, -2);

    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 2; j++) {
        p.flock.push(new p.Bird(i * 150 + j * 120, -950 - j * 80, 0.2, -2));
      }
    }

    p.human = new p.HomoSapien(-450, 410, 0.5);
    p.littleHuman = new p.HomoSapien(-650, 800, 0.3);
  }

  p.draw = function() {
    p.imageMode(CENTER);

    p.colorMode(HSB, 360, 100, 100);
    p.background(10, 55, 100);
    p.translate(cW / 2, cH / 2);

    p.push();
    p.strokeWeight(9);
    p.stroke(255);
    p.noFill();
    for (let i of p.flock) {
      i.update();
      i.disp();
    }
    p.pop();

    p.noStroke();
    p.fill(220, 60, 100);
    p.rect(-cW / 2, 0, cW, cH / 2);

    p.strokeWeight(4);
    p.stroke(0);
    p.fill(0);
    p.boston.disp();

    p.boat1.disp();
    p.boat1.update();
    p.boat2.disp();
    p.boat2.update();
    p.boat3.disp();
    p.boat3.update();

    p.noFill();
    p.strokeWeight(10);
    p.stroke(255);
    p.bird1.update();
    p.bird1.disp();
    p.bird2.update();
    p.bird2.disp();
    p.bird3.update();
    p.bird3.disp();

    p.noStroke();
    p.fill(0);
    p.rect(-cW / 2, p.cS(240), cW, p.cS(60));

    p.fill(255);
    p.human.disp();
    p.littleHuman.disp();


    p.translate(-cW / 2, -cH / 2);
    p.image(p.bee, cW - p.cS(120), cH - p.cS(40), p.cS(60), p.cS(60));
    p.image(p.nautilus, cW - p.cS(50), cH - p.cS(40), p.cS(60), p.cS(60));
  }

  p.Bird = class {
    constructor(x, y, scale, speed) {
      this.x = x || 0;
      this.y = y || 0;
      this.scale = scale || 0.5;
      this.speed = speed;
      this.move;
      this.s = 0;
      this.a;
      this.d;
      this.yoff = 0;
    }

    disp() {

      p.push();
      p.scale(this.scale);
      p.translate(this.x, this.y);
      p.push();
      p.rotate(this.d);
      p.arc(p.cS(-30), p.cS(0), p.cS(60), p.cS(80), 1.3 * PI, TWO_PI);
      p.pop();
      p.push();
      p.rotate(-this.d);
      p.arc(p.cS(30), p.cS(0), p.cS(60), p.cS(80), PI, PI + 0.7 * PI);
      p.pop();
      p.pop();
    }

    update() {
      this.yoff += 0.01;
      this.s += 0.05;
      this.y = p.noise(this.yoff) * p.sin(this.yoff) * 3 + this.y;
      this.a = p.sin(this.s);
      this.d = p.map(this.a, -1, 1, 0, -1.2);

      this.x = this.x - p.noise(this.yoff) * 5;
      // if (this.x > (cW / 2 + 30)) {
      //   this.x = (-cW / 2 - 30);
      // } else

      if (this.x < ((-cW / 2) / this.scale) - p.cS(80)) {
        this.x = ((cW / 2) / this.scale) + p.cS(80);
        // this.x /= this.scale;
      }
    }
  }

  p.HomoSapien = class {
    constructor(x, y, scale) {
      this.x = x || 0;
      this.y = y || 0;
      this.scale = scale || 0.5;
    }

    disp() {
      p.push();
      p.scale(this.scale);
      p.rectMode(CENTER);
      p.translate(p.cS(this.x), p.cS(this.y));
      p.ellipse(p.cS(0), p.cS(0), p.cS(30));
      p.rect(p.cS(0), p.cS(56), p.cS(45), p.cS(76), p.cS(8));
      p.push();
      p.rotate(-0.3);
      p.rect(p.cS(10), p.cS(62), p.cS(10), p.cS(75), p.cS(10));
      p.pop();
      p.push();
      p.rotate(0.3);
      p.rect(p.cS(-10), p.cS(62), p.cS(10), p.cS(75), p.cS(10));
      p.pop();
      p.rect(p.cS(-12), p.cS(130), p.cS(12), p.cS(85), p.cS(10));
      p.rect(p.cS(12), p.cS(130), p.cS(12), p.cS(85), p.cS(10));
      p.pop();
    }
  }

  p.Boat = class {
    constructor(x, y) {
      this.x = x || 0;
      this.y = y || 0;
      this.xoff = 0;
      this.m;
    }

    disp() {
      p.beginShape();
      p.vertex(p.cS(this.x + 0), p.cS(this.y + 0));
      p.vertex(p.cS(this.x + 10), p.cS(this.y + 0));
      p.vertex(p.cS(this.x + 10), p.cS(this.y + -70));
      p.vertex(p.cS(this.x + -10), p.cS(this.y + 0));
      p.vertex(p.cS(this.x + 0), p.cS(this.y + 0));
      p.vertex(p.cS(this.x + 0), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + -15), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + -17), p.cS(this.y + 18));
      p.vertex(p.cS(this.x + 10), p.cS(this.y + 20));
      p.vertex(p.cS(this.x + 20), p.cS(this.y + 18));
      p.vertex(p.cS(this.x + 30), p.cS(this.y + 5));
      p.vertex(p.cS(this.x + 20), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + 0), p.cS(this.y + 10));
      p.endShape();
    }

    update() {
      this.m = map(cW, 400, 600, 2 / 3, 1);
      this.xoff += 0.01;
      this.x += noise(this.xoff);

      if (this.x > (cW / 2 + p.cS(30)) / this.m) {
        this.x = ((-cW / 2) - p.cS(30)) / this.m;
      }
    }
  }

  p.Boston = class {
    constructor(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }

    disp() {
      p.beginShape();
      p.vertex(cW / 2, p.cS(this.y + 90));
      p.vertex(cW / 2, p.cS(this.y + -20));
      p.vertex(p.cS(this.x + 270), p.cS(this.y + -20));
      p.vertex(p.cS(this.x + 270), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + 255), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + 255), p.cS(this.y + -130));
      p.vertex(p.cS(this.x + 250), p.cS(this.y + -132));
      p.vertex(p.cS(this.x + 250), p.cS(this.y + -145));
      p.vertex(p.cS(this.x + 235), p.cS(this.y + -147));
      p.vertex(p.cS(this.x + 235), p.cS(this.y + -170));
      p.vertex(p.cS(this.x + 235), p.cS(this.y + -147));
      p.vertex(p.cS(this.x + 220), p.cS(this.y + -145));
      p.vertex(p.cS(this.x + 220), p.cS(this.y + -132));
      p.vertex(p.cS(this.x + 215), p.cS(this.y + -130));
      p.vertex(p.cS(this.x + 215), p.cS(this.y + 20));
      p.vertex(p.cS(this.x + 195), p.cS(this.y + 20));
      p.vertex(p.cS(this.x + 195), p.cS(this.y + -30));
      p.vertex(p.cS(this.x + 185), p.cS(this.y + -30));
      p.vertex(p.cS(this.x + 185), p.cS(this.y + -80));
      p.vertex(p.cS(this.x + 180), p.cS(this.y + -90));
      p.vertex(p.cS(this.x + 175), p.cS(this.y + -95));
      p.vertex(p.cS(this.x + 165), p.cS(this.y + -95));
      p.vertex(p.cS(this.x + 160), p.cS(this.y + -90));
      p.vertex(p.cS(this.x + 155), p.cS(this.y + -80));
      p.vertex(p.cS(this.x + 155), p.cS(this.y + -30));
      p.vertex(p.cS(this.x + 100), p.cS(this.y + -30));
      p.vertex(p.cS(this.x + 100), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + 80), p.cS(this.y + 10));
      p.vertex(p.cS(this.x + 80), p.cS(this.y + -50));
      p.vertex(p.cS(this.x + 30), p.cS(this.y + -50));
      p.vertex(p.cS(this.x + 30), p.cS(this.y + -60));
      p.vertex(p.cS(this.x + 10), p.cS(this.y + -65));
      p.vertex(p.cS(this.x + -10), p.cS(this.y + -65));
      p.vertex(p.cS(this.x + -10), p.cS(this.y + 15));
      p.vertex(p.cS(this.x + -50), p.cS(this.y + 15));
      p.vertex(p.cS(this.x + -50), p.cS(this.y + -5));
      p.vertex(p.cS(this.x + -90), p.cS(this.y + -5));
      p.vertex(p.cS(this.x + -90), p.cS(this.y + -225));
      p.vertex(p.cS(this.x + -115), p.cS(this.y + -230));
      p.vertex(p.cS(this.x + -170), p.cS(this.y + -220));
      p.vertex(p.cS(this.x + -170), p.cS(this.y + -60));
      p.vertex(p.cS(this.x + -235), p.cS(this.y + -58));
      p.vertex(p.cS(this.x + -235), p.cS(this.y + -80));
      p.vertex(p.cS(this.x + -245), p.cS(this.y + -100));
      p.vertex(p.cS(this.x + -255), p.cS(this.y + -100));
      p.vertex(p.cS(this.x + -255), p.cS(this.y + -125));
      p.vertex(p.cS(this.x + -255), p.cS(this.y + -100));
      p.vertex(p.cS(this.x + -265), p.cS(this.y + -100));
      p.vertex(p.cS(this.x + -275), p.cS(this.y + -80));
      p.vertex(p.cS(this.x + -275), p.cS(this.y + 20));
      p.vertex(-cW / 2, p.cS(this.y + 20));
      p.vertex(-cW / 2, p.cS(this.y + 90));
      p.endShape(CLOSE);
    }
  }

  p.cS = function(num) {
    p.n = num;
    p.n = cW / (600 / p.n);
    return p.n;
  }


}

aCalltoReplace();


/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/Bee-Nautilus
*/
