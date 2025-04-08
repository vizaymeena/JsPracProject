const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100;  // Moves by 100% of the width per slide
    slider.style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(moveToNextSlide, 1000);

// Optional: Add manual control to stop on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});
sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(moveToNextSlide, 3000);
});



// Dynamic puppies selling
// Array of dog listings with their info and image URLs
const dogListings = [
    {
      title: "Golden Retriever Puppy",
      description: "This adorable Golden Retriever is playful and loving. Ready for a new home!",
      imageUrl: "https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_1280.jpg",
    },
    {
      title: "Labrador Puppy",
      description: "Friendly and energetic, this Labrador will be the perfect companion for your family!",
      imageUrl: "https://image.petmd.com/files/styles/978x550/public/2024-11/labrador-retriever.jpg",
    },
    {
      title: "Bulldog Puppy",
      description: "This Bulldog is sweet, calm, and loves to cuddle. A great addition to your family!",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewxrOhGw4Q0TDWD68548o6PCt9XlpPiJGLA&s",
    }
  ];
  
  // Function to create a card element
  document.addEventListener("DOMContentLoaded", function() {
  function createCard(dog) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    // Create image element
    const img = document.createElement('img');
    img.classList.add('card-image');
    img.src = dog.imageUrl;
    img.alt = dog.title;
  
    // Create title
    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = dog.title;
  
    // Create description
    const description = document.createElement('p');
    description.classList.add('card-description');
    description.textContent = dog.description;
  
    // Create purchase button
    const button = document.createElement('button');
    button.classList.add('purchase-btn');
    button.textContent = 'Buy Now';
  
    // Append all elements to card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);
  
    return card;
  }
  
  // Get the container to place the cards
  const container = document.getElementById('cards-container');
  
  // Loop through the dog listings and create a card for each
  dogListings.forEach(dog => {
    const card = createCard(dog);
    container.appendChild(card);
  })
});
  