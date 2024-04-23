const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 2000);


let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");

logo.addEventListener("click", (e) => {
    menu.classList.toggle("show") }  );

menu.addEventListener("click", (e) => {
    
            menu.classList.remove("show")
});

const text = "Nonbiri onsen is best onsen in Hakone" 

const textContainer = document.querySelector(".text");
let index = 0;

function type() {
  textContainer.textContent += text[index];
  index++;

  if (index === text.length) {
    clearTimeout(timer);
  } else {
    const timer = setTimeout(type, 200);
  }
}

type();

