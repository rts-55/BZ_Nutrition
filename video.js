/* var videoSource = new Array();
  videoSource[0]="./resources/media/video/Two-Swimmers.mp4";
  videoSource[1]="./resources/media/video/Two-Swimmers.mp4";
  videoSource[2]="./resources/media/video/Two-Swimmers.mp4";
  videoSource[3]="./resources/media/video/Two-Swimmers.mp4";
var videoCount = videoSource.length;

var vid = document.getElementById("video1");
alert(vid.duration);*/

( function() {

	var videoPlayer = document.getElementById( 'video-box' ),
		video = videoPlayer.getElementsByClassName( 'landing-video' )[0],
    playlist = videoPlayer.getElementsByClassName( 'video-playlist' )[0],
		source = video.getElementsByTagName( 'source' ),
		linkList = [],
		videoDirectory = './resources/media/video/',
		currentVideo = 0,
		allLinks = playlist.children,
		linkNumber = allLinks.length,
		i,filename;
​
	function playVideo( index ) {
		allLinks[index].classList.add( 'current-video' );
		currentVideo = index;
​
		//source[1].src = videoDirectory + linkList[index] + '.webm';
		video.src = videoDirectory + linkList[index] + '.mp4';
​
		video.load();
		video.play();
	}
​
	// Save all video sources from playlist
	for ( i = 0; i < linkNumber; i++ ) {
		filename = allLinks[i].href;
		linkList[i] = filename.match( /([^\/]+)(?=\.\w+$)/ )[0];
	}
​
	/**
	 * Play next video
	 */

  var video = document.querySelector('video');
  var links = document.querySelectorAll('.video-playlist > a');
  i=0;

  video.addEventListener( 'ended', function () {
    i++;
    if (i >= links.length) {
      currentVideo = 0;
    }
    var a = links.item(i);
    a.className = 'current-video';
    video.setAttribute('src', a.href);
	  video.play();
	} );
​
} () );
