$(function(){ 
	$('.image').click(function(){
		$('.page_product').append("<div class='window'>"+
						 "<div class='window_bg'></div>"+
						 "<img src="+ $(this).attr('src')+ " class='window_img'>"+
						 "</div>"); 
		$('.window').fadeIn(800); 
		$('.window_bg').click(function(){ 
			$('.window').fadeOut(800);
			setTimeout(function() {	
			  $('.window').remove();
			}, 800);
		});
	});
	
});