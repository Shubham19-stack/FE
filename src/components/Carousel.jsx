import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { title: 'Slide 1', content: 'https://assets-global.website-files.com/5f68a65d0932e3546d41cc61/5f9ab3bae1a8394cbec35e2f_1603974074133-image-slider%252C-product-carousel-best-shopify-apps.jpeg' },
    { title: 'Slide 2', content: 'https://assets-global.website-files.com/5f68a65d0932e3546d41cc61/5f9ab3bae1a8394cbec35e2f_1603974074133-image-slider%252C-product-carousel-best-shopify-apps.jpeg' },
    { title: 'Slide 3', content: 'https://assets-global.website-files.com/5f68a65d0932e3546d41cc61/5f9ab3bae1a8394cbec35e2f_1603974074133-image-slider%252C-product-carousel-best-shopify-apps.jpeg' }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="w-full h-64 flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
              <p className="text-center"><img src={slide.content} alt={slide.title} /></p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full flex justify-center mb-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-600 w-1/2 text-white py-2 px-4 rounded">Scroll Button</button>
      </div>
    </div>
  );
};

export default Carousel;
