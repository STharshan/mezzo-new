import React from 'react';

const AutoScrollCarousel = () => {
  // Array of images and their descriptions
  const images = [
    { src: '/kul.jpeg', alt: 'Dish 1' },
    { src: '/olives.jpg', alt: 'Dish 2' },
    { src: '/rockey.jpeg', alt: 'Dish 3' },
    { src: '/salad.jpg', alt: 'Dish 4' },
    { src: '/samocha.jpeg', alt: 'Dish 5' },
    { src: '/jalapones.jpg', alt: 'Dish 6' },
    { src: '/potato.jpg', alt: 'Dish 7' },
    { src: '/Paan.jpg', alt: 'Dish 8' },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden mt-15">
        <div className="flex space-x-8 animate-scroll">
          {images.map((image, index) => (
            <div key={index} className="w-80 h-80 rounded-md mb-5 flex-shrink-0 shadow-lg p-5">
              <img
                src={image.src}
                alt={image.alt}
                className="w-80 h-70 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">❮</button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">❯</button>
    </div>
  );
};

export default AutoScrollCarousel;
