const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }

}

$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*click even*/
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    //owl-carousel for apps
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //click to scroll top
    $('.move-up span').click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    })

    //AOS
    AOS.init();


})

var swiper = new swiper('.slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false
    },
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    }
})