const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.classList.add('hover');
  });

  image.addEventListener('mouseout', () => {
    image.classList.remove('hover');
  });
});