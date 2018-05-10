function replaceScript() {

  epSource.remove();
  epSource = createElement("script");
  epSource.attribute("src", "episodes/" + nf(epCounter, 3) + ".js");
  epSource.attribute("id", "grab-source");
  epSource.attribute("type", "text/javascript");
}

function aCalltoReplace() {
  setTimeout(replaceStory, 100); //temporary solution, awaits a good one
  setTimeout(replaceSketch, 100);
}


function replaceStory() {

  replaceVariables();

  pageTitle = select("#grab-title");
  pageTitle.remove();
  pageTitle = createElement("h1", epCounter + " - " + epName);
  pageTitle.attribute("id", "grab-title");
  pageTitle.attribute("class", "title");
  pageTitle.parent("#title-holder");
  pageText = select("#grab-story")
  pageText.remove();
  pageText = createP(epStory);
  pageText.attribute("id", "grab-story");
  pageText.attribute("class", "story");
  pageText.parent("#story-holder");

  codeLinker.removeAttribute("href");
  codeLinker.attribute("href", epGithubLink);

}

function replaceSketch() {
  myp5.remove();
  myp5 = new p5(sketch);
  myp5.cnv.parent("#canvas-holder");
}



/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/
*/
