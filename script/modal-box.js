// Get the modal
const modalBox = document.querySelector("#modal-box");

// Get the element that closes the modal
const close = document.querySelector(".close");

// Function to open the modal box
function openModal() {
  modalBox.style.display = "block";
}

// Function to check if the user has scrolled 80% of the page
function isScrolled80Percent() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrolledPercentage =
    (scrollPosition / (documentHeight - windowHeight)) * 100;
  return scrolledPercentage >= 80;
}

// When the user scrolls 80% of the page open the modal box
window.addEventListener("scroll", function () {
  if (isScrolled80Percent()) {
    openModal();
  }
});

// When the user clicks, close the modal
close.onclick = function () {
  modalBox.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modalBox) {
    modalBox.style.display = "none";
  }
};
