if ($('body').find('.owl-product').length > 0) {
    $(".owl-product").owlCarousel({
        navigation: true,
        autoPlay: false,
        navigationText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],
        itemsTabletSmall: [864, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 2]
    });
}
$('.menu-mobile').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    nav: false,
});

$(".nav-fill-mobile").slick({
    arrows: false,
    dots: false,
    nav: false,
    responsive: [
        {
            breakpoint: 580,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: false,
                nav: false,
            }
        },

    ]
});
