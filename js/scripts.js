$(function() {
    $(".carousel").carousel( { interval: 5000 } );
    $("#carouselButton").on("click", function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }  
    })
    window.sr = ScrollReveal();
          sr.reveal('.johnsHead', {
            duration: 2000,
            delay: 500,
            origin: 'right',
            distance: '400px'
          })
          sr.reveal('.navbar', {
            duration: 2000,
            origin: 'top',
            distance: '200px'
          })
          sr.reveal('.display-4', {
            duration: 2000,
            origin: 'left',
            distance: '200px'
          })
          sr.reveal('.web-dev', {
            duration: 2000,
            origin: 'left',
            distance: '200px'
          })
})