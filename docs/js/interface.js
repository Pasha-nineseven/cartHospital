


let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.addEventListener('load', () => {
    //AnCHOR
    const linksAnchor = document.querySelectorAll('.js-scroll');
    for (const link of linksAnchor) {
        link.onclick = function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiperOur = new Swiper(".our__slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //Modal
    document.getElementById("p-success-trigger").addEventListener("click", (e) => {
        e.preventDefault();
        Fancybox.show([{ src: "#p-success", type: "inline" }]);
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
        containerClass: "dfdf",
        onlyCountries: ["ru", "by", "cn", "gb"],
    });
});