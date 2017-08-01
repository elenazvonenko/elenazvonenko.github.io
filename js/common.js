$(function() {
    
    $(window).load(function() {
        $('.top_description').animated('fadeInDown', 'fadeOut');
        $('.header_tabs').animated('flipInY', 'fadeOut');
        $('.content_item').animated('fadeInRight', 'fadeOutRight');
        $('.back h3').animated('fadeInUp', 'fadeOut');
        $('footer').animated('fadeInUp', 'fadeOut');
    });
    
    $('.popup').magnificPopup();
    
    $.stellar({
        responsive: true,
        horizontalOffset: 60
    });
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsive: {
            0:{
                items:1,
                nav:true
            }  
        },
        navText:''
    });
    
    
    resize();
    function resize() {
      $('header').css('min-height', $(window).height());
    };
    $(window).resize(function() {
        resize();
    });
    
    $('.top_city .tab').click(function() {
        $('.top_city .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.top_city .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
    
    $('.header_tabs .tab').click(function() {
        $('.header_tabs .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.header_tabs .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
    
    $('.contacts .tab').click(function() {
        $('.contacts .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.contacts .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
    
      $('footer .tab').click(function() {
        $('footer .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('footer .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
        var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
                var magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                ths.trigger('reset');
            }, 700);
		});
        return false;
	});
});

