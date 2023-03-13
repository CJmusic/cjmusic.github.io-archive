var vid = document.getElementById("bgvideo");
// vid.onended = loopFunction()


function loopFunction() {
    //alert("loopFunction called")		
	vid.setAttribute('src', "resources/loopingVinyl.mp4")
	vid.loop = true
	vid.play();
	
};