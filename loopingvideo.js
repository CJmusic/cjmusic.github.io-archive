  var count = 1;
  var vid = document.getElementById("bgvideo");
  vid.addEventListener("ended", switchvideo, false);
  function switchvideo(e) {

    if (count > 1) {
      vid.setAttribute('src', 'resources/loopingVinyl.mp');
    } else {
      vid.setAttribute('src', 'resources/IMG_0064.mp4');
    }
    count++;
    vid.load();
    try {
      setTimeout(()=>vid.play(), 2000);
    } catch (err){
       console.log(err)
    }
  }
