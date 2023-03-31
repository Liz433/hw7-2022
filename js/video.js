var vid = document.querySelector('.video');
var slider = document.getElementById('slider');
var output = document.getElementById('volume');
var hitSlow = false
// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	var vid = document.querySelector(".video");
	vid.autoplay = false
	console.log("Autoplay is set to false")
	vid.loop = false;
	console.log("Loop is set to false")
	//video is not automatically muted
	vid.muted = false
	console.log(vid.muted)
	vid.playbackRate = 1;
	

});
// play video
document.querySelector("#play").addEventListener("click", function() {
	document.querySelector('.video').play();
	console.log("Play Video");
	// update the volume information
	output.innerHTML = slider.value + '%'
	vid.volume = slider.value 

});
// pause video
document.querySelector("#pause").addEventListener("click", function() {
	document.querySelector('.video').pause();
	console.log("Pause Video");
});

// mute & unmute
document.getElementById('mute').addEventListener("click", function() {
	if (vid.muted === false) {
		vid.muted = true
		console.log('Muted')
		document.getElementById('mute').innerHTML = "Unmute";
	}
	else {
		vid.muted = false
		console.log('Unmuted')
		document.getElementById('mute').innerHTML = "Mute";
	}
});

// slow down video
document.querySelector('#slower').addEventListener("click", function() {
	slow = vid.playbackRate
	vid.playbackRate = vid.playbackRate - (vid.playbackRate * .1);
	// 1 - 1*.1 reverse: 1 + 1*.1
	// .9 - .9*.1 = .81 reverse = 
	//slow = vid.playbackRate - (vid.playbackRate * .1)
	console.log('Slow down Video')
	console.log('Speed is ' + vid.playbackRate)
	hitSlow = true
});

// speed up video
document.querySelector('#faster').addEventListener("click", function() {
	//if (hitSlow) {
	tmp = vid.playbackRate
	vid.playbackRate = vid.playbackRate + (slow * .1);
	slow = tmp
	//}
	// else {
	// 	vid.playbackRate = vid.playbackRate + (vid.playbackRate * .1);
	// }
	console.log('Speed up Video')
	console.log('Speed is ' + vid.playbackRate)
});

// skip ahead
document.querySelector('#skip').addEventListener("click", function() {
	time = vid.currentTime + 10;
	if (time > vid.duration) {
		vid.currentTime = 0
	}
	else{
		vid.currentTime = time 
	}
	console.log('Video current time is ' + vid.currentTime)
});

// old school class
document.getElementById('vintage').addEventListener("click", function() {
	vid.classList.add('oldSchool')
});

// original class
document.getElementById('orig').addEventListener("click", function() {
	vid.classList.remove('oldSchool')
});

// volume
slider.oninput = function() {
	output.innerHTML = this.value + '%';
	vid.volume = this.value/100
	console.log('The current value is ' + vid.volume)
}

