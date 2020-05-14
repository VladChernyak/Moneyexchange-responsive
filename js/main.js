class PopUp {
    constructor() {
        this.authPopUp = document.body.querySelector('.pop-up__authorization');
        this.regPopUp = document.body.querySelector('.pop-up__registration');
    }

    showPopUp(elem) {
        elem.classList.remove('hidden');
    }

    hidePopUp(elem) {
        elem.classList.add('hidden');
    }
}

class Page {
    constructor() {
        this.body = document.body.querySelector('.page-wrapper');
    }

    blurScreen() {
        this.body.classList.toggle('blur');
    }
}

class Header {
    constructor() {
        this.body = document.querySelector('.header');
        this.burger = this.body.querySelector('.header__menu-burger');
        this.authorizationButton = this.body.querySelector('.enter-btn');
        this.registrationButton = this.body.querySelector('.registration-btn');
    }

    showMenu() {
        this.body.classList.toggle('opened');
    }
}

const page = new Page();
const header = new Header();
const popUp = new PopUp();


header.burger.addEventListener('click', function() {
    header.showMenu();
});

header.authorizationButton.addEventListener('click', function() {
    popUp.showPopUp(popUp.authPopUp);
    page.blurScreen();
    document.body.classList.add('overflow-hidden');
})

header.registrationButton.addEventListener('click', function() {
    popUp.showPopUp(popUp.regPopUp);
    page.blurScreen();
    document.body.classList.add('overflow-hidden');
})

document.querySelector('.exchange-banner__button').addEventListener('click', function() {
    let target = document.body.querySelector('.calculator');

    target.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
})

for (key in popUp) {
    if(!popUp.hasOwnProperty(key)) continue;

    popUp[key].addEventListener('click', function(event) {
        if(event.target.classList.contains('pop-up__form')
        || event.target.closest('.pop-up__form')) return;
    
        popUp.hidePopUp(event.target);
        page.blurScreen();
        document.body.classList.remove('overflow-hidden');
        
    })
}