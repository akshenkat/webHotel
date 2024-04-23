const text = "How to find us" 

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