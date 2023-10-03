let interval;
let slideIndex = 1;
const plusSlides = (n) => {
  showSlides(slideIndex += n);
  setMotion();
};
const currentSlide = (n) => {
  showSlides(slideIndex = n);
};
const setMotion = () => {
  clearTimeout(interval);
  interval = setTimeout(function(){
  plusSlides(1);
},8000);
};
const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
};
showSlides(slideIndex);
setMotion();