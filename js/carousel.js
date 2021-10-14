// let slideIndex = 1;
// showSlides(slideIndex);


// // gestion de next prévious

// function plusSlides(n){
//     showSlides(slideIndex += n);
// }


// // controle de l'image

// function currentSlide(n) {
//     showSlides (slideIndex = n);
// }


// function showSlides(n) {
//     let i ;
//     let slides = document.getElementsByClassName("slide-box");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0;i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active","");
        
//     }
//     slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }




let slideIndex = 0;
showSlides();

function plusSlides(n){
    clearTimeout(timer)
    showSlides(slideIndex[n]);
}

function lessSlides(n){
   clearTimeout(timer)
    showSlides(slideIndex[n]);
}


function currentSlide(n) {
    clearTimeout(timer)
    showSlides(slideIndex = n-1);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-box");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  timer = setTimeout(showSlides,6000)
  console.log(slideIndex)
}








