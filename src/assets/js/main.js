import '/src/assets/js/utils/header.js'

let isMobile = {
    Android: function () {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function () {return navigator.userAgent.match(/IEMobile/i);},
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('mobile');

    let arrows = document.querySelectorAll('._icon-arrow');
    for (const arrow of arrows) {
        let subMenu = arrow.nextElementSibling;
        arrow.addEventListener('click', () => {
            subMenu.classList.toggle('_visible')
        })
    }

    let burger = document.querySelector('._icon-burger');
    let burgerMenu = document.querySelector('.menu-header__body');
    burger.addEventListener('click', () => {
        burger.classList.toggle('_icon-close')
        burgerMenu.classList.toggle('_active')
    })

} else {
    body.classList.add('desktop');
}