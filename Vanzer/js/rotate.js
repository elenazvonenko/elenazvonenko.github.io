(function ($) {
	$.fn.rotate = function(options) {
        options = $.extend({
		'count' : 10,
		'speed': 10
        }, options);

		var clickPosition = null;
		var	index = 0;
		var	images = [];
		var	image = null;


		for (var i = 0; i <= options.count; i++) {
			var img = new Image();
			img.src = 'img/product/' + i + '.jpg';
			images.push(img);
		}
        
		function move(event) {
			var offset = event.pageX - clickPosition;

			if (Math.abs(offset) > options.speed) { // Math.abs() возвращает абсолютное значение числа
				clickPosition = event.pageX;
				index = index + (1 * (offset / Math.abs(offset)));
				if(index >= options.count){
                   index = 0; 
                } 
				else if(index < 0){
                    index = options.count;
                } 
				image.attr('src', images[index].src);
			}
		}

		$(this).on('dragstart', function(){
			return false;
		});

		$(this).append('<img src="img/product/' + index + '.jpg">').find('img').on('mousedown', function(event){
				clickPosition = event.pageX;
				$(document).on('mousemove', move);
			});

		image = $(this).find('img');

		$(document).on('mouseup', function(){
			$(document).off('mousemove');
		});
	}
}(jQuery));