$(document).ready(function() {
    $('.image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        dots: true,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fas fa-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fas fa-arrow-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});