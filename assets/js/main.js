const menuIcon = document.getElementsByClassName("header__menu-icon-container")[0];
const menuSlide = document.getElementsByClassName("menu-slide")[0];
const menuSlideCloseBtn = document.getElementsByClassName("menu-slide__close")[0];

menuIcon.onclick = function () {
  menuSlide.classList.remove("animation--slide-out");
  menuSlide.classList.add("animation--slide-in");
  menuSlide.style.visibility = "visible";
};
menuSlideCloseBtn.onclick = function () {
  menuSlide.classList.remove("animation--slide-in");
  menuSlide.classList.add("animation--slide-out");
  setTimeout(function () {
    menuSlide.style.visibility = "hidden";
  }, 480);
};
