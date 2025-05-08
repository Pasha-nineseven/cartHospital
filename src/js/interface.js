


let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.addEventListener('load', () => {
    //menu-mobile
    const menuBtn = document.querySelector('.menu-btn'),
          menuMobile= document.querySelector('.menu-mobile');

    menuBtn.onclick = function() {
        menuBtn.classList.toggle('active');
        menuMobile.classList.toggle('active');
    }

    //AnCHOR
    const linksAnchor = document.querySelectorAll('.js-scroll');
    for (const link of linksAnchor) {
        link.onclick = function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'center' });

            menuBtn.classList.remove('active');
            menuMobile.classList.remove('active');
        }
    };


    //GoTop-button
    const goTopButton = document.querySelector('[data-action="gotop"]');
    const windowViewPortHeight = window.innerHeight; // browser viewport height
    let isRequestingAnimationFrame = false;

    if (!goTopButton) {
        return;
    }

    goTopButton.addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });
    window.addEventListener('scroll', function() {
        if (!isRequestingAnimationFrame) {
            requestAnimationFrame(filterGoTopButtonVisibility);
            isRequestingAnimationFrame = true;
        }
    });
    function filterGoTopButtonVisibility(timestamp) {
        let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
            goTopButton.classList.add('show');
            isRequestingAnimationFrame = false;
        } else {
            goTopButton.classList.remove('show');
            requestAnimationFrame(filterGoTopButtonVisibility);
        }
    }

    const swiperHistory = new Swiper(".history__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
    const swiperOur = new Swiper(".our__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });


    //Modal
    Fancybox.bind('[data-fancybox]', {
        // Custom options
    });    
    // close
    const closeItems = document.getElementsByClassName('p-close-btn');
    for (let i = 0; i < closeItems.length; i++) {
        closeItems[i].addEventListener('click', function () {
            Fancybox.close();
        });
    };


    // country-phone-placeholder
    const input = document.querySelector("#country-phone");
    window.intlTelInput(input, {
        autoPlaceholder: "off",
        initialCountry:"ru",
        separateDialCode:true,
        nationalMode: false,
        preventInvalidDialCodes: true,
        preferredCountries:false,
        onlyCountries: ["at","az","am","by","bg","gb","hu","de","gr","ge","il","in","es","it","kz","cy","kg","cn","lv","lt","my","mx","md","ae","pl","ru","ro","us","tj","th","tm","tr","uz","ua","fi","fr","cz","ch","ee","kr","jp"],
    });

    const inputPopup = document.querySelector("#country-phone-popup");
    window.intlTelInput(inputPopup, {
        autoPlaceholder: "off",
        initialCountry:"ru",
        separateDialCode:true,
        nationalMode: false,
        preventInvalidDialCodes: true,
        preferredCountries:false,
        onlyCountries: ["at","az","am","by","bg","gb","hu","de","gr","ge","il","in","es","it","kz","cy","kg","cn","lv","lt","my","mx","md","ae","pl","ru","ro","us","tj","th","tm","tr","uz","ua","fi","fr","cz","ch","ee","kr","jp"],
    });
});



