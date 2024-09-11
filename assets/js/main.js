// dark/light mode controls
(() => {
    'use strict';

    const bt = document.querySelector('.sec-navbar-menu__lst__item__bt-mode');
    const body = document.querySelector('body');

    bt.addEventListener('click', () => {
        if (!body.classList.contains('mode__dark')) {
            body.classList.remove('mode__light');
            body.classList.add('mode__dark');
        } else {
            body.classList.remove('mode__dark');
            body.classList.add('mode__light');
        }
    });
})();

// dinamic year/age
(() => {
    'use strict';

    let getDate = new Date();
    let getYear = getDate.getFullYear();
    
    document.querySelector('.sec-footer__cont__desc__year').innerHTML = getYear;

    document.querySelector('.sec-about__wrapper__cont__lst__item__age').innerHTML = getYear - 1997;
})();

// menu hamburger
(() => {
    'use strict';

    const bt = document.querySelector('.sec-navbar-menu__bt-hamburger');
    const menu = document.querySelector('.sec-navbar-menu__lst');

    bt.addEventListener('click', () => {
        if (!menu.classList.contains('is-actived')) {
            menu.classList.add('is-actived');
            bt.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menu.classList.remove('is-actived');
            bt.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
})();