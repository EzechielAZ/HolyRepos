import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef();
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Distribution de fournitures scolaires aux enfants défavorisés"
    },
    {
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Installation d'un puits d'eau potable dans le village de Tori"
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Formation informatique pour les jeunes déscolarisés"
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Sensibilisation à l'hygiène dans les écoles primaires"
    }
  ];

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <img src={slide.image} alt={slide.caption} className="carousel-image" />
            <div className="carousel-caption">
              <p>{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="carousel-control prev" onClick={prevSlide} aria-label="Précédent">
        <span className="material-icons">chevron_left</span>
      </button>
      
      <button className="carousel-control next" onClick={nextSlide} aria-label="Suivant">
        <span className="material-icons">chevron_right</span>
      </button>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Diapositive ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

