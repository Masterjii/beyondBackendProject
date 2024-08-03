var swiperLarge, swiperSmall, swiper = new Swiper("#section1 .mySwiper", {
    effect: "cards",
    grabCursor: !0,
    pagination: {
        el: ".swiper-pagination"
    }
});
const preloader = document.querySelector(".preloader"),
    body = document.querySelector("body");
setTimeout(() => {
    preloader.style.opacity = "0", body.style.overflowY = "auto"
}, 1e3), setTimeout(() => {
    preloader.style.display = "none"
}, 2e3);
let x = 0,
    y = 0;
const connect = document.querySelector(".contactButton"),
    whatsapp = document.querySelector(".whatsapp"),
    telephone = document.querySelector(".telephoneIcon"),
    hamMenu = document.querySelector(".hamMenu"),
    hamIcon = document.querySelector(".hamIcon");
window.matchMedia("(min-width: 769px)").matches && connect.addEventListener("click", () => {
    switch (x) {
        case 0:
            telephone.style.bottom = "5vh", whatsapp.style.bottom = "5vh", telephone.style.right = "8vw", whatsapp.style.right = "13vw", x = 1;
            break;
        case 1:
            telephone.style.bottom = "-15vh", whatsapp.style.bottom = "-15vh", telephone.style.right = "-12vw", whatsapp.style.right = "-12vw", x = 0
    }
}), window.matchMedia("(max-width: 768px)").matches && (hamIcon.addEventListener("click", () => {
    switch (y) {
        case 0:
            hamMenu.style.opacity = "1", hamMenu.style.pointerEvents = "all", y = 1;
            break;
        case 1:
            hamMenu.style.opacity = "0", hamMenu.style.pointerEvents = "none", y = 0
    }
}), connect.addEventListener("click", () => {
    switch (x) {
        case 0:
            telephone.style.bottom = "3vh", whatsapp.style.bottom = "3vh", telephone.style.right = "20vw", whatsapp.style.right = "33vw", x = 1;
            break;
        case 1:
            telephone.style.bottom = "-15vh", whatsapp.style.bottom = "-15vh", telephone.style.right = "-12vw", whatsapp.style.right = "-12vw", x = 0
    }
})), whatsapp.addEventListener("click", () => {
    window.matchMedia("(min-width: 769px)").matches && (location.href = "https://web.whatsapp.com/send?phone=919458907628&text=Hi%20i%20need%20a%20free%20demo%20class."), window.matchMedia("(max-width: 768px)").matches && (location.href = "https://wa.me/message/GA6OYJ54LREHN1")
});
let dd1 = document.querySelector(".drop1"),
    dd2 = document.querySelector(".drop2"),
    dd3 = document.querySelector(".drop3"),
    dd4 = document.querySelector(".drop4"),
    dd5 = document.querySelector(".drop5"),
    ans1 = document.querySelector(".answer1"),
    ans2 = document.querySelector(".answer2"),
    ans3 = document.querySelector(".answer3"),
    ans4 = document.querySelector(".answer4"),
    ans5 = document.querySelector(".answer5"),
    a1 = 0,
    a2 = 0,
    a3 = 0,
    a4 = 0,
    a5 = 0;

function labnolIframe(e) {
    var t = document.createElement("iframe");
    t.setAttribute("src", "https://www.youtube.com/embed/" + e.dataset.id + "?autoplay=1&rel=0"), t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "1"), t.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), e.parentNode.replaceChild(t, e)
}

function initYouTubeVideos() {
    for (var e = document.getElementsByClassName("youtube-player"), t = 0; t < e.length; t++) {
        var a = e[t].dataset.id,
            s = document.createElement("div");
        s.setAttribute("data-id", a);
        var n = document.createElement("img");
        n.src = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", a), s.appendChild(n);
        var r = document.createElement("div");
        r.setAttribute("class", "play"), s.appendChild(r), s.onclick = function() {
            labnolIframe(this)
        }, e[t].appendChild(s)
    }
}
dd1.addEventListener("click", () => {
    switch (a1) {
        case 0:
            ans1.style.display = "block", a1 = 1;
            break;
        case 1:
            ans1.style.display = "none", a1 = 0
    }
}), dd2.addEventListener("click", () => {
    switch (a2) {
        case 0:
            ans2.style.display = "block", a2 = 1;
            break;
        case 1:
            ans2.style.display = "none", a2 = 0
    }
}), dd4.addEventListener("click", () => {
    switch (a4) {
        case 0:
            ans4.style.display = "block", a4 = 1;
            break;
        case 1:
            ans4.style.display = "none", a4 = 0
    }
}), dd3.addEventListener("click", () => {
    switch (a3) {
        case 0:
            ans3.style.display = "block", a3 = 1;
            break;
        case 1:
            ans3.style.display = "none", a3 = 0
    }
}), dd5.addEventListener("click", () => {
    switch (a5) {
        case 0:
            ans5.style.display = "block", a5 = 1;
            break;
        case 1:
            ans5.style.display = "none", a5 = 0
    }
}), window.matchMedia("(min-width: 1000px)").matches ? swiperLarge = new Swiper(".section3a .mySwiper", {
    effect: "coverflow",
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
    },
    pagination: {
        el: ".section3a .swiper-pagination",
        clickable: !0
    },
    spaceBetween: 30,
    loop: !0,
    keyboardControl: !0,
    navigation: {
        nextEl: ".section3a .swiper-button-next",
        prevEl: ".section3a .swiper-button-prev"
    }
}) : window.matchMedia("(max-width: 1000px)").matches && (swiperSmall = new Swiper(".section3a .mySwiper", {
    slidesPerView: "auto",
    centeredSlides: !0,
    spaceBetween: 10,
    pagination: {
        el: ".section3a .swiper-pagination",
        clickable: !0
    },
    spaceBetween: 30,
    loop: !0,
    keyboardControl: !0,
    navigation: {
        nextEl: ".section3a .swiper-button-next",
        prevEl: ".section3a .swiper-button-prev"
    }
})), document.addEventListener("DOMContentLoaded", function() {
    for (var e = document.querySelectorAll('a[href^="#"]'), t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
        e.preventDefault();
        var t = this.getAttribute("href").substring(1),
            a = document.getElementById(t);
        a && a.scrollIntoView({
            behavior: "smooth"
        })
    })
}), document.addEventListener("DOMContentLoaded", initYouTubeVideos);