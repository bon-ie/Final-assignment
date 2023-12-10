// 1. Get the modal
const modalBox = document.querySelector("#modal-box");

// 2. Get the element that closes the modal
const close = document.querySelector(".close");

// 3. Variable to track whether the modal has been opened (so the modal doesn't open continuously)
let modalOpened = false;

// 4. Open the modal box
function openModal() {
  if (!modalOpened) {
    modalBox.style.display = "block";
    modalOpened = true;
  }
}

// 5. Function to check if the user has scrolled 90% of the page
function isScrolled90Percent() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrolledPercentage =
    (scrollPosition / (documentHeight - windowHeight)) * 100;
  return scrolledPercentage >= 90;
}

// 6. When the user scrolls 90% of the page open the modal box
window.addEventListener("scroll", function () {
  if (isScrolled90Percent()) {
    openModal();
  }
});

// 7. When the user clicks, close the modal
close.onclick = function () {
  modalBox.style.display = "none";
};

// 8. When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modalBox) {
    modalBox.style.display = "none";
  }
};
