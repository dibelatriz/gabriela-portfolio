var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else {
        ul.classList.add('open');
    }
}

// Menu sidebar with animation
function myFunction(x) {
    x.classList.toggle("change");
  }