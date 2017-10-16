(function(){
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
  });


    /* Back to top */
    const $btnBackToTop = $(".upBtn");

    function showBackToTop(){
        if($(document).scrollTop() > 400 ){
            $btnBackToTop.addClass("open");
        }else  $btnBackToTop.removeClass("open");
    }
    $(document).scroll(showBackToTop);

    function backToTop(){
        $('html, body').animate({scrollTop: 0}, 500);
    }
    $btnBackToTop.click(backToTop);

    /* Apps Carousel */
    $(".regular").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    });

    /* contact form validation */
    const $sendBtn = $(".contact .btn");

    function captcha(){
        const $captchaInput = $("#form__noRobots");

        if($captchaInput.val() == 4){
            $captchaInput.removeClass("error");
            return true;
        }else {
            $captchaInput.addClass("error");
            return false;
        }

    }
    $sendBtn.click(function(e){
        if(captcha()){

        }else e.preventDefault();
    });


})();