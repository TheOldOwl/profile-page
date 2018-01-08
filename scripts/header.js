



$(document).ready(function() {
    
    $('.header li').on('mouseover', function(){
        $('.active').css({'color': '#c2c2c2', 'backgroundColor': '#393939'});  
    });

    $('.header li').on('mouseout', function(){
        $('.active').css({'boxShadow': 'none', 'color': '#CF4647'});  
    });

    // Active button on link change

	$('.header li a').filter(function(){
        return this.href==location.href}).parent().addClass('active').siblings().removeClass('active');

    // email address hover

    $('.email').hover(function() {
        $('#logo').css({'opacity': '0.6'}); }, function() {
            $('#logo').css({'opacity': '0.1'});
    })

    // $('.email').on('mouseover', function() {
    //     $('.logo').addClass('logo-on');
    // })
});