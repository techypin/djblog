var dropdown = document.getElementsByClassName("sub");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].onclick = function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  };
}

var elem = document.documentElement;
var f_button = document.getElementById("fullscreen");
function openFullscreen() {
	f_button.removeAttribute("onclick", "openFullscreen();");
	f_button.setAttribute("onclick", "closeFullscreen();");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
	f_button.removeAttribute("onclick", "closeFullscreen();");
	f_button.setAttribute("onclick", "openFullscreen();");
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
const menuBtn = document.querySelector('.top-menu');
const col_1 = document.querySelector('.col1');
const col_2 = document.querySelector('.col2');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    col_1.style.width = "0";
    document.querySelector(".logo").style.marginLeft = "45px";
    document.querySelector(".top-menu").style.marginLeft = "105px";
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".nav-footer").style.display = "none";
    // col_1.style.display = "none";
    col_2.style.transition = "all .5s ease-in-out";
    col_2.style.marginLeft = "0";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    col_1.style.width = "230px";
    document.querySelector(".logo").style.marginLeft = "0px";
    document.querySelector(".top-menu").style.marginLeft = "10px";
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".nav-footer").style.display = "flex";
    // col_1.style.display = "block";
    col_2.style.marginLeft = "230px";
    menuOpen = false;
  }
});