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
            delay: 600,
            origin: 'right',
            distance: '400px'
          })
          sr.reveal('.navbar', {
            duration: 2000,
            delay: 1000,
            origin: 'left',
            distance: '50px'
          })
          sr.reveal('.display-4', {
            duration: 2000,
            origin: 'left',
            distance: '200px'
          })
          sr.reveal('.web-dev', {
            duration: 2000,
            delay: 300,
            origin: 'bottom',
            distance: '200px'
          })
          sr.reveal('#aboutMe h2', {
            duration: 2000,
            delay: 2000,
            origin: 'top',
            distance: '50px', 
            viewFactor: 0.4          
          })
          sr.reveal('#aboutMe p', {
            duration: 2500,
            delay: 2500,
            origin: 'right',
            distance: '400px',
            viewFactor: 0.4
          })
          sr.reveal('#link-items', {
            duration: 2000,
            delay: 500,
            origin: 'bottom',
            distance: '100px',
            viewFactor: 0.4
          })
          sr.reveal('#copy-right', {
            duration: 1000,
            delay: 100,
            origin: 'bottom',
            distance: '100px',
            viewFactor: 0.4
          })
          sr.reveal('#btxLogo', {
            duration: 2000,
            delay: 1000,
            origin: 'left',
            distance: '400px'
          })
          sr.reveal('.media-body', {
            duration: 3000,
            delay: 1000,
            origin: 'right',
            distance: '400px'
          })

          $('[data-toggle="tooltip"]').tooltip()
})