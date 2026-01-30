import { useState, useEffect } from 'react';
import Button from './buttons';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images array
  const slides = [
    {
      image: '/src/assets/images/hero-img1.jpg', 
      title: 'Experience Luxury Redefined',
      subtitle: 'Discover unparalleled comfort in the heart of paradise',
    },
    {
      image: '/src/assets/images/hero-img2.jpg',
      title: 'Your Perfect Escape Awaits',
      subtitle: 'Indulge in world-class hospitality and breathtaking views',
    },
    {
      image: '/src/assets/images/hero-img3.jpg',
      title: 'Where Memories Are Made',
      subtitle: 'Create unforgettable moments in our luxurious retreat',
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    
    return () => clearInterval(timer);
  }, [slides.length]);

  // Manual navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out',
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1.5rem',
                  animation: index === currentSlide ? 'fadeIn 1s ease-out' : 'none',
                }}
              >
                {slide.title}
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  color: '#faf9f6',
                  marginBottom: '2rem',
                  animation: index === currentSlide ? 'fadeIn 1s ease-out 0.3s both' : 'none',
                }}
              >
                {slide.subtitle}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  animation: index === currentSlide ? 'fadeIn 1s ease-out 0.6s both' : 'none',
                }}
              >
                <Button variant="accent" size="lg">
                  Book Your Stay
                </Button>
                <Button variant="primary" size="lg">
                  Explore Rooms
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          padding: '0.75rem',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        aria-label="Previous slide"
      >
        <svg
          style={{ width: '1.5rem', height: '1.5rem' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          padding: '0.75rem',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        aria-label="Next slide"
      >
        <svg
          style={{ width: '1.5rem', height: '1.5rem' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              height: '0.75rem',
              width: index === currentSlide ? '2rem' : '0.75rem',
              backgroundColor: index === currentSlide ? '#d4a574' : 'rgba(255, 255, 255, 0.5)',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS Animations - add this as a style tag in your component or index.html */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;