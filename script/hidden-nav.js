// declare variables
const menuIcon = document.querySelector(".menu-icon");
const hiddenMenu = document.querySelector(".hidden-menu");
const menuClose = document.querySelector("#menu-close");

// 1. Add event listener to menu icon
menuIcon.addEventListener("click", function () {
  // 2. Add a class to the menu (.menu-open)
  document.querySelector(".hidden-menu").classList.toggle("menu-open");
});

// 3. look for the click on '#close-menu'
menuClose.addEventListener("click", function () {
  // 4. Remove .menu-open class
  document.querySelector(".hidden-menu").classList.remove("menu-open");
});

// 5. Close the menu anywhere on the page
hiddenMenu.addEventListener("click", function (event) {
  if (event.target === hiddenMenu) {
    hiddenMenu.classList.toggle("menu-open");
  }
});
