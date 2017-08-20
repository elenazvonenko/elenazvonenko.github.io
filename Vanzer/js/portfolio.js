$(function(){
    $('.page_portfolio .menu li a').click(function() {
        $('.page_portfolio .menu li').removeClass('selected');
        $(this).parent().addClass('selected');
        var width = '200px';
        if($(this).attr('data-name') != 'all') {
            $('.page_portfolio .item li[data-name='+ $(this).attr('data-name')+']').animate({
                'width' : width, 
                'opacity' : 1, 
                'marginRight' : '.5em',
                'marginLeft' : '.5em'
            }, 500);
            $('.page_portfolio .item li[data-name!='+$(this).attr('data-name')+']').animate({
                'width' : 0, 
                'opacity' : 0,
                'marginRight' : 0, 
                'marginLeft' : 0
            }), 500;
        }
        else {
            $('.page_portfolio .item li').animate({
                'width' : width, 
                'opacity' : 1, 
                'marginRight' : '.5em',
                'marginLeft' : '.5em'
            }), 500;
        };
    });
    
    $('.page_portfolio .item li img').animate({'opacity' : 0.7}).hover(function() {
        $(this).animate({'opacity' : 1});
    }, 
    function() {
        $(this).animate({'opacity' : 0.7});
    });
})