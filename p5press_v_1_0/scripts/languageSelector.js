function selectLanguage() {
  switch (this.id()) {
    case "grab-english":
    language = "en";
    break;
    case "grab-spanish":
    language = "es";
    break;
    case "grab-turkish":
    language = "tr";
    break;
    default:
    language = "en";
    break;
  }
  replaceButtons();
  replaceStory();
}

function replaceVariables() {

  switch (language) {
    case "en":
      epName = epNameEn;
      epStory = epStoryEn;
      break;
    case "es":
      epName = epNameEs;
      epStory = epStoryEs;
      break;
    case "tr":
      epName = epNameTr;
      epStory = epStoryTr;
      break;
    default:
      epName = epNameEn;
      epStory = epStoryEn;
      break;
  }

}

function replaceButtons() {

  for (i in prevButton) {
    let x = prevButton[i].child();
    x[0].remove();
    switch (language) {
      case "en":
        x = createA("#", "Previous");
        break;
      case "es":
        x = createA("#", "Anterior");
        break;
      case "tr":
        x = createA("#", "Önceki");
        break;
      default:
        x = createA("#", "Previous");
        break;
    }
    x.attribute("class", "page-link");
    x.parent(prevButton[i]);
  }

  for (i in randomButton) {
    let x = randomButton[i].child();
    x[0].remove();
    switch (language) {
      case "en":
        x = createA("#", "Random");
        break;
      case "es":
        x = createA("#", "Aleatorio");
        break;
      case "tr":
        x = createA("#", "Rastgele");
        break;
      default:
        x = createA("#", "Random");
        break;
    }
    x.attribute("class", "page-link");
    x.parent(randomButton[i]);
  }

  for (i in nextButton) {
    let x = nextButton[i].child();
    x[0].remove();
    switch (language) {
      case "en":
        x = createA("#", "Next");
        break;
      case "es":
        x = createA("#", "Siguiente");
        break;
      case "tr":
        x = createA("#", "Sonraki");
        break;
      default:
        x = createA("#", "Next");
        break;
    }
    x.attribute("class", "page-link");
    x.parent(nextButton[i]);
  }

}



/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/
*/
