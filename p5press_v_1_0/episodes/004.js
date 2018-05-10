epNameEn = "PALE BLUE DOT";

epStoryEn = "";


epNameEs = "";

epStoryEs = "";

epNameTr = "";

epStoryTr = "";

epGithubLink = "https://github.com/nexusbug/Bee-Nautilus/tree/master/Story_of_One/004_Pale_Blue_Dot";

sketch = function(p) {

  p.rot = 0;

  p.space;


  p.preload = function() {
    p.bee = loadImage("images/bee_white_left.png");
    p.nautilus = loadImage("images/nautilus_white_right.png");
  }

  p.setup = function() {
    p.cnv = p.createCanvas(cW, cH);

    p.space = new p.Space(800);

  }

  p.draw = function() {
    p.colorMode(HSB, 360, 100, 100);
    p.imageMode(CENTER);
    p.background(0);

    p.image(p.bee, 40, cH - 40, 60, 60);
    p.image(p.nautilus, cW - 40, cH - 40, 60, 60);

    p.translate(cW / 2, cH / 2);
    p.rot = frameCount / 100;

    p.push();
    p.rotate(p.rot / 5);
    p.translate(-cW / 2, -cH / 2);
    p.space.stars();
    p.pop();

    p.rotate(-p.rot / 6);
    for (let i = 55; i < 101; i += 1) {
      p.stroke(1, 0, i);
      p.fill(1, 0, i);
      p.ellipse(p.cS(240), 0, p.cS(65) - (i - 55) * p.cS(1.3));
    }

    p.rotate(-p.rot * 4.8);

    p.strokeWeight(2);
    for (let i = 99; i >= 10; i -= 1) {
      p.stroke(207, i, 50);
      p.ellipse(0, 0, p.cS(240) - (99 - i) * p.cS(2.6));
    }

    p.noStroke();
    p.fill(1, 0, 60);

    p.beginShape();
    p.vertex(p.cS(20), 0);
    p.vertex(p.cS(20), -p.cS(15));
    p.vertex(p.cS(10), -p.cS(35));
    p.vertex(p.cS(10), -p.cS(35));
    p.vertex(-p.cS(10), -p.cS(45));
    p.vertex(-p.cS(30), -p.cS(15));
    p.vertex(-p.cS(20), p.cS(15));
    p.vertex(-p.cS(10), p.cS(30));
    p.endShape(CLOSE);

    p.noStroke();
    p.fill(120, 28, 60);

    p.beginShape();
    p.vertex(-p.cS(10), -p.cS(50));
    p.vertex(-p.cS(20), -p.cS(60));
    p.vertex(-p.cS(30), -p.cS(40));
    p.vertex(-p.cS(50), -p.cS(40));
    p.vertex(-p.cS(70), -p.cS(45));
    p.vertex(-p.cS(90), -p.cS(35));
    p.vertex(-p.cS(100), -p.cS(25));
    p.vertex(-p.cS(110), -p.cS(5));
    p.vertex(-p.cS(100), p.cS(15));
    p.vertex(-p.cS(80), p.cS(45));
    p.endShape(CLOSE);

    p.beginShape();
    p.vertex(p.cS(10), -p.cS(50));
    p.vertex(p.cS(20), -p.cS(60));
    p.vertex(p.cS(30), -p.cS(50));
    p.vertex(p.cS(70), -p.cS(46));
    p.vertex(p.cS(78), p.cS(16));
    p.vertex(p.cS(60), p.cS(60));
    p.vertex(p.cS(5), p.cS(86));
    p.vertex(p.cS(15), p.cS(56));
    p.vertex(p.cS(45), p.cS(46));
    p.endShape(CLOSE);

    p.noStroke();
    p.fill(81, 28, 60);

    p.beginShape();
    p.vertex(p.cS(80), -p.cS(66));
    p.vertex(p.cS(100), -p.cS(36));
    p.vertex(p.cS(110), p.cS(16));
    p.vertex(p.cS(100), p.cS(36));
    p.vertex(p.cS(97), p.cS(56));
    p.vertex(p.cS(47), p.cS(100));
    p.vertex(p.cS(57), p.cS(80));
    p.vertex(p.cS(85), p.cS(16));
    p.endShape(CLOSE);
  }

  //convert Size
  p.cS = function(num) {
    p.n = num;
    p.n = cW / (600 / p.n);
    return p.n;
  }


  p.Space = class {
    constructor(count) {
      this.xp = 0;
      this.yp = 0;

      this.count = count;
    }

    stars() {
      p.noStroke();
      randomSeed(4);
      for (let i = 0; i < this.count; i++) {
        this.xp = random(-100, cW + 100);
        this.yp = random(-100, cH + 100);
        p.fill(190, 0, 100);
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
