//side menu
function mobileNavbarIcon() {
  document.getElementById("js-hamburger-icon").classList.toggle("hamburger-icon--collapse");
  document.getElementById("js-side-menu").classList.toggle("o-side-menu--visible");
  document.getElementById("js-body").classList.toggle("body-fix");
}

// dropdown button
function sideMenuDropdownButton() {
  document.getElementById("js-mobile-dropdown").classList.toggle("o-side-menu__dropdown-menu--visible");
  document.getElementById("js-show").classList.toggle("o-side-menu__plus--hide");
  document.getElementById("js-hide").classList.toggle("o-side-menu__subs--view");
}