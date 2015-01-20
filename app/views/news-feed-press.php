<!-- ESWC -->
<div class="slider"><img src="images/portfolio/newsfeedpress.jpg" title="News Feed Press - JK Groupe" /></div>
<div class="opening">
  <div class="timer"></div>
  <div class="borderCircleOpening">&nbsp;</div>
  <div class="borderInnerCircleOpening">&nbsp;</div>
  <div class="innerCircleOpening">
    <div class="descOpening">
      <h5>Conception / Réalisation</h5>
      <hr />
      <h1>News Feed Press</h1>
      <h2>JK Groupe</h2>
      <hr />
      <div class="description"> Création de l’identité d’une plateforme vidéo dédiée à l’innovation. Objectif : Créer une identité sérieuse - Créer une navigation intuitive - Automatiser la plateforme </div>
    </div>
    <div class="voir">
      <div class="animatedCircle">&nbsp;</div>
      <div class="borderCircle">&nbsp;</div>
      <div class="innerCircle">voir</div>
    </div>
    <div class="jk-video-js" style="display:none;">
      <div class="closeCross"><img src="images/cross.svg" /></div>
      <div id="playerJK">
      	<div id="player"></div>
      </div>
    </div>
  </div>
</div>
<script>
console.log(window.YT);
if(window.YT){
	window.YT = undefined;
}
console.log(window.YT);
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  console.log('created at start');
  player = new YT.Player('player', {
	height: '593',
	width: '1000',
	videoId: 'YjnDY82eadM',
	playerVars: {'autoplay':'0','rel':'0','control':'1','fs':'1', 'showinfo':'0', 'modestbranding':'0'},
	events: {
	}
  });
}
//html = '<iframe id="player" width="1000" height="593" src="//www.youtube.com/embed/YjnDY82eadM?html5=1&rel=0&wmode=Opaque&enablejsapi=1&modestbranding=2&cc_load_policy=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';

if (document.readyState === 'complete') {  
	animation();
	showOpening();
}else{
	$(window).load(function() {
		//showOpening();
		animation();
		console.log('load at start');
	})
}

function animation()
{		
	$('.voir').click(function(e) {
		e.preventDefault();
		timerStopSlide();
		$(".opening").addClass("jkPlayerWrapper");
		$(".borderCircleOpening").addClass("jkPlayerborderCircleOpening");
		$(".borderInnerCircleOpening").addClass("jkPlayerborderInnerCircleOpening");
		$(".innerCircleOpening").addClass("jkPlayerinnerCircleOpening");
		$(".descOpening").fadeOut(400);
		$(".voir").fadeOut(400,function(){	
			$(".jk-video-js").fadeIn(400);
			player.playVideo();
		});	
	})
	
	$('.closeCross').click(function(e) {	
		e.preventDefault();
		player.stopVideo();
		$(".jk-video-js").fadeOut(200,function(){
			$(".innerCircleOpening").removeClass("jkPlayerinnerCircleOpening");
			$(".borderInnerCircleOpening").removeClass("jkPlayerborderInnerCircleOpening");
			$(".borderCircleOpening").removeClass("jkPlayerborderCircleOpening");
			$(".opening").removeClass("jkPlayerWrapper");
			$(".descOpening").fadeIn(400);
			$(".voir").fadeIn(400);
			timerStartSlide();
		}
		);	
	})	
}

</script>