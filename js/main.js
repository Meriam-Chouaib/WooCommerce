$(document).ready (function() {
    new WOW().init();


    $('.product .filles').waypoint(function(direction) {
       
        $('.product .filles').addClass('animated slideInRight');
        
    }, {
         offset: '70%'
     });

     $('.product .cart').waypoint(function(direction) {
       
        $('.product .cart').addClass('animated slideInBottom');
        
    }, {
         offset: '70%'
     });




});