var slideIndex = 0;
var slideIndex2 = 0;
var slideTimeout;
var slideTimeout2;

// Initial automatic slideshow for first carousel
autoSlide();

function plusSlides(n) {
  clearTimeout(slideTimeout);  // Clear previous timeout
  slideIndex += n;
  showSlides();
  slideTimeout = setTimeout(autoSlide, 4000); // Set a new timeout
}

function autoSlide() {
  slideIndex++;
  showSlides();
  slideTimeout = setTimeout(autoSlide, 4000); // Set a new timeout
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Initial automatic slideshow for second carousel
autoSlide2();

function plusSlides2(n) {
  clearTimeout(slideTimeout2);  // Clear previous timeout
  slideIndex2 += n;
  showSlides2();
  slideTimeout2 = setTimeout(autoSlide2, 4000); // Set a new timeout
}

function autoSlide2() {
  slideIndex2++;
  showSlides2();
  slideTimeout2 = setTimeout(autoSlide2, 4000); // Set a new timeout
}

function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  if (slideIndex2 < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active2";
}
