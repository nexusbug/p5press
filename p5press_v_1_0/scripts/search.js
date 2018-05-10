function searchEpisode() {
  let input = searchBox.value();

  if (input.match(/[a-z]/i)) {
    for (let i = 0; i < data.episodes.length; i++) {
      if (input.toLowerCase() == epNameArray[i].toLowerCase()) {
        epCounter = int(epNoArray[i]);
        replaceScript();
      }
    }
  } else if (input.match(/[0-9]/i) && int(input) > 0 && int(input) <= data.episodes.length) {
    epCounter = int(input);
    replaceScript();
  }

}


/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/
*/
