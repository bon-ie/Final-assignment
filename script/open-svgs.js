// 1. Get the SVG icons
const facebookIcon = document.querySelector("#facebook-icon");
const instagramIcon = document.querySelector("#instagram-icon");
const pinterestIconIcon = document.querySelector("#pinterest-icon");

// 2. Open Facebook icon
function openFacebook() {
//   console.log("Facebook icon clicked");
  window.open("https://www.facebook.com");
}

// 3. Open Instagram icon
function openInstagram() {
//   console.log("Instagram icon clicked");
  window.open("https://www.instagram.com");
  
}
// 4. Open Pintestet icon
function openPinterest() {
//   console.log("Pinterest icon clicked");
  window.open("https://www.pinterest.com");
}

// 5. Add click event listeners to the SVG icons
facebookIcon.addEventListener("click", openFacebook);
instagramIcon.addEventListener("click", openInstagram);
pinterestIconIcon.addEventListener("click", openPinterest);
