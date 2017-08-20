(function($){
	$.fn.carousel = function(options) {
		var settings = {
			visible: 4, // количество видимых элементов
			rotate: 2, // колисество прокручеваемых эдементов
			speed: 500,
			auto: null, // время заднржки при автоматической прокрутке
		};

		return $(this).each(function() {
			if (options) {
				$.extend(settings, options);
			}

			var width = $('.carousel').children().outerWidth(true); // ширина одного элемента
			var length = $('.carousel').children().length; // количество элементов карусели
			var running = false; // проигрывается ли анимация на данный момент
			var interval = null; // нужен для сброса интервала
        
            $(this).css({
				'position': 'relative',
				'overflow': 'hidden',
				'width': options.visible * width + 'px'
			});
            
			$('.carousel').css({
				'position': 'relative',
				'width': 99999 + 'px',
				'left': 0
			});
        
             function slide(course) { // course - false(сдедующий), true(предыдущий)
				var leftIndent = 0; // левое смещение
                var direction = 0;
                // направление в зависимости от переданного параметра course
                if(!course){
                    direction = -1;
                }
                 else {
                     direction = 1
                 }
                
				if (!running) { // анимация не начата или завершена
					running = true;

					if (interval) { // запущен интервал
						window.clearInterval(interval);
					}

					if (!course) {
                        $('.carousel').children(':last').after($('.carousel').children().slice(0, options.rotate).clone(true)); // после последнего элемента клоны стольких элементов, сколько задано в rotate
					} else {
						$('.carousel').children(':first').before($('.carousel').children().slice(length - options.rotate, length).clone(true)); // перед первым элементом клоны стольких элементов, сколько задано в rotate
						$('.carousel').css('left', -width * options.rotate + 'px'); // смещение карусели влево
					}

					leftIndent = parseInt($('.carousel').css('left')) + (width * options.rotate * direction); // расчет текущего смещения

					$('.carousel').animate({'left': leftIndent}, {duration: options.speed, complete: function() {
						if (!course) {
							$('.carousel').children().slice(0, options.rotate).remove(); // удалить столько первых элементов, сколько задано в rotate
							$('.carousel').css('left', 0);
						} 
                        
                        else {
							$('.carousel').children().slice(length, length + options.rotate).remove(); // удалить столько последних элементов, сколько задано в rotate
						}

						if (options.auto) {
							interval = window.setInterval(function(){slide()}, options.auto);
						}

						running = false;
					}});
				}
			}

			$('.next').click(function() {
				return slide(false);
			});

			$('.prev').click(function() {
				return slide(true);
			});

			if (options.auto) {
				interval = window.setInterval(function(){slide()}, options.auto);
			}
            
            $('.next, .prev').hover(
                function(){
                    $(this).css({color: '#ff4200', opacity:'0.5'})
                },
                function(){
                    $(this).css('color', '#b3b3b3')
                });
        });
	};
})(jQuery);