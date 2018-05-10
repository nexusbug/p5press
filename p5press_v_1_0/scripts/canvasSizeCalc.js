function calcCanvasSize() {
  wW = windowWidth;
  wH = windowHeight;

  if (wW < wH) {
    wH = wW
  } else {
    wW = wH
  }

  cW = wW - 300;

  if (wW <= 700) {
    cW = 400;
  }else if (wW >= 900){
    cW = 600;
  }
  cH = cW;
}


/*
Website
http://nexusbug.com/

GitHub
https://github.com/nexusbug/
*/
