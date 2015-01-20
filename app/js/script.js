$(document).ready(function() {

	var timeOut;	

	timer = "";
	timerCurrent = "";
	timerFinish = "";
	timerSeconds = "";
	seconds = "";

	$('.carousel').hide();

	// Slider

	$('.sliderContainer').each(function(){
			$(this).find('picture:first').addClass('current'); // set the first tab to display
			$(".sliderImage.current, .sliderImage.current *").velocity(
				"transition.slideUpIn",
				{
					duration: 300,
					stagger: 200
				}
			);
			repeat_slideshow($(this));
		});
	$('.sliderContainer picture .title').click(function(){
			$(this).closest('.sliderContainer').find('li').not($(this).parent()).removeClass('current'); // hide all tabs except for the current
			$(this).parent().addClass('current', function(){}); // set the current tab to display
			reset_slideshow($(this).closest('.sliderContainer'));
			return false;
		});
	function slideshow(slide)
	{
		var index = slide.find('picture.current').index();
		var total = slide.find('picture').length;
		if ( index+1 >= total )
			var next = 0;
		else
			var next = index + 1;
		$(".sliderImage.current, .sliderImage.current *").velocity(
			"transition.fadeOut",
			{
				duration: 800,
				stagger: 200,
				backwards: true,
				complete: function() { 
					slide.find('picture.current').removeClass('current');
					slide.find('picture').eq(next).addClass('current'); 
					$(".sliderImage.current, .sliderImage.current *").velocity(
						"transition.slideUpIn",
						{
							duration: 300,
							stagger: 200
						}
					);
				},
			}
		);				
		
	}
	function repeat_slideshow(slide)
	{
		slide.data('slider', setTimeout(function(){
			slideshow(slide);
			repeat_slideshow(slide);
		}, 10000));
	}
	function stop_slideshow(slide)
	{
		clearTimeout(slide.data('slider'));
	}
	function reset_slideshow(slide)
	{
		stop_slideshow(slide);
		repeat_slideshow(slide);
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

});
$(window).load(function() {
	$("header, header .logoJK, header li").velocity(
		"transition.slideUpIn",
		{
			duration: 800,
			stagger: 200
		}
	);

	$(".project").velocity(
		"transition.slideUpIn",
		{
			duration: 800,
			stagger: 200
		}
	);

	$(".highlight, .highlight h2, .highlight h4, .content .col-sm-12, .content h4, .content img, .content p").velocity(
		"transition.slideUpIn",
		{
			duration: 800,
			stagger: 200
		}
	);

	$(".project").each(function(i){
		var background = $(this).attr("data-background");
		$(this).css('background-image', 'url(' + background + ')');
		console.log(i + ' ' + background);
	});

	$(".highlight").each(function(i){
		var background = $(this).attr("data-background");
		$(this).css('background-image', 'url(' + background + ')');
		console.log(i + ' ' + background);
	});

	// $(".project").mouseenter(function(){
	// 	$(this).velocity(
	// 		{
	// 			scale: [1.1, 1]
	// 		},
	// 		{
	// 			duration: 800,
	// 			stagger: 200
	// 		}
	// 	)
	// });

	// $(".project").mouseleave(function(){
	// 	$(this).velocity(
	// 		{
	// 			scale: [1, 1.1]
	// 		},
	// 		{
	// 			duration: 800,
	// 			stagger: 200
	// 		}
	// 	)
	// });

});



var alerted = false; 

$(window).scroll(function(){
	// var aTop = $('.slider').offset().top-100;

	// if($('.slider').height() < $(window).height()){
	// 	if($(this).scrollTop()>=aTop && !alerted){
	// 	    alerted = true;
	// 	    $("section.menu").velocity({ top: ['0', '50px'] },{ duration: 250, easing: "ease"});
	// 	    console.log('header just passed.');
	// 	} 
	// 	else if($(this).scrollTop()<=aTop && alerted){
	// 	    alerted = false;
	// 	    $("section.menu").velocity({ top: ['50px', '0'] },{ duration: 150, easing: "ease"});
	// 	    console.log('2header just passed.');
	// 	}
	// }
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
		width: ['1200px', '0'], 
		marginLeft: ['-600px', '0']
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
// $('#carousel_portfolio li .tab-select').click(function(e){
// 	e.preventDefault();
// 	$(this).closest('.carousel_portfolio').find('li').not($(this).parent()).removeClass('current'); // hide all tabs except for the current
// 	$(this).parent().addClass('current'); // set the current tab to display
// 	reset_slideshow($(this).closest('#carousel_portfolio'));
// 	return false;
// });

// $('#nextSlide').click(function(e){
// 	timer.stop();
// 	e.preventDefault();
// 	var index = $('#carousel_portfolio').find('li.current').index();
// 	var total = $('#carousel_portfolio').find('li').length;
// 	if ( index+1 >= total )
// 		var next = 0;
// 	else
// 		var next = index + 1;
// 	slideshow( $('#carousel_portfolio'));
// 	redirect_slideshow( $('#carousel_portfolio'));
// });
// $('#prevSlide').click(function(e){
// 	timer.stop();
// 	e.preventDefault();
// 	var index = $('#carousel_portfolio').find('li.current').index();
// 	var total = $('#carousel_portfolio').find('li').length;
// 	if ( index+1 >= 0 )
// 		var prev = 0;
// 	else
// 		var prev = index - 1;
// 	timer.stop();
// 	slideshowPrev($('#carousel_portfolio'));
// 	redirect_slideshow($('#carousel_portfolio'));
// });
// $('#pauseSlide').click(function(e){
// 	if(timer.isActive){
// 		timerStopSlide();
// 	}else{
// 		timerStartSlide();	
// 	}
// });
// function drawTimer(percent){
// 	var deg = (0+1*percent);
// 	$('.progressbar').css({
// 		'width': deg+'%'
// 	});
// }
// function stopWatch(slide){
// 	seconds = (timerFinish-(new Date().getTime()))/1000;
// 	// console.log(seconds);	
// 	if(seconds <= 0){
// 		drawTimer(100);
// 		timer.stop();
// 		slideshow(slide);
// 		redirect_slideshow(slide);
// 		console.log('load slide');
// 	}else{
// 		percent = 100-((seconds/timerSeconds)*100);
// 		drawTimer(percent);
// 		$('.timer').fadeIn(100);
// 		//console.log('drawtimer');
// 		//console.log(seconds);
// 	}
// }	
// function slideshow(slide)
// {
// 	var index = slide.find('li.current').index();
// 	var total = slide.find('li').length;
// 	if ( index+1 >= total )
// 		var next = 0;
// 	else
// 		var next = index + 1;
// 	slide.find('li.current').removeClass('current');
// 	slide.find('li').eq(next).addClass('current');
// 	slide.find('li a').attr('href');
// }
// function slideshowPrev(slide)
// {
// 	var index = slide.find('li.current').index();
// 	var total = slide.find('li').length;
// 	if ( index+1 <= 0 )
// 		var prev = total;
// 	else
// 		var prev = index - 1;
// 	slide.find('li.current').removeClass('current');
// 	slide.find('li').eq(prev).addClass('current');
// 	slide.find('li a').attr('href');
// }
// function repeat_slideshow(slide)
// {		
// 	timerPaused = 0;
// 	timerSeconds = 8;
// 	timerCurrent = 0;
// 	timerFinish = new Date().getTime()+(timerSeconds*1000);	
// 	timer = $.timer(function() {
// 		stopWatch(slide);
// 	}, 50, true);
// }
// function reset_slideshow(slide)
// {
// 	stop_slideshow(slide);
// 	repeat_slideshow(slide);
// }
// function redirect_slideshow(slide)
// {
// 	page = slide.find('li.current a').attr('href');
// }
// function getCurentFileName(){
// 	var pagePathName= window.location.pathname;
// 	return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
// }
// function timerFirstStartSlide(){
// 	repeat_slideshow($('#carousel_portfolio'));
// 	$(".timer").fadeIn(400);
// }
// function timerStartSlide(){
// 	timerFinish = new Date().getTime()-(seconds*1000);	
// 	seconds = (timerFinish-(new Date().getTime()))/1000;
// 	timer.play();	
// 	$(".timer").fadeIn(400);
// 	$('#pauseSlide img').attr('src','images/pause.svg');
// }
// function timerStopSlide(){
// 	timerFinish = new Date().getTime()-(seconds*1000);	
// 	seconds = (timerFinish-(new Date().getTime()))/1000;
// 	timer.pause();	
// 	$(".timer").show();
// 	$('#pauseSlide img').attr('src','images/play.svg');
// }
// function timerStopSlidePage(){
// 	timer.pause();	
// 	$(".timer").fadeOut(400);
// 	$('#pauseSlide img').attr('src','images/play.svg');
// }
// function showOpening(){
// 	$(".opening").delay(1000).fadeIn(2000, function(){
// 		$(".opening").addClass("openingAnimated");
// 	});
// 	timerFirstStartSlide();
// }
// function afficher(data){
// 	$('#content').fadeOut(200, function(){
// 		$('#content').empty();
// 		$('#content').append(data);
// 		$('#content').fadeIn(200);
// 	});
// }
