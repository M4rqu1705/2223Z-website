/*-------------------Image Slider hallery.html -------------------------*/
var slideIndex = 1;
var c = 1;
showDivs(slideIndex);

function plusDivs(n = 1) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("imagePreview");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  if(c){setTimeout(plusDivs, 5000);c+=1;}
}
/*-----------------Dropdown menu index.html ----------------------------*/
function clickableDropdown() {
    var x = document.getElementById("navDropdown");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}