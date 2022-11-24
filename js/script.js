//burger-menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock')
    })
}

//swiper
const whyIsSlider = new Swiper('.whyis-slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,

        },
        660: {
            slidesPerView: 2,
        },
    }
});

const reviewSlider = new Swiper('.review-slider', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
    },
    // breakpoints: {
    //     992: {
    //         slidesPerView: 3,

    //     },
    //     660: {
    //         slidesPerView: 2,
    //     },
    // }
});

//animation
(function () {
    var squareWrapper = document.querySelector('.service-wrapper');
    var square = squareWrapper.querySelector('.square');
    square.classList.remove('square-transition');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                square.classList.add('square-transition');
                return;
            }

            square.classList.remove('square-transition');
        });
    });

    observer.observe(squareWrapper);
})();

//animation photo

const aboutItems = document.querySelectorAll(".about__item");

if (aboutItems.length > 0) {
    aboutItems.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            effect: 'slide',
        })
    })
}