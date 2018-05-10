epNameEn = "INSIDE";

epStoryEn = "Our story begins..";

epNameEs = "DENTRO";

epStoryEs = "";

epNameTr = "İÇERİDE";

epStoryTr = "";

epGithubLink = "https://github.com/nexusbug/Bee-Nautilus/tree/master/Story_of_One/001_Inside";


sketch = function(p) {

  p.stars = [];

  p.preload = function() {
    p.bee = loadImage("images/bee_white_left.png");
    p.nautilus = loadImage("images/nautilus_white_right.png");
  }

  p.setup = function() {
    p.cnv = p.createCanvas(cW, cH);

    for (let i = 0; i < 200; i++) {
      p.stars.push(new p.Field(8));
    }
  }

  p.draw = function() {
    p.background(0);
    p.imageMode(CENTER);

    for (let i = 0; i < p.stars.length; i++) {
      p.stars[i].paint();
    }

    p.image(p.bee, 2 * cW / 9, cH / 9 * 6, cW / 6, cH / 6);
    p.image(p.nautilus, cW / 9 * 7, cH / 9 * 6, cW / 6, cH / 6);
  }

  p.Field = class {
    constructor(speed) {
      this.x = p.random(50, cW - 50); // x coordinate of starting point
      this.y = p.random(50, cH - 50); //y coordinate of starting thisoint
      this.radi = 4; //radius of the star
      this.dia = this.radi * 2; //diameter
      this.speed = speed; //speed of the animation
    }

    paint() {
      this.update();
      this.dist();
      this.moved();
      this.calcDia();
      this.disp();
    }

    update() {
      //check if the star is going outside of canvas
      if (this.x > cW || this.x < 0 || this.y > cH || this.y < 0) {
        //take it back to somwhere around center of canvas
        this.x = random(cW / 2 - 250, cW / 2 + 250);
        this.y = random(cH / 2 - 250, cH / 2 + 250);
      }
    }

    //display the star
    disp() {
      p.noStroke();
      p.fill(255);
      p.ellipse(this.x, this.y, this.dia, this.dia);
    }

    //distance of x and y coordinates to center
    dist() {
      this.sx = this.x - cW / 2;
      this.sy = this.y - cH / 2;
    }

    //cumulative increment from center to sides
    moved() {
      this.x = this.x + (this.sx / 300) * this.speed;
      this.y = this.y + (this.sy / 300) * this.speed;
    }

    // calculates diameter according to the distance to center
    calcDia() {
      this.d = p.dist(this.x, this.y, cW / 2, cH / 2); //vectoral distance to center
      this.dia = p.map(this.d, 0, cW / 2, 0, cW / 100); //this mapping will result change in the diameter of the star, will be zero at the center and increase through to sides
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
