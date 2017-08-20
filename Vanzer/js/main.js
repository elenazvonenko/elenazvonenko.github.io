;$(function(){
    $('header .bg').hide();
    $('header .bg, header .line').fadeIn(3000);
    $('header .more').hover(
    function(){
        $('header .line').animate({width: "130px"}, 400),
        $('header .fa-long-arrow-right').animate({marginLeft: '28px'}, 400);
    },
    function(){
        $('header .line').animate({width: "200px"}, 400),
        $('header .fa-long-arrow-right').animate({marginLeft: '5px'}, 400);
    });
    
    
    
    $('.services .caption, .portfolio .caption, .contact .caption, .blog .caption').hover(
    function(){
        $('.services .line, .portfolio .line, .contact .line, .blog .line').animate({width: "300px"}, 400)
    },
    function(){
        $('.services .line, .portfolio .line, .contact .line, .blog .line').animate({width: "400px"}, 400)
    });
    
    $('.services .title').on('click', function(){
        $('.services .text, .letter, .topic').hide();
        $('.services .title').css('color', '#737373');
        $(this).css('color', '#b3b3b3');
        $('.services').css('backgroundImage', $(this).attr('data-bg'));
        $('.services .letter').html($(this).text()[0]).fadeIn(1000);
        $('.services .topic').html($(this).text()).fadeIn(2000);
        $('.services .text').eq($(this).attr('data-text')).fadeIn(3500);
    })
    $('.services .title').eq(0).trigger('click');
    
    
    $('.portfolio .more').hover(
        function(){
            $('.portfolio .line2').animate({width: "130px"}, 400),
            $('.portfolio .fa-long-arrow-right').animate({marginLeft: '13px'}, 400);
        },
        function(){
            $('.portfolio .line2').animate({width: "200px"}, 400),
            $('.portfolio .fa-long-arrow-right').animate({marginLeft: '5px'}, 400);
        });
    
    $('.blog h4').on('click', function(){
        $('.blog h3, .blog h3+p, .blog img').hide();
        $('.blog h3').html($(this).text()).show(700);
        $('.blog h3+p').html($(this).next().text()).show(700);
        $('.blog img').attr('src', $(this).attr('data-pic')).fadeIn(1000);
    });
    
    $('.blog h4').eq(2).trigger('click');
    
    $('.blog h4').hover(
        function(){
            $(this).css({color: '#ff4200', opacity:'0.5'})
        },
        function(){
            $(this).css({color: '#333', opacity:'1'})
        });
    
    $('.scroll a').click(function(){
         $('html,body').animate({
             scrollTop: $($(this).attr('href')).offset().top
	 		}, 1200);
    });
    
    $('.scroll .bar').on('click', function (){
        $('.scroll .bar, .scroll .line').css('backgroundColor', '#737373');
        $('.scroll .line').animate({height: '0px', width: '0px'}, 500);
        $('.scroll p').css({display: 'none'});
        $(this).css('backgroundColor', 'white');
        $(this).parent().next().animate({height: '50px', width: '2px'}, 500).css('backgroundColor', 'white');
        $(this).parent().next().children().fadeIn(2000);
         if($(this).hasClass('black')){
             $(this).css('backgroundColor', 'black');
             $(this).parent().next().css('backgroundColor', 'black');
             $(this).parent().next().children().css('color', 'black');
         };
    });
  
    
    $('.scroll .bar').eq(0).trigger('click');
    
    $(window).scroll(function() {
        var start = $('#about').offset().top - $(window).height()/1.1
        var end = $('#services').offset().top - $(window).height()
        if($(window).scrollTop() > start && $(window).scrollTop() < end){
            $('#about .container').addClass('fadeInDown');
        }
    });
    
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            zoom: 11,
            scrollwheel: false,
            center: new google.maps.LatLng(40.6700, -73.9400),
            styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff7700"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1d1d1d"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#ff5f00"},{"weight":"5.00"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#787878"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#2d2d2d"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"saturation":"64"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#fafafa"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d5d5d5"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#ff5f00"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"5.00"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ff4b14"},{"visibility":"on"},{"lightness":"55"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ff4b14"},{"lightness":"100"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#b2b2b2"},{"saturation":"13"},{"lightness":"-1"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#ff5f00"},{"visibility":"on"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"lightness":"4"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#e1e1e1"},{"visibility":"on"}]}]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
        }
    
});