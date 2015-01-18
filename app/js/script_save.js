$(document).ready(function() {

	// setInterval(function() {
	// 	$("#preloader .circleLoader").velocity({
	// 		opacity: [0, 1, 0]
	// 	}, 
	// 	{ 
	// 		loop: 1, 
	// 		duration: 500 
	// 	})
	// }, 500);

	if(window.location.pathname === '/productions'){
		$("section.menu").css('position', 'relative').velocity(
			{ 
				top: ['50px', '-100px'] 
			},
			{ 
				duration: 500, 
				easing: "easeOutBack"
			}
		)
		$('.content').velocity(
			'transition.fadeIn',
			{
				duration: 500,
				display: 'block'
			}
		)
	}

	var timeOut;
	$('.navAjax a').click(function(e){
		e.preventDefault();
		$('#carousel_portfolio').find('li.current').removeClass('current');
		page=$(this).attr('href');
		if(page === 'mailto:contact@jktv.fr'){
			return true;
		};
		if(page != "#"){
			clearTimeout(timeOut); 
			// ajaxLoadPageCarousel(page)
			return false;
		}else{
			return true;	
		}	
	})	 	

	timer = "";
	timerCurrent = "";
	timerFinish = "";
	timerSeconds = "";
	seconds = "";

	if(window.location.pathname === "/"){
		$('#carousel_portfolio').find('li:first').addClass('current');
		page = $('#carousel_portfolio li:first a').attr('href');
		// history.pushState(null, null, page);
	}else{	
		$('#carousel_portfolio li').find('a[href$="'+getCurentFileName()+'"]').parent().addClass('current');
	}

	$('#carousel_portfolio').each(function(){
		//$(this).find('li:first').addClass('current'); // set the first tab to display		
		//repeat_slideshow($('#carousel_portfolio'));
		//timerFirstStartSlide();
		//console.log('slideshow started');
	});

	

	$('.carousel').hide();
});
$(window).load(function() {
	
	$("#preloader").velocity(
		"transition.fadeOut", 
		{
			duration: 500,
			complete: function() { animMenuIn(); 
		}
	})

});

$('.sliderImage').click(function(e){
	e.preventDefault;
	e.stopPropagation;

	console.log("Click slider");
	timerStopSlidePage();
	
	$('.slider').velocity({ 
		width: ['960px', '100%'], 
		height: ['540px', '100%'], 
		marginLeft: '-480px', left: '50%' 
	}, 
	{
		duration: 500,
		complete: function(){
			$(this).css('position', 'relative');
			$(this).css('margin', '0 auto');
			$(this).css('left', 'auto');
			$(this).velocity(
				{ 
					marginTop: ['130px', '0'] 
				}, 
				{
					duration: 500, 
					easing : "easeOutBack", 
					complete: function(){
						sliderOffset = $('.slider').offset().top;
						$('.content').velocity(
							'transition.fadeIn',
							{
								duration: 500,
								display: 'block'
							}
						)
						$contentChild = $('.contented h1, .contented h2, .contented h6, .contented .categorie, .contented hr, .contented p, .contented img');
						// console.log($contentChild);
						$contentChild.hide().velocity(
							'transition.slideUpIn',
							{
								duration:500, 
								stagger:150, 
								complete: function(){
									$('footer').velocity('transition.fadeIn',{duration: 500, display:'block'})
								}
							}
						);

						$("nav.navSlider").velocity(
								"transition.expandIn",
							{
								duration: 1000,
								display: 'block'
							}
						);
					}
				}			
			);
			// player.playVideo();
			$(".jk-video-js").velocity(
					"transition.fadeIn",
				{
					duration: 500,
					display: 'block',
					complete: function(){
					}
				}
			);
		}
	});			

	$("section.menu").velocity(
			{ 
				bottom: ['-100px', '60px'] 
			}, 
			{
			duration: 500, 
			easing: "easeInBack", 
			complete: function(){
				$("section.menu").velocity({ 
					top: ['50px', '-100px'] 
				},
				{ 
					duration: 500, 
					easing: "easeOutBack"
				}
				);
			}
		}
	)

	$("nav.slideshowNav, nav.slideshowNav div").velocity(
			"transition.slideRightBigOut",
		{
			duration: 500,
			// easing: [.59,0,.36,1.23],
			stagger: 200,
			backwards: true
		}
	);

	
})

var alerted = false; 

$(window).scroll(function(){
	var aTop = $('.slider').offset().top-100;

	if($('.slider').height() < $(window).height()){
		if($(this).scrollTop()>=aTop && !alerted){
		    alerted = true;
		    $("section.menu").velocity({ top: ['0', '50px'] },{ duration: 250, easing: "ease"});
		    console.log('header just passed.');
		} 
		else if($(this).scrollTop()<=aTop && alerted){
		    alerted = false;
		    $("section.menu").velocity({ top: ['50px', '0'] },{ duration: 150, easing: "ease"});
		    console.log('2header just passed.');
		}
	}
});

$.Velocity.Sequences.fadeUpIn = function(element, options){
	var duration = options.duration || 800;
	$.Velocity.animate(element, {
		translateY : [0, 500],
		opacity: [1, 0]
	},{
		duration: duration,
		stagger: 500,
		display: 'block'
	})
}

function animMenuIn(){
	$(".progressbar").velocity(
		"transition.fadeIn",
		{
			duration: 500,
			complete: function() { timerFirstStartSlide(); },
			delay: 300
		}
		);

	$("div.logoJK").velocity(
		{
			width: ['60px', '0'],
			height: ['60px', '60px']
		},
		{
			duration: 500,
			easing: [.59,0,.36,1.23],
			delay: 300,
			display: 'block'
		}
	);

	$("div.logoJK img").velocity(		
		"transition.flipXIn",
		{
			duration: 500,
			delay: 600,
			display: 'block'
		}
	);

	$("section.menu").velocity(
		{
			width: ['960px', '0'], 
			marginLeft: ['-480px', '0']
		},
		{
			duration: 500,
			easing: [.59,0,.36,1.23],
			display: 'block'
		}
	);

	$("nav.slideshowNav, nav.slideshowNav div").hide().velocity(
		"transition.slideRightBigIn",
		{
			duration: 500,
			// easing: [.59,0,.36,1.23],
			stagger: 200,
			display: 'block'
		}
	);

	$("li.menu").velocity(
		"transition.fadeIn",
		{
			duration: 500,
			stagger: 200
		}
	);
}

function animMenuOut(){
	$("div.logoJK").animate({width: "0"}, 500, "easeOutBack");
	$("div.logoJK img").animate({opacity: 0}, 500, "linear");
	$(".progressbar").animate({opacity: 0}, 500, "linear", function(){
		timerFirstStartSlide();
	});
	$("section.menu").delay(300).animate({width: "0", "margin-left": "0"}, 500, "easeOutQuart");

	var delay = 0;
	$("li.menu").each(function(){
		$(this).delay(delay).animate({ opacity:0 }, 100);
		delay += 50;
	});
}
/* TIMER */
$('#carousel_portfolio li .tab-select').click(function(e){
	e.preventDefault();
	$(this).closest('.carousel_portfolio').find('li').not($(this).parent()).removeClass('current'); // hide all tabs except for the current
	$(this).parent().addClass('current'); // set the current tab to display
	reset_slideshow($(this).closest('#carousel_portfolio'));
	return false;
});

$('#nextSlide').click(function(e){
	timer.stop();
	e.preventDefault();
	var index = $('#carousel_portfolio').find('li.current').index();
	var total = $('#carousel_portfolio').find('li').length;
	if ( index+1 >= total )
		var next = 0;
	else
		var next = index + 1;
	slideshow( $('#carousel_portfolio'));
	redirect_slideshow( $('#carousel_portfolio'));
});
$('#prevSlide').click(function(e){
	timer.stop();
	e.preventDefault();
	var index = $('#carousel_portfolio').find('li.current').index();
	var total = $('#carousel_portfolio').find('li').length;
	if ( index+1 >= 0 )
		var prev = 0;
	else
		var prev = index - 1;
	timer.stop();
	slideshowPrev($('#carousel_portfolio'));
	redirect_slideshow($('#carousel_portfolio'));
});
$('#pauseSlide').click(function(e){
	if(timer.isActive){
		timerStopSlide();
	}else{
		timerStartSlide();	
	}
});
function drawTimer(percent){
	var deg = (0+1*percent);
	$('.progressbar').css({
		'width': deg+'%'
	});
}
function stopWatch(slide){
	seconds = (timerFinish-(new Date().getTime()))/1000;
	// console.log(seconds);	
	if(seconds <= 0){
		drawTimer(100);
		timer.stop();
		slideshow(slide);
		redirect_slideshow(slide);
		console.log('load slide');
	}else{
		percent = 100-((seconds/timerSeconds)*100);
		drawTimer(percent);
		$('.timer').fadeIn(100);
		//console.log('drawtimer');
		//console.log(seconds);
	}
}	
function slideshow(slide)
{
	var index = slide.find('li.current').index();
	var total = slide.find('li').length;
	if ( index+1 >= total )
		var next = 0;
	else
		var next = index + 1;
	slide.find('li.current').removeClass('current');
	slide.find('li').eq(next).addClass('current');
	slide.find('li a').attr('href');
}
function slideshowPrev(slide)
{
	var index = slide.find('li.current').index();
	var total = slide.find('li').length;
	if ( index+1 <= 0 )
		var prev = total;
	else
		var prev = index - 1;
	slide.find('li.current').removeClass('current');
	slide.find('li').eq(prev).addClass('current');
	slide.find('li a').attr('href');
}
function repeat_slideshow(slide)
{		
	timerPaused = 0;
	timerSeconds = 8;
	timerCurrent = 0;
	timerFinish = new Date().getTime()+(timerSeconds*1000);	
	timer = $.timer(function() {
		stopWatch(slide);
	}, 50, true);
}
function reset_slideshow(slide)
{
	stop_slideshow(slide);
	repeat_slideshow(slide);
}
function redirect_slideshow(slide)
{
	page = slide.find('li.current a').attr('href');
	//ajaxLoadPage(page);
}
function getCurentFileName(){
	var pagePathName= window.location.pathname;
	return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}
function timerFirstStartSlide(){
	repeat_slideshow($('#carousel_portfolio'));
	$(".timer").fadeIn(400);
}
function timerStartSlide(){
	timerFinish = new Date().getTime()-(seconds*1000);	
	seconds = (timerFinish-(new Date().getTime()))/1000;
	timer.play();	
	$(".timer").fadeIn(400);
	$('#pauseSlide img').attr('src','images/pause.svg');
}
function timerStopSlide(){
	timerFinish = new Date().getTime()-(seconds*1000);	
	seconds = (timerFinish-(new Date().getTime()))/1000;
	timer.pause();	
	$(".timer").show();
	$('#pauseSlide img').attr('src','images/play.svg');
}
function timerStopSlidePage(){
	timer.pause();	
	$(".timer").fadeOut(400);
	$('#pauseSlide img').attr('src','images/play.svg');
}
function showOpening(){
	$(".opening").delay(1000).fadeIn(2000, function(){
		$(".opening").addClass("openingAnimated");
	});
	timerFirstStartSlide();
}
function afficher(data){
	$('#content').fadeOut(200, function(){
		$('#content').empty();
		$('#content').append(data);
		$('#content').fadeIn(200);
	});
}
function ajaxLoadPage(page){
	//$('.slideshowNav').fadeOut(200);
	$.ajax({					  
		url: "pages/"+page+".php",
		cache:false,
		async: true,
		type: 'POST',
		success:function(html){
		//$('.slideshowNav').fadeIn(1000);
		afficher(html);
	},
	complete: function(){
		// history.pushState(null, null, page);
	},
	error:function(XMLHttpRequest,textStatus,errorThrown){
		  //alert(errorThrown);	
		  //alert("pages"+page+".php");
		}
	});	
}
function ajaxLoadPageCarousel(page){
	$.ajax({					  
		url: "pages/"+page+".php",
		cache:false,
		async: true,
		type: 'POST',
		success:function(html){
			// history.pushState(null, null, page);
			afficher(html);
			timerStopSlide();
			$(".carousel").slideUp(200);
			$("#carousel_portfolio").trigger('updateSizes');
			//$('#productions').removeClass("menuActive"); 
			console.log('ajax success');
		},
		complete: function(){
			$('#carousel_portfolio li').find('a[href$="'+getCurentFileName()+'"]').parent().addClass('current');
		},
		error:function(XMLHttpRequest,textStatus,errorThrown){
			//alert(errorThrown);	
			//alert("pages"+page+".php");
		}
	})
}

// SVG convert
$('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});