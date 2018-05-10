epNameEn = "GALAXIES";

epStoryEn = "";


epNameEs = "GALAXIAS";

epStoryEs = "";

epNameTr = "GÖK ADALAR";

epStoryTr = "";

epGithubLink = "https://github.com/nexusbug/Bee-Nautilus/tree/master/Story_of_One/002_Galaxies";


sketch = function(p) {

  p.mwArm1; //milkyway arm 1
  p.mwArm2; //milkyway arm 2
  p.wp; //whirlpool
  p.ngc13;
  p.ngc47;

  p.space;

  p.rot = 0;

  p.preload = function() {
    p.bee = loadImage("images/bee_white_left.png");
    p.nautilus = loadImage("images/nautilus_white_right.png");
  }

  p.setup = function() {
    p.cnv = p.createCanvas(cW, cH);

    p.space = new p.Space(800);

    p.mwArm1 = new p.Galaxy(0.5, 0.5, 4, 30, 0.03, 0.9, 120);
    p.mwArm2 = new p.Galaxy(0.5, 0.5, 4, 20, 0.03, 0.9, 120);

    p.wp = new p.Galaxy(0.5, 0.5, 4, 20, 0.03, 0.9, 100);

    p.ngc13 = new p.Galaxy(0.3, 1, 2, 12, 0.03, 0.3, 130);

    p.ngc47 = new p.Galaxy(0.6, 3, 2, 10, 0.03, 0.1, 80);
  }

  p.draw = function() {
    p.colorMode(HSB, 360, 100, 100);
    p.imageMode(CENTER);
    p.background(0);

    p.image(p.bee, cW / 2 - 40, cH / 2, 60, 60);
    p.image(p.nautilus, cW / 2 + 40, cH / 2, 60, 60);

    p.translate(cW / 2, cH / 2);
    p.rot = p.frameCount / 100;

    p.rotate(p.rot);

    p.push();
    p.translate(-cW / 2, -cH / 2);
    p.space.stars();
    p.pop();




    p.push();
    p.stroke(195, 96, 79);
    p.strokeWeight(5);
    p.noFill();
    p.translate(cW / 4, cH / 4);
    p.rotate(-5 * p.rot);
    p.push();
    p.mwArm1.disp();
    p.pop();
    p.rotate(1.60);
    p.push();
    p.mwArm2.disp();
    p.pop();
    p.mwArm1.center();
    p.pop();


    p.push();
    p.stroke(45, 58, 72);
    p.strokeWeight(5);
    p.noFill();
    p.translate(-cW / 4, -cH / 4);
    p.rotate(-3 * p.rot);
    p.push();
    p.wp.disp();
    p.pop();
    p.wp.center();
    p.pop();

    p.push();
    p.stroke(290, 90, 72);
    p.strokeWeight(5);
    p.noFill();
    p.translate(cW / 4, -cH / 4);
    p.rotate(-2 * p.rot);
    p.push();
    p.ngc13.disp();
    p.pop();
    p.ngc13.center();
    p.pop();

    p.push();
    p.stroke(269, 96, 72);
    p.strokeWeight(5);
    p.noFill();
    p.translate(-cW / 4, cH / 4);
    p.rotate(-1.5 * p.rot);
    p.push();
    p.ngc47.disp();
    p.pop();
    p.ngc47.center();
    p.pop();



  }



  p.Galaxy = class {
    constructor(scale, b, n, con1, con2, con3, con4) {
      this.a = scale;
      this.b = b;
      this.n = n;
      this.c;
      this.r;

      this.con1 = con1;
      this.con2 = con2;
      this.con3 = con3;
      this.con4 = con4;
    }

    center() {
      let l = 50;
      for (let radius = this.con1; radius >= 10; radius -= 1) {
        p.noStroke();
        p.fill(59, 90, l);
        p.ellipse(0, 0, radius);
        l += 1;
      }
    }

    disp() {

      let arrcount;
      let arr1 = [];
      let arr2 = [];
      let v;

      let colors = [2, 50, 195, 232, 278];

      p.beginShape();
      for (let angle = this.con2; angle < this.con3 * TWO_PI; angle += 0.01) {
        this.c = log(this.b * tan(angle / (2 * this.n)));

        this.r = this.con4 * (this.a / this.c);

        let x = this.r * -cos(angle);
        let y = this.r * -sin(angle);

        p.vertex(x, y);

        v = p.createVector(x, y);
        arr1.push(v);
      }
      p.endShape();

      p.beginShape();
      for (let angle = this.con2; angle < this.con3 * TWO_PI; angle += 0.01) {
        this.c = log(this.b * tan(angle / (2 * this.n)));

        this.r = this.con4 * (this.a / this.c);

        let x = this.r * cos(angle);
        let y = this.r * -sin(-angle);

        arrcount = p.floor((angle * 100) - 3);

        p.vertex(x, y);

        v = p.createVector(x, y);
        arr2.push(v);
      }
      p.endShape();

      // Formula for adding solar systems around arms
      for (let i = 0; i < arrcount; i++) {
        p.strokeWeight(1);
        p.stroke(p.random(colors), 78, 80);
        p.fill(p.random(colors), 78, 80);
        p.ellipse(arr1[i].x + p.random(-20, 20), arr1[i].y + p.random(-20, 20), p.random(1, 5));
        p.ellipse(arr2[i].x + p.random(-20, 20), arr2[i].y + p.random(-20, 20), p.random(1, 5));
        i += 60;
      }

    }
  }

  p.Space = class {
    constructor(count) {
      this.xp = width / 2;
      this.yp = height / 2;

      this.count = count;
    }

    stars() {
      p.noStroke();
      p.randomSeed(4);
      for (let i = 0; i < this.count; i++) {
        this.xp = p.random(-150, cW + 150);
        this.yp = p.random(-150, cH + 150);
        p.fill(random(360), 0, 100);
        p.ellipse(this.xp, this.yp, 2);
      }
    }
  }
}

aCalltoReplace();


/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/Bee-Nautilus
*/
