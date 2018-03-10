/* using jquery and the jquery way point library 

SAAR DONT FORGET TO SUMMARIZE HOW TO DO THESE ANIMATIONS !
*/


/*
making the sticky navbar show when we are scrolling down to the features section (the navbar will show when we reach 100px from the features section and while scrolling down.)
*/


     /* util function  i built to generate animations.*/
 
$( document ).ready(function (){
 
    let animationBuilder =  (elementClass,classesToAdd,offset,scrollDirection = "down")  => {
        let element = $(`.${elementClass}`);
        element.waypoint((direction) =>{
            if(direction === scrollDirection) {
                element.addClass(`${classesToAdd}`);
            } else {
                element.removeClass(`${classesToAdd}`);
            }
        },{offset})
    }
    
    $('.js--section--features').waypoint(function(direction) {
        if(direction ==='down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {offset:'100px'});
    
    animationBuilder('js--cols--features','animated fadeIn','70%');
    animationBuilder('js--iphone','animated bounceInUp','70%');
    animationBuilder('js--cities','animated fadeIn','70%');
    animationBuilder('js--premium--plan','animated pulse','60%');
    
    /*Click handler for the mobile nav icon.*/
    $('.js--phone--nav').on('click', () => {
        
        let mainNav = $(".nav-main");
        /*showing the main nav in an animated cool dropdown way.*/
        mainNav.slideToggle(200);
        
        let icon = $('.js--phone--nav i');
        if(icon.hasClass("ion-navicon-round")) {
            
            icon.removeClass("ion-navicon-round");
            icon.addClass("ion-close-round");
        } else {
            icon.removeClass("ion-close-round");
            icon.addClass("ion-navicon-round");
        }
        
    })
    
});



