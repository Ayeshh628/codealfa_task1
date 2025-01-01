const images = [
   "pic/Audi car_0144_812508.jpg",
   "pic/bugatti chiron.jpeg",
  "pic/bugatti chiron.jpeg",
  'pic/ninja H2R.jpg',
  'pic/bmw_s1000rr.jpg',
  'pic/jaguar car.jpg',
  'pic/land cruiser.jpg',
  'pic/Mercedes G-Class facelift 2024-15.webp'
];

 CurrentIndex = 0;

// Change the main image based on the thumbnail clicked
function changeMainImage(index) {
  currentIndex = index;
  const mainImage = document.getElementById('main-image');
  mainImage.src = images[currentIndex];
}

// Navigate through images (previous/next)
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Loop back to the last image
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // Loop back to the first image
  }
  const mainImage = document.getElementById('main-image');
  mainImage.src = images[currentIndex];
}
