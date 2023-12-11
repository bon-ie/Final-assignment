// 1. Get the SVG icons
const facebookIcon = document.querySelector("#facebook-icon");
const instagramIcon = document.querySelector("#instagram-icon");
const pinterestIcon = document.querySelector("#pinterest-icon");
const facebookIconBody = document.querySelector("#facebook-icon-body");
const instagramIconBody = document.querySelector("#instagram-icon-body");
const pinterestIconBody = document.querySelector("#pinterest-icon-body");


// 2. Open Facebook icon
function openFacebook() {
  // console.log("Facebook icon clicked");
  window.open("https://www.facebook.com");
}

// 3. Open Instagram icon
function openInstagram() {
  // console.log("Instagram icon clicked");
  window.open("https://www.instagram.com");
  
}
// 4. Open Pintestet icon
function openPinterest() {
  // console.log("Pinterest icon clicked");
  window.open("https://www.pinterest.com");
}

// 5. Add click event listeners to the SVG icons
facebookIcon.addEventListener("click", openFacebook);
instagramIcon.addEventListener("click", openInstagram);
pinterestIcon.addEventListener("click", openPinterest);
facebookIconBody.addEventListener("click", openFacebook);
instagramIconBody.addEventListener("click", openInstagram);
pinterestIconBody.addEventListener("click", openPinterest);
