let canvas;
let epNoArray = []; //used for getting episode numbers from json file and setting the epCounter
let epNameArray = [];
let data; //variable for storing the data comes from json
let epCounter; //episode epCounter
let epSource; //variable for changing the script source
let searchBox; //DOM variable for search bar

let firstButton;
let prevButton; //variable for previous button
let randomButton; //random button
let nextButton;
let lastButton;

let epName; //variable that fetches episode names from sketches according to the language
let epStory; //variable that fetches episode dialogues from sketches according to the language

let pageTitle; //DOM variable for title in the page that shows episode name
let pageText;

var wW; //windowdith
var cW; //canvaswidth
var wH;
var cH;

let sketch; //instance mode of episode sketches are hold in this variable
let myp5; //instantiator for the sketch (from episodes)

let language = "en"; //default lang is english

let epNameEn, epStoryEn, epNameEs, epStoryEs, epNameTr, epStoryTr; //variable for episode and story names according to languages

let epGithubLink; //episode sketch code github link variable
let codeLinker;


function preload() {
  data = loadJSON("episodeList.json");
}

function setup() {
  calcCanvasSize();
  noCanvas(); //canvas comes from sketches, and sketches are in instance mode so canvas can be created




  let langEn = select("#grab-english");
  langEn.mouseClicked(selectLanguage);
  let langEs = select("#grab-spanish");
  langEs.mouseClicked(selectLanguage);
  let langTr = select("#grab-turkish");
  langTr.mouseClicked(selectLanguage);


  searchBox = select("#grab-search");
  searchBox.changed(searchEpisode);

  for (let i = 0; i < data.episodes.length; i++) {
    epNoArray[i] = data.episodes[i].no;
    epNameArray[i] = data.episodes[i].name;
  }

  firstButton = selectAll(".first-button");
  for (i in firstButton) {
    firstButton[i].mouseClicked(firstEpisode);
  }
  prevButton = selectAll(".prev-button");
  for (i in prevButton) {
    prevButton[i].mouseClicked(prevEpisode);
  }
  randomButton = selectAll(".random-button");
  for (i in randomButton) {
    randomButton[i].mouseClicked(randomEpisode);
  }
  nextButton = selectAll(".next-button");
  for (i in nextButton) {
    nextButton[i].mouseClicked(nextEpisode);
  }
  lastButton = selectAll(".last-button");
  for (i in lastButton) {
    lastButton[i].mouseClicked(lastEpisode);
  }

  epCounter = int(epNoArray[0]);

  epSource = select("#grab-source");

  codeLinker = select("#grab-code-link");

  myp5 = new p5(sketch);
  myp5.cnv.parent("#canvas-holder");

  firstEpisode();

  let whatsapp;
  whatsapp = select("#grab-whatsapp");

  if (/Android|webOS|iPhone|iPad|iPod|IEMobile|Windows Phone|Kindle|Opera Mini/i.test(navigator.userAgent)) {
    whatsapp.attribute("href", "whatsapp://send?text=www.nexusbug.com");

  } else {
    whatsapp.attribute("href", "https://web.whatsapp.com/send?text=www.nexusbug.com");
  }




}

//There is no draw in the main js, comes from sketches


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    prevEpisode();
  } else if (keyCode === RIGHT_ARROW) {
    nextEpisode();
  } else if (keyCode === UP_ARROW) {
    randomEpisode();
  }
}


function windowResized() {
  calcCanvasSize();
  myp5.resizeCanvas(cW, cH);
}



/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/
*/
