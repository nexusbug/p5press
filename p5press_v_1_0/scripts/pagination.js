function firstEpisode() {
  epCounter = 1;
  replaceScript();
}

function prevEpisode() {
  if (epCounter == 1) {
    epCounter = epNoArray.length;
  } else {
    epCounter -= 1;
  }
  replaceScript();
}


function randomEpisode() {
  let epCounter1 = 0;
  while (epCounter1 == epCounter || epCounter1 == 0) {
    epCounter1 = Math.round(Math.random() * epNoArray.length);
  }
  if (epNoArray.length == 1) {
    epCounter = 1;
  } else if (epNoArray.length == 2) {
    if (epCounter == 1) {
      epCounter = 2;
    } else if (epCounter == 2) {
      epCounter = 1;
    }
  } else if (epNoArray.length > 2) {
    epCounter = epCounter1;
  }
  replaceScript();
}

function nextEpisode() {
  if (epCounter == epNoArray.length) {
    epCounter = 1;
  } else {
    epCounter += 1;
  }
  replaceScript();
}

function lastEpisode() {
  epCounter = epNoArray.length;
  replaceScript();
}



/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/
*/
