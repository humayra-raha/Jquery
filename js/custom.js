$(document).ready(function(){
    
    //window scroll
    $(window).scroll(function(){
        var a = $(this).scrollTop();
        if(a > 200){
            $('.back-to-top').fadeIn();
        }
        else{
            $('.back-to-top').fadeOut();
        }
        
        //add bg class in menu-bg
        if(a >= 450){
            $('.menu-bg').addClass('bg');
        }
        else{
            $('.menu-bg').removeClass('bg');
        }
    });

// click to top
$('.back-to-top').click(function(){
    $('html,body').animate({
        scrollTop: 0,
    },1500);
});

// animate
$('#btn').click(function(){
   $('.main-box .box').animate({
       left: 150,
       top: 150,
       width:100,
       height: 100,
   },1500); 
   $('.main-box .box').animate({
       left: 350,
       top: 250,
       width: 50,
       height: 50,
   },1500);
   $('.main-box .box').animate({
       left: 450,
       top: 350,
       width: 100,
       height: 100,
   },1500);
   $('.main-box .box').animate({
       left: 550,
       top: 450,
       width: 50,
       height: 50,
   },1500);
   $('.main-box .box').animate({
       left: 300,
       top: 400,
       width: 100,
       height: 100,
   },1500);
   $('.main-box .box').animate({
       left: 0,
       top: 450,
       width: 50,
       height: 50,
   },1500);
   $('.main-box .box').animate({
       left: 0,
       top: 0,
       width: 50,
       height: 50,
   },1500);
   $('.main-box .box').animate({
       left: 550,
       top: 0,
       width: 50,
       height: 50,
   },1500);
   $('.main-box .box').animate({
       left: 500,
       top: 200,
       width: 100,
       height: 100,
   },1500);
   $('.main-box .box').animate({
       left: 550,
       top: 450,
       width: 50,
       height: 50,
   },1500);
   $('.main-box .box').animate({
       left: 300,
       top: 250,
       width: 100,
       height: 100,
   },1500);
   $('.main-box .box').animate({
       left: 0,
       top: 0,
       width: 50,
       height: 50,
   },1500);
});    
    
    
    
    
    
    
    
    
    
////animation scroll js
//var html_body = $('html, body');
//$('.menu-bg a').on('click', function(){
//    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//        var target = $(this.hash);
//        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//        if (target.length) {
//            html_body.animate({
//                scrollTop: target.offset().top = 0
//            }, 1500);
//            return false;
//        }
//    }
//})

});