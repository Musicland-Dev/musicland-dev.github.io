const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}

menu.addEventListener('click', mobileMenu);


//  Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const what_we_doMenu = document.querySelector('#what-we-do-page');

    let scrollPos = window.scrollY;
    //use the below to find the sweet spot for the highlight
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items

    if(window.innerWidth > 960){    //If we are in desktop mode
        if(scrollPos < 600){    //If we are in the home section
            homeMenu.classList.add('highlight'); //add highlight
            aboutMenu.classList.remove('highlight'); //remove old highlight
        }else if(scrollPos < 1400){
            aboutMenu.classList.add('highlight'); //add highlight
            homeMenu.classList.remove('highlight');//remove old highlight
            what_we_doMenu.classList.remove('highlight'); //remove old highlight
        }else if(scrollPos < 2345){
            what_we_doMenu.classList.add('highlight'); //add highlight
            aboutMenu.classList.remove('highlight'); //remove old highlight
        }
        return
    }

    if( (elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

// Close Mobile Menu after Item Selection

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click',hideMobileMenu); //selecting a menu item will deactivate hamburger menu
navLogo.addEventListener('click',hideMobileMenu);   //Nav bar logo will deactivate hamburger menu