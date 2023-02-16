var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 30,
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        335: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerView: 1.2,
        },
    }
});

// var swiper_who = new Swiper(".mySwiper_who", {});

var swiper_filled = new Swiper(".mySwiper_filled", {
    breakpoints: {
        770: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerView: 1.3,
        },
    },
});

var swiper_filled = new Swiper(".mySwiper_filled-2", {
    breakpoints: {
        1230: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        335: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerView: 1.3,
        },
    },
});



var swiper_filled = new Swiper(".yellow_mySwiper_filled", {
    breakpoints: {
        870: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 12,
            slidesPerView: 2.5,
        },
    },
});

var swiper_dropping = new Swiper(".mySwiper_dropping", {
    breakpoints: {
        770: {
            slidesPerView: 3,
            spaceBetween: 30,
            //   slidesPerView: 2.5,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerView: 1.3,
        },
    },
});

var swiper_dropping = new Swiper(".mySwiper_dropping-2", {
    breakpoints: {
        1230: {
            slidesPerView: 4,
            spaceBetween: 30,
            //   slidesPerView: 2.5,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 30,
            //   slidesPerView: 2.5,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
            //   slidesPerView: 2.5,
        },
        335: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerView: 1.3,
        },
    },
});

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

// New Code By Mohamed Waled

// Swiper
let swiper_dropfilled = new Swiper(".mySwiper_dropfilled", {
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// Menu Button

function menu() {
    let menuButton = document.querySelectorAll(".menubutton");
    let menubuttons = Array.from(menuButton);
    menubuttons.forEach((button) => {
        button.addEventListener("click", getButton);
    });

    function getButton() {
        if (!document.querySelector(this.dataset.click).classList.contains("active")) {
            document.querySelector(this.dataset.click).style.display = "flex";
            document.querySelector(this.dataset.click).classList.add("active");
        } else {
            document.querySelector(this.dataset.click).style.display = "none";
            document.querySelector(this.dataset.click).classList.remove("active");
        }
    }
}

menu();

$(document).ready(function() {

    $('.panel-collapse').on('show.bs.collapse', function() {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function() {
        $(this).siblings('.panel-heading').removeClass('active');
    });

});