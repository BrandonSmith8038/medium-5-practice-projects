//=======================
//Video Model
//=======================

const videoButton = document.querySelector('.play-icon');
const videoModal = document.querySelector('.video-modal');
const videoWrapper = document.querySelector('.video-wrapper');
const modal = document.querySelector('iframe');

if (videoButton) {
  videoButton.addEventListener('click', () => {
    videoModal.style.display = 'block';
  });
}

function clickOutside(e) {
  console.log(e.target);
  if (e.target == videoWrapper) {
    videoModal.style.display = 'none';
  }
}

//Listen for outside click
window.addEventListener('click', clickOutside);

//================
//Sticky Na
//================

//When the user scrolls the page, execute my function
window.onscroll = function() {
  myFunction();
};

//Get The Navebar
const navbar = document.querySelector('.navigation');

//Get The offset position of the navbar
const sticky = navbar.offsetTop + 500;

//Add the sticky class to the navbar when you reach its scroll position. Remove sticky when the leave scroll position.

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
