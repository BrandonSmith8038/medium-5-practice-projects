console.log('Main.js Loaded');

//================
//Sticky Na
//================

//When the user scrolls the page, execute my function
window.onscroll = function() {
  myFunction();
};

//Get The Navebar
const navbar = document.querySelector('.nav');

//Get The offset position of the navbar
const sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position. Remove sticky when the leave scroll position.

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

//================
//Mobile Nav
//================

const navigation = document.getElementById('navigation');

const hamButton = document.querySelector('.toggle-nav');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
});
