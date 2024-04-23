const text = "Experience the rejuvenating power of Japan hot springs with our exclusive tour package. Immerse yourself in the ancient tradition of Onsen and discover the ultimate relaxation amidst stunning natural landscapes. Embark on a journey to Japan famous hot springs and let the soothing waters melt away your stress. Indulge in the therapeutic benefits of these mineral-rich pools, known to promote physical and mental well-being. Feel the healing powers of the hot springs as you soak in the serene surroundings. Let your worries fade away as you relax in the steaming waters, surrounded by lush greenery, snow-capped mountains, or by the calming sound of ocean waves. Unwind in traditional Japanese ryokan"
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

let vis = document.querySelector(".vis");
let but = document.querySelector(".but");

but.addEventListener("click", (e) => {
    vis.classList.toggle("show") }  );

vis.addEventListener("click", (e) => {
    
           vis.classList.remove("show")
});