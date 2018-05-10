epNameEn = "BAY STATE";

epStoryEn = "";

epNameEs = "";

epStoryEs = "";

epNameTr = "";

epStoryTr = "";

epGithubLink = "https://github.com/nexusbug/Bee-Nautilus/tree/master/Story_of_One/005_Bay_State";

sketch = function(p) {

  p.ma;

  p.sc = 0.1;

  p.interval;

  p.c; //clover
  p.cstem;

  p.clouds = [];

  p.preload = function() {
    p.bee = loadImage("images/bee_black_left.png");
    p.nautilus = loadImage("images/nautilus_black_right.png");
  }

  p.setup = function() {
    p.cnv = p.createCanvas(cW, cH);

    p.ma = new p.Mass;

    p.c = new p.Lemniscate(35, 0.25, 0.75);
    p.cstem = new p.Lemniscate(35, 0.75, 0.92);

    for (let i = 0; i < 1000; i++) {
      let x = random(cW);
      let y = random(cH);
      let r = random(20, 40);
      p.clouds[i] = new p.Cloud(x, y, r, 50, 0);
    }

    p.interval = setInterval(p.timer, 1);
  }

  p.draw = function() {
    p.colorMode(HSB, 360, 100, 100);
    if (p.sc <= 5) {
      p.background(215, 35, 95);
    } else if (5 < p.sc <= 112) {
      p.background(60, 5, 95);
    }

    p.imageMode(CENTER);
    p.colorMode(HSB, 360, 100, 100);

    p.translate(cW / 2, cH / 2);

    p.noFill();
    p.strokeWeight(4);
    p.stroke(10);

    if (p.sc <= 5) {
      p.push();
      p.scale(p.sc);
      p.fill(60, 5, 95);
      p.ma.disp();
      p.pop();
    }

    p.stroke(152, 100, 50);
    if (p.sc <= 112) {
      p.push();
      p.scale(p.sc);
      p.c.disp();
      p.rotate(PI);
      p.c.disp();
      p.rotate(1.5 * PI);
      p.c.disp();
      p.rotate(0.15 * PI);
      p.cstem.disp();
      p.pop();
    }

    if (110 < p.sc) {
      p.push();
      p.rectMode(CENTER);
      p.noStroke();
      p.fill(152, 100, 50);
      p.rect(0, 0, cW, cH);
      p.pop();
    }

    if (120 < p.sc) {
      clearInterval(p.interval);
    }

    p.translate(-cW / 2, -cH / 2);

    if (p.sc <= 3) {
      p.colorMode(RGB, 255);
      for (let i of p.clouds) {
        i.move();
        i.show();
      }
    }

    p.image(p.bee, 50, cH - 50, 80, 80);
    p.image(p.nautilus, cW - 50, cH - 50, 80, 80);
  }


  p.timer = function() {
    if (p.sc <= 5) {
      p.sc += 0.002;
    } else if (5 < p.sc <= 112) {
      p.sc += 0.05;
    }
  }

  p.Cloud = class {
    constructor(x, y, r, density, limit) {
      this.x = x;
      this.y = y;
      this.r = r;

      this.a = density;
      this.l = limit;
    }

    move() {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
      if (this.x > cW || this.x < 0 || this.y > cH || this.y < 0) {
        this.x = random(cW);
        this.y = random(cH);
      }

      if (this.a >= this.l) {
        this.a -= 0.3;
      }

    }

    show() {
      p.noStroke();
      p.fill(255, this.a);
      p.ellipse(this.x, this.y, this.r * 2);
    }
  }

  p.Mass = class {
    constructor() {
      this.cx = 35;
      this.cy = 10;
    }

    disp() {

      p.beginShape();
      p.vertex(p.cS(this.cx) + p.cS(30), p.cS(this.cy) + p.cS(0));
      p.vertex(p.cS(this.cx) + p.cS(35), p.cS(this.cy) + p.cS(-30));
      p.vertex(p.cS(this.cx) + p.cS(75), p.cS(this.cy) + p.cS(-70));
      p.vertex(p.cS(this.cx) + p.cS(50), p.cS(this.cy) + p.cS(-120));
      p.vertex(p.cS(this.cx) + p.cS(-15), p.cS(this.cy) + p.cS(-80));
      p.vertex(p.cS(this.cx) + p.cS(-265), p.cS(this.cy) + p.cS(-90));
      p.vertex(p.cS(this.cx) + p.cS(-300), p.cS(this.cy) + p.cS(45));
      p.vertex(p.cS(this.cx) + p.cS(-15), p.cS(this.cy) + p.cS(55));
      p.vertex(p.cS(this.cx) + p.cS(25), p.cS(this.cy) + p.cS(145));
      p.vertex(p.cS(this.cx) + p.cS(75), p.cS(this.cy) + p.cS(115));
      p.vertex(p.cS(this.cx) + p.cS(90), p.cS(this.cy) + p.cS(155));
      p.vertex(p.cS(this.cx) + p.cS(190), p.cS(this.cy) + p.cS(110));
      p.vertex(p.cS(this.cx) + p.cS(165), p.cS(this.cy) + p.cS(55));
      p.vertex(p.cS(this.cx) + p.cS(140), p.cS(this.cy) + p.cS(35));
      p.vertex(p.cS(this.cx) + p.cS(165), p.cS(this.cy) + p.cS(95));
      p.vertex(p.cS(this.cx) + p.cS(115), p.cS(this.cy) + p.cS(120));
      p.vertex(p.cS(this.cx) + p.cS(70), p.cS(this.cy) + p.cS(10));
      p.endShape(CLOSE);
    }
  }

  p.Lemniscate = class {
    constructor(scale, c1, c2) {
      this.scale = scale || 150;
      this.r;
      this.c1 = c1 || 0.25;
      this.c2 = c2 || 0.75;
    }

    disp() {

      p.beginShape();
      for (let angle = this.c1 * TWO_PI; angle < this.c2 * TWO_PI; angle += 0.01) {
        this.r = this.scale * (sqrt(2) * cos(angle)) / (pow(sin(angle), 2) + 1);
        let x = this.r;
        let y = this.r * sin(angle);
        p.vertex(p.cS(x), p.cS(y));
      }
      p.endShape();

    }
  }

  //convert Size
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
