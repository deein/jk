$(document).ready(function($){
	timer = "";
	timerCurrent = "";
	timerFinish = "";
	timerSeconds = "";
	seconds = "";
	
	if(window.location.pathname === "/"){
		$('#carousel_portfolio').find('li:first').addClass('current');
		page = $('#carousel_portfolio li:first a').attr('href');
		history.pushState(null, null, page);
	}else{	
		$('#carousel_portfolio li').find('a[href$="'+getCurentFileName()+'"]').parent().addClass('current');
	}
	
	$('#carousel_portfolio').each(function(){
		//$(this).find('li:first').addClass('current'); // set the first tab to display		
		//repeat_slideshow($('#carousel_portfolio'));
		//timerFirstStartSlide();
		//console.log('slideshow started');
	});
	
	$('#carousel_portfolio li .tab-select').click(function(){
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
		history.pushState(null, null, page);
	  },
	  error:function(XMLHttpRequest,textStatus,errorThrown){
		  //alert(errorThrown);	
		  //alert("pages"+page+".php");
	  }
  });	
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