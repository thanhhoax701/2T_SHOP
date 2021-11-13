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
                    arrows: true
                }
            }
        ]
    });
});

// Danh mục
var typed = new Typed(".auto-input", {
    strings: ["Danh mục", "Danh Mục", "DANH MỤC"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Password
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "#fbd233";
        msg.style.color = "#fbd233";
    } else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }

});

//
var container = {

    showInput: function() {
        var showMore = document.querySelector('.show-more');

        var historyCompact = document.querySelector('.history-compact');

        var hideMore = document.querySelector('.hide-more');

        var closeProduct = document.querySelectorAll('.close-history-product')[0];

        var nameProduct = document.querySelectorAll('.history-header-search-item')[0];

        var closeProductTwo = document.querySelectorAll('.close-history-product')[1];

        var nameProductTwo = document.querySelectorAll('.history-header-search-item')[1];

        var closeProductThree = document.querySelectorAll('.close-history-product')[2];

        var nameProductThree = document.querySelectorAll('.history-header-search-item')[2];

        closeProduct.addEventListener('click', function() {
            nameProduct.style.display = 'none';
        })

        closeProductTwo.addEventListener('click', function() {
            nameProductTwo.style.display = 'none';
        })

        closeProductThree.addEventListener('click', function() {
            nameProductThree.style.display = 'none';
        })

        showMore.addEventListener('click', function() {
            historyCompact.style.display = 'block'
            showMore.style.display = 'none'
            hideMore.style.display = 'block'
        })

        hideMore.addEventListener('click', function() {
            historyCompact.style.display = 'none'
            showMore.style.display = 'block'
            hideMore.style.display = 'none'
        })

    },

    showHistoryBtn: function() {
        var outPutSearch = document.querySelector('.output__search');

        var clickOnInput = document.querySelector('.input-search');

        var clickOffInput = document.querySelector('.close-the-search-panel-title');


        clickOnInput.addEventListener('click', function() {
            outPutSearch.style.display = 'block'
        })

        clickOffInput.addEventListener('click', function() {
            outPutSearch.style.display = 'none'
        })
    },

    login: function() {

        showLogin = document.querySelector('.user__header--top');

        boxLogin = document.querySelector('.document-login');

        closeLogin = document.querySelector('.document-close');

        showLogin.addEventListener('click', function() {
            boxLogin.style.display = 'flex'
        })

        closeLogin.addEventListener('click', function() {
            boxLogin.style.display = 'none'
        })

        // show login email

        var documentEmail = document.querySelector('.document-gmail');

        var loginUser = document.querySelector('.document-login-use');

        var loginPhoneNumber = document.querySelector('.login-phone');

        var iconLeft = document.querySelector('.login-phone-left');

        documentEmail.addEventListener('click', function() {
            loginUser.style.display = 'none';
            loginPhoneNumber.style.display = 'grid'
        })

        iconLeft.addEventListener('click', function() {
            loginUser.style.display = 'block';
            loginPhoneNumber.style.display = 'none'
        })

        // show khung quên mật khẩu

        var showForget = document.querySelector('.forget-password')

        var Boxforget = document.querySelector('.forgot-box');

        var iconForget = document.querySelector('.icon-left-forgot')

        showForget.addEventListener('click', function() {
            loginPhoneNumber.style.display = 'none';
            Boxforget.style.display = 'grid'
        })

        iconForget.addEventListener('click', function() {
            loginPhoneNumber.style.display = 'grid';
            Boxforget.style.display = 'none'
        })

        // show khung tạo tài khoản

        var showCreate = document.querySelector('.no-account-item');

        var createLogin = document.querySelector('.create-login');

        var iconLeftCreate = document.querySelector('.icon-left-create')

        showCreate.addEventListener('click', function() {
            loginPhoneNumber.style.display = 'none';
            createLogin.style.display = 'grid';
        })

        iconLeftCreate.addEventListener('click', function() {
            loginPhoneNumber.style.display = 'grid';
            createLogin.style.display = 'none';
        })

    },

    navigation: function() {
        var prevNavigation = document.querySelector('.prev-navigation');

        var nextNavigation = document.querySelector('.next-navigation');

        var navigationSlider = document.querySelector('.navigation-slider');

        prevNavigation.addEventListener('click', function() {
            navigationSlider.style.transform = 'translateX(0)';
            prevNavigation.style.display = 'none';
            nextNavigation.style.display = 'block';
        })

        nextNavigation.addEventListener('click', function() {
            navigationSlider.style.transform = 'translateX(-50%)';
            prevNavigation.style.display = 'block';
            nextNavigation.style.display = 'none';
        })

    },

    mainSlider: function() {
        var sliderSize = document.querySelector('.slider-container').clientWidth;

        var slider = document.querySelector('.slider-container-banner');

        var prevBtn = document.querySelector('.prev-slider');

        var nextBtn = document.querySelector('.next-slider');

        var sliderImg = slider.querySelectorAll('.slider-img');

        var sliderFull = sliderSize * sliderImg.length;

        sliderFull -= sliderSize;

        var sliderTransfer = 0;

        function nextSlider() {

            if (sliderTransfer < sliderFull) {
                sliderTransfer += sliderSize;
            } else {
                sliderTransfer = 0;
            }
            slider.style.marginLeft = '-' + sliderTransfer + 'px';
        }

        nextBtn.addEventListener('click', nextSlider);

        function prevSlider() {
            if (sliderTransfer == 0) {
                sliderTransfer = sliderFull;
            }
            sliderTransfer -= sliderSize;
            slider.style.marginLeft = '-' + sliderTransfer + 'px';
        }

        prevBtn.addEventListener('click', prevSlider);

        setInterval(nextSlider, 7000)

    },

    bannerSlider: function() {
        var bannerSize = document.querySelector('.trademark-slider-app').clientWidth;

        var banner = document.querySelector('.trademark-slider-full');

        var bannerPrev = document.querySelector('.banner-prev');

        var bannerNext = document.querySelector('.banner-next');

        var bannerFull = bannerSize * 4;

        bannerFull -= bannerSize;

        var bannerTransfer = 0

        function nextBanner() {
            if (bannerTransfer < bannerFull) {
                bannerTransfer += bannerSize;
            } else {
                bannerTransfer = 0;
            }

            banner.style.transform = 'translateX(' + '-' + bannerTransfer + 'px';

        }

        bannerNext.addEventListener('click', nextBanner);

        function prevBanner() {
            if (bannerTransfer == 0) {
                bannerTransfer = bannerFull;
            }

            bannerTransfer -= bannerSize;

            banner.style.transform = 'translateX(' + '-' + bannerTransfer + 'px';

        }

        bannerPrev.addEventListener('click', prevBanner);


        setInterval(nextBanner, 5000)
    },

    productFreeShip: function() {

        var freeShipFull = document.querySelector('.product-free-ship');

        var freeShipPrev = document.querySelector('.product-move-prev');

        var freeShipNext = document.querySelector('.product-move-next');

        freeShipNext.addEventListener('click', function() {
            freeShipFull.style.transform = 'translateX(-100%)';
            freeShipPrev.style.display = 'block';
            freeShipNext.style.display = 'none';
        });

        freeShipPrev.addEventListener('click', function() {
            freeShipFull.style.transform = 'translateX(0)';
            freeShipPrev.style.display = 'none';
            freeShipNext.style.display = 'block';
        });
    },

    productDiscount: function() {
        var discount = document.querySelector('.discount__product--full');

        var prevDiscount = document.querySelector('.discount__product--prev');

        var nextDiscount = document.querySelector('.discount__product--next');

        nextDiscount.addEventListener('click', function() {
            discount.style.transform = 'translateX(-100%)';
            prevDiscount.style.display = 'block';
            nextDiscount.style.display = 'none';
        })

        prevDiscount.addEventListener('click', function() {
            discount.style.transform = 'translateX(0)';
            prevDiscount.style.display = 'none';
            nextDiscount.style.display = 'block';
        })
    },

    trendSlider: function() {

        var shoppingSlider = document.querySelector('.shopping-container');

        var shoppingPrev = document.querySelector('.trend-prev');

        var shoppingNext = document.querySelector('.trend-next');

        shoppingNext.addEventListener('click', function() {
            shoppingSlider.style.transform = 'translateX(-100%)';
            shoppingNext.style.display = 'none';
            shoppingPrev.style.display = 'block';
        });

        shoppingPrev.addEventListener('click', function() {
            shoppingSlider.style.transform = 'translateX(-0%)';
            shoppingNext.style.display = 'block';
            shoppingPrev.style.display = 'none';
        })
    },

    tabIndex: function() {
        var boxTab = document.querySelectorAll('.sticky-list-tab');

        var productSuggestions = document.querySelectorAll('.product-suggestions-container');

        var result = boxTab.forEach(function(tab, index) {

            var pane = productSuggestions[index];


            tab.onclick = function() {


                document.querySelector('.sticky-list-tab.sticky-active').classList.remove('sticky-active');
                document.querySelector('.product-suggestions-container.block-active').classList.remove('block-active');

                this.classList.add('sticky-active')
                pane.classList.add('block-active')
            }
        })

        var createBtn = document.querySelector('.creat-btn');
        var createBtnClose = document.querySelector('.creat-btn-close');
        var suggestionsMain = document.querySelector('.suggestions-main-js')
        var suggestionsMainTwo = document.querySelector('.suggestions-main-js-two');
        var suggestionsMainThree = document.querySelector('.suggestions-main-js-three');
        var suggestionsMainDeal = document.querySelector('.suggestions-main-js-deal');
        var suggestionsMainCheap = document.querySelector('.suggestions-main-js-cheap');
        var suggestionsMainSale = document.querySelector('.suggestions-main-js-sale');
        var suggestionsMainNew = document.querySelector('.suggestions-main-js-new');
        var suggestionsMainTrend = document.querySelector('.suggestions-main-js-trend');

        createBtn.addEventListener('click', function() {
            suggestionsMain.style.display = 'flex';
            suggestionsMainTwo.style.display = 'flex';
            suggestionsMainThree.style.display = 'flex';
            suggestionsMainDeal.style.display = 'flex';
            suggestionsMainCheap.style.display = 'flex';
            suggestionsMainSale.style.display = 'flex';
            suggestionsMainNew.style.display = 'flex';
            suggestionsMainTrend.style.display = 'flex';
            createBtnClose.style.display = 'block';
            createBtn.style.display = 'none';
        })

        createBtnClose.addEventListener('click', function() {
            createBtn.style.display = 'block';
            createBtnClose.style.display = 'none';
            suggestionsMain.style.display = 'none';
            suggestionsMainTwo.style.display = 'none';
            suggestionsMainThree.style.display = 'none';
            suggestionsMainDeal.style.display = 'none';
            suggestionsMainCheap.style.display = 'none';
            suggestionsMainSale.style.display = 'none';
            suggestionsMainNew.style.display = 'none';
            suggestionsMainTrend.style.display = 'none';
        })
    },

    inputMonile: function() {


        var showInputMobile = document.querySelector('.mobile-input');


        var outPutMobile = document.querySelector('.history-mobile-hide');

        var seeMoreMobile = document.querySelector('.see-more-mobile-header');

        var compact = document.querySelector('.compact-mobile-header');

        var closeHistory = document.querySelectorAll('.close-mobile-search')[0];
        var closeHistoryTwo = document.querySelectorAll('.close-mobile-search')[1];
        var closeHistoryThree = document.querySelectorAll('.close-mobile-search')[2];

        var itemHistory = document.querySelectorAll('.history-mobile-item')[0];
        var itemHistoryTwo = document.querySelectorAll('.history-mobile-item')[1];
        var itemHistoryThree = document.querySelectorAll('.history-mobile-item')[2];

        var boxSearch = document.querySelector('.search-mobile')
        var closeBox = document.querySelector('.close-box-mobile-span');


        showInputMobile.addEventListener('click', function() {
            boxSearch.style.display = 'block';
        })

        closeBox.addEventListener('click', function() {
            boxSearch.style.display = 'none';
        })

        closeHistory.addEventListener('click', function() {

            itemHistory.style.display = 'none';
        })

        closeHistoryTwo.addEventListener('click', function() {
            itemHistoryTwo.style.display = 'none';
        })

        closeHistoryThree.addEventListener('click', function() {
            itemHistoryThree.style.display = 'none';
        })

        seeMoreMobile.addEventListener('click', function() {
            outPutMobile.classList.add('history-mobile-block')
            seeMoreMobile.style.display = 'none';
            compact.style.display = 'block';

        })

        compact.addEventListener('click', function() {
            outPutMobile.classList.remove('history-mobile-block')
            seeMoreMobile.style.display = 'block';
            compact.style.display = 'none';
        })


    },

    showMenu: function() {

        var boxListMenu = document.querySelector('.mobile__menu--box-list');

        var boxOverlay = document.querySelector('.overlay-mobile-menu');

        var barsMenu = document.querySelector('.menu-mobile-bars');

        var closeMenuMobile = document.querySelector('.avatar-close')

        barsMenu.addEventListener('click', function() {
            boxListMenu.style.transform = 'translateX(0)';
            boxOverlay.style.display = 'block';
        })

        closeMenuMobile.addEventListener('click', function() {
            boxListMenu.style.transform = 'translateX(-100%)';
            boxOverlay.style.display = 'none';
        })


    },

    showLoginMobile: function() {

        var openLoginMenu = document.querySelector('.menu-login');

        var fixedLogin = document.querySelector('.login-gmail');

        var backHomeMobile = document.querySelector('.back-home-mobile');

        var boxOverlay = document.querySelector('.overlay-mobile-menu');

        openLoginMenu.addEventListener('click', function(e) {
            e.preventDefault();
            fixedLogin.style.display = 'block';
        })

        backHomeMobile.addEventListener('click', function() {
            fixedLogin.style.display = 'none';
            boxOverlay.style.display = 'none';
        })

    },

    start: function() {
        this.showInput();
        this.showHistoryBtn();
        this.login();
        this.navigation();
        this.mainSlider();
        this.productFreeShip();
        this.bannerSlider();
        this.productDiscount();
        this.trendSlider();
        this.tabIndex();
        this.inputMonile();
        this.showMenu();
        this.showLoginMobile();
    }

};

container.start();