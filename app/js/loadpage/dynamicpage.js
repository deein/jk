$(document).ready(function() {
	
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
			  ajaxLoadPageCarousel(page)
			  return false;
		  }else{
			  return true;	
		  }	
	})	 	

	function ajaxLoadPageCarousel(page){
		$.ajax({					  
			url: "pages/"+page+".php",
			cache:false,
			async: true,
			type: 'POST',
			/*
			xhr: function(){
			  // get the native XmlHttpRequest object
			  var xhr = $.ajaxSettings.xhr() ;
			  // set the onprogress event handler
			  xhr.onprogress = function(evt){
				  var percent = evt.loaded/evt.total*100; 
				  $('#productions').text(percent);
				  console.log('progress', evt.loaded/evt.total*100) 
			  };
			  // set the onload event handler
			  xhr.onload = function(){ console.log('DONE!') } ;
			  // return the customized object
			  return xhr ;
			},
			*/
			success:function(html){
				history.pushState(null, null, page);
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

});

function afficher(data){
	$('#content').fadeOut(200, function(){
		$('#content').empty();
		$('#content').append(data);
		$('#content').fadeIn(200);
	});
}