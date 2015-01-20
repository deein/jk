<!-- DOC -->
<section class="slider">	
	<picture class="sliderImage">
		<div class="title">
			<h4>Electronic Arts</h4>
			<h2>Fifa 15 : La leçon</h2>
		</div>
		<img src="images/portfolio/fifa15.jpg" title="Fifa 14 Le Guide Ultime Team - Electronic Arts" />
	</picture>
</section>
<section class="col-lg-12">
	<div class="col-lg-12 content">
		<div class="col-lg-12 contented">
			<h1>Fifa 14 - Le Guide Ultimate Team</h1>			
			<h2>Electronic Arts</h2>
			<hr>
			<img src="images/test-fifa2.jpg" />
			<div class="col-lg-12 categorie"><div class="title">Objectif</div></div>
			<p>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nisi deserunt et veritatis optio quibusdam cumque. Cupiditate, pariatur, id, aperiam, ullam dicta debitis quaerat quisquam nemo quos accusantium quasi sint!</span>
				<span>Commodi, iusto, vitae atque temporibus nisi laudantium odit laborum repellat quod reiciendis quis ducimus ullam incidunt ea ratione dolores velit officiis modi reprehenderit sunt. Deleniti, fuga amet nulla deserunt nam.</span>
				<span>Officiis, nulla, earum, voluptatem molestiae in natus mollitia nemo placeat incidunt eveniet nihil ex praesentium eos. Atque, qui, aut laboriosam culpa cumque error voluptatum eaque quidem incidunt quam omnis est?</span>
			</p>
			<img src="images/portfolio/fifa-14-fut-guide.jpg" title="Fifa 14 Le Guide Ultime Team - Electronic Arts" />
			<div class="col-lg-12 categorie"><div class="title">Idée</div></div>
			<p>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, at, quidem, expedita, neque aliquid veritatis sequi laboriosam est iure quasi doloremque rerum id minima a aut numquam natus ipsum nihil!</span><span>Doloribus, beatae, sunt, qui, illo voluptatum praesentium placeat eos a amet reprehenderit odio esse eius tempore ex unde consequuntur ipsum iste eaque explicabo assumenda saepe sed quo perferendis tenetur at.</span>
			</p>
			<img src="images/test-fifa3.jpg" title="Fifa 14 Le Guide Ultime Team - Electronic Arts" />
			<div class="col-lg-12 categorie"><div class="title">Impact</div></div>
			<p>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, modi, odit labore explicabo veritatis natus laborum exercitationem quae ullam ipsam nobis velit quasi? Quos, perspiciatis, quaerat laboriosam pariatur dolorum incidunt!</span>
				<span>Sint, quisquam, porro molestias non nemo atque quaerat consequuntur odit provident similique cum ipsa quos quibusdam sunt fuga dolorem commodi autem debitis voluptas voluptatem maxime magnam voluptatum facere itaque accusamus.</span>
				<span>Modi, aspernatur, provident quae veniam cupiditate eveniet cumque et molestiae nihil eum debitis ad alias dolor voluptas eos ut possimus? Sed, ullam veniam nobis omnis incidunt odit ex voluptate quaerat!</span>
			</p>
		</div>
	</div>

	<footer class="col-lg-12">
		<div class="col-lg-7">
			<p>&copy; 2013 - <?php date_default_timezone_set('Europe/Paris'); echo date('Y'); ?> JK Groupe. All rights reserved.</p>
		</div>
		<div class="col-lg-5"></div>
	</footer>
</section>
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
	height: '100%',
	width: '100%',
	videoId: 'whbCgJUeLC4',
	playerVars: {'autoplay':'0','rel':'0','control':'0','fs':'1', 'showinfo':'0', 'modestbranding':'0'},
	events: {
	}
  });
}
//html = '<iframe id="player" width="1000" height="593" src="//www.youtube.com/embed/whbCgJUeLC4?html5=1&rel=0&wmode=Opaque&enablejsapi=1&modestbranding=2&cc_load_policy=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';

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