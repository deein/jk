<!-- ESWC -->
<style>
div.slider {
	background:background: #ffffff; /* Old browsers */
	background: -moz-radial-gradient(center, ellipse cover, #ffffff 0%, #b6b6b6 100%); /* FF3.6+ */
	background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #ffffff), color-stop(100%, #b6b6b6)); /* Chrome,Safari4+ */
	background: -webkit-radial-gradient(center, ellipse cover, #ffffff 0%, #b6b6b6 100%); /* Chrome10+,Safari5.1+ */
	background: -o-radial-gradient(center, ellipse cover, #ffffff 0%, #b6b6b6 100%); /* Opera 12+ */
	background: -ms-radial-gradient(center, ellipse cover, #ffffff 0%, #b6b6b6 100%); /* IE10+ */
	background: radial-gradient(ellipse at center, #ffffff 0%, #b6b6b6 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#b6b6b6', GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
div.slider img {
	position: absolute;
	height: 920px;
	min-height: 920px;
	min-width: 858px;
	top: -100px;
}
.opening .voir {
	bottom:-100px;	
}
.opening .voir:hover .innerCircle {
	background: rgba(0,5,13,1);
}
.opening .animatedCircle {
	border:1px solid rgba(0,5,13,.2);
}
.opening .borderCircle {	
	border:2px solid rgba(0,5,13,.2);
}
</style>

<div class="container slider"><img src="images/portfolio/hny-2014.png" /></div>
<div class="opening jkPlayerWrapper">
	<div class="borderCircleOpening" style="display:none;">&nbsp;</div>
	<div class="borderInnerCircleOpening" style="display:none;">&nbsp;</div>
	<div class="innerCircleOpening jkPlayerinnerCircleOpening" style="background:none;">  	
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
<div class="container">
	<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, cumque sunt eos tempora totam eveniet non asperiores ipsa et amet sint sed laborum voluptatibus alias soluta nemo deserunt corporis ad.</div>
	<div>Error, facilis earum qui neque eos eveniet placeat praesentium incidunt sed nulla! Incidunt, optio, deleniti voluptatum aliquid fuga culpa iste omnis cumque totam explicabo praesentium rerum libero iusto labore suscipit?</div>
	<div>Natus cupiditate quibusdam atque soluta necessitatibus dignissimos ut rerum! Quia, explicabo suscipit quibusdam dolorem tempore molestias facilis dolor aliquid aspernatur sint culpa at quos. Numquam, voluptates odit dignissimos quibusdam ducimus.</div>
	<div>Quis, et, rerum, dolor, sequi vitae quisquam obcaecati qui expedita earum nesciunt tenetur quas. Ad, doloribus, dolores dicta excepturi eos quae voluptas ratione libero perferendis sequi dolorem atque amet. Numquam!</div>
	<div>Pariatur, cumque ut maiores. Reprehenderit, impedit, omnis esse repellendus placeat odio ipsa eum sunt ex doloremque deserunt quia fuga labore dolorem necessitatibus consectetur laboriosam doloribus nesciunt eveniet animi dignissimos consequuntur!</div>
	<div>Ad, quasi totam iure in omnis iusto harum enim temporibus cumque est unde labore! Eveniet, corporis, minima a eum explicabo blanditiis ab iusto et nobis reiciendis suscipit facilis voluptate voluptatibus!</div>
	<div>Minima deserunt perferendis quo quia similique natus molestiae magnam non atque omnis? Temporibus atque velit voluptas ratione repudiandae quaerat labore natus aut ut sit. Architecto quidem itaque nisi minima fuga.</div>
	<div>Quam, unde, a, possimus deserunt accusantium maiores at quod quasi iusto earum ipsum molestiae ratione natus fugit dignissimos nihil sapiente delectus harum perferendis autem quos! Consequuntur dicta molestias suscipit voluptas.</div>
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
		videoId: 'goo3mR7nJmA',
		playerVars: {'autoplay':'0','rel':'0','control':'1','fs':'1', 'showinfo':'0', 'modestbranding':'0'},
		events: {
		}
	});
}
//html = '<iframe id="player" width="1000" height="593" src="//www.youtube.com/embed/goo3mR7nJmA?html5=1&rel=0&wmode=Opaque&enablejsapi=1&modestbranding=2&cc_load_policy=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';

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