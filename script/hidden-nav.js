// 1. declare variables
const menuIcon = document.querySelector(".menu-icon");
const hiddenMenu = document.querySelector(".hidden-menu");
const menuClose = document.querySelector("#menu-close");

// 2. Add event listener to menu icon
menuIcon.addEventListener("click", function () {
  // 2.1 Add a class to the menu (.menu-open)
  document.querySelector(".hidden-menu").classList.toggle("menu-open");
});

// 3. look for the click on '#close-menu'
menuClose.addEventListener("click", function () {
  // 3.1 Remove .menu-open class
  document.querySelector(".hidden-menu").classList.remove("menu-open");
});

// 4. Close the menu anywhere on the page
hiddenMenu.addEventListener("click", function (event) {
  if (event.target === hiddenMenu) {
    hiddenMenu.classList.toggle("menu-open");
  }
});