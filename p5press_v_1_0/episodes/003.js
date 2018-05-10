epNameEn = "SOLAR SYSTEM";

epStoryEn = "";


epNameEs = "";

epStoryEs = "";

epNameTr = "";

epStoryTr = "";

epGithubLink = "https://github.com/nexusbug/Bee-Nautilus/tree/master/Story_of_One/003_Solar_System";

sketch = function(p) {

  p.rot = 0;

  p.space;

  p.ss; //solar system


  p.preload = function() {
    p.bee = loadImage("images/bee_white_left.png");
    p.nautilus = loadImage("images/nautilus_white_right.png");
  }

  p.setup = function() {
    p.cnv = p.createCanvas(cW, cH);

    p.space = new p.Space(800);

    p.ss = new p.SolarSystem(0, 0);


  }

  p.draw = function() {
    p.colorMode(HSB, 360, 100, 100);
    p.imageMode(CENTER);
    p.background(0);

    p.image(p.bee, 40, 40, 60, 60);
    p.image(p.nautilus, cW - 40, 40, 60, 60);

    p.translate(cW / 2, cH / 2);
    p.rot = frameCount / 100;

    p.push();
    p.rotate(p.rot / 5);
    p.translate(-cW / 2, -cH / 2);
    p.space.stars();
    p.pop();

    p.ss.disp();

  }


  p.SolarSystem = class {
    constructor(centerx, centery) {
      this.x = centerx;
      this.y = centery;

      this.planet = function(h, s, l, x, size, rt) {
        p.rotate(10);
        p.noStroke();
        p.fill(h, s, l);
        p.push();
        p.rotate(-rt * frameCount / 200);
        p.ellipse(this.x + cW / x, this.y, cW / size);
        p.pop();
      }

      this.beltyPlanet = function(h, s, l, x, e1, e2, size, rt, rt2) {
        p.rotate(10);
        p.strokeWeight(2);
        p.stroke(1, 0, 80);
        p.noFill();
        p.push();
        p.rotate(-rt * frameCount / 200);
        p.translate(this.x + cW / x, this.y, cW / e1, cH / e2);
        p.rotate(-rt2 * frameCount / 50);
        p.ellipse(0, 0, cW / e1, cH / e2);
        p.fill(h, s, l);
        p.noStroke();
        p.ellipse(0, 0, cW / size);
        p.pop();
      }
    }



    disp() {
      //sun
      this.planet(50, 100, 100, 100000, 6, 0);
      //mercury
      this.planet(204, 0, 83, 10, 49, 8.8);
      //venus
      this.planet(46, 50, 60, 7.5, 42, 6.5);
      //earth
      this.planet(200, 100, 100, 6, 39, 5.5);
      //mars
      this.planet(37, 100, 64, 5, 45, 4.4);
      //Asteroid belt
      p.strokeWeight(2);
      p.stroke(1, 0, 80);
      p.noFill();
      p.ellipse(this.x, this.y, cW / 2.3);
      //jupiter
      this.planet(37, 10, 64, 3.65, 10, 2.4);
      //saturn
      this.beltyPlanet(31, 40, 84, 2.7, 10, 13, 15, 1.8, 1);
      //uranus
      this.beltyPlanet(193, 58, 60, 2.25, 19, 15, 24, 1.25, -1);
      //neptune
      this.planet(220, 80, 98, 2.05, 28, 1);

    }

  }

  p.Space = class {
    constructor(count) {
      this.xp = 0;
      this.yp = 0;

      this.count = count;
    }

    stars() {
      p.noStroke();
      p.randomSeed(4);
      for (let i = 0; i < this.count; i++) {
        this.xp = p.random(-100, cW + 100);
        this.yp = p.random(-100, cH + 100);
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
