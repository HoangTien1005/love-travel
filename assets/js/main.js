const menuIconSlide = document.getElementsByClassName("menu-pc-slide")[0];
const menuIconMobile = document.getElementsByClassName("menu-mobile-nav")[0];
const menuSlide = document.getElementsByClassName("menu-slide")[0];
const menuSlideCloseBtn = document.getElementsByClassName("menu-slide__close")[0];
const mobileNavContainer = document.getElementsByClassName("nav-container")[0];
const mobileNavCloseBtn = document.getElementsByClassName("mobile-nav__close")[0];
const nav = document.getElementsByClassName('nav')[0];
 

menuIconSlide.onclick = function () {
  menuSlide.classList.remove("animation--slide-out"); 
  menuSlide.classList.add("animation--slide-in");
  menuSlide.classList.add('visible');
  menuSlide.classList.remove('not-visible');
};

menuIconMobile.onclick = function () {
  mobileNavContainer.classList.remove("animation--slide-out");
  mobileNavContainer.classList.add("animation--slide-in");
  mobileNavContainer.classList.add('visible');
  mobileNavContainer.classList.remove('not-visible');

};

menuSlideCloseBtn.onclick = function () {
  menuSlide.classList.remove("animation--slide-in");
  menuSlide.classList.add("animation--slide-out");
  setTimeout(function () {
  menuSlide.classList.add('not-visible');  
  menuSlide.classList.remove('visible');

    
  }, 480);
};


mobileNavCloseBtn.onclick = function () {
  mobileNavContainer.classList.remove("animation--slide-in");
  mobileNavContainer.classList.add("animation--slide-out");
  setTimeout(function () {
  mobileNavContainer.classList.remove('visible');
  mobileNavContainer.classList.add('not-visible');  
  }, 480);
};

window.addEventListener('resize', function(event) {
  if(mobileNavContainer.classList.contains('not-visible')) {
    mobileNavContainer.classList.remove('not-visible');
  }
}, true);
