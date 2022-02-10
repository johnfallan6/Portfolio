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
            delay: 3000,
            origin: 'top',
            distance: '50px',           
          })
          sr.reveal('#aboutMe p', {
            duration: 3000,
            delay: 5000,
            origin: 'right',
            distance: '400px'
          })
          sr.reveal('#link-items', {
            duration: 2000,
            delay: 500,
            origin: 'bottom',
            distance: '100px',
            viewFactor: 0.4
          })
          sr.reveal('#copy-right', {
            duration: 2000,
            delay: 1000,
            origin: 'bottom',
            distance: '100px',
            viewFactor: 0.4
          })

          $('a[href*="#"]:not([href="#"])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                  if (target.length) {
                      $('html, body').animate({
                          scrollTop: target.offset().top
                      }, 1000);
                      return false;
                  }
              }
          })
})