var vid = document.getElementById("bgvideo");
vid.onended = loopFunction(){
    alert("loopFunction called");		
	vid.setAttribute("src", "resources/loopingVinyl.mp4")
	vid.loop = true
};