import { useState, useEffect } from 'react';
import Button from '../ui/buttons';
import RoomChecker from '../ui/RoomChecker';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hero-img1.jpg',
      title: 'Experience Luxury Redefined',
      subtitle: 'Discover unparalleled comfort in the heart of paradise',
    },
    {
      image: '/images/hero-img2.jpg',
      title: 'Your Perfect Escape Awaits',
      subtitle: 'Indulge in world-class hospitality and breathtaking views',
    },
    {
      image: '/images/hero-img3.jpg',
      title: 'Where Memories Are Made',
      subtitle: 'Create unforgettable moments in our luxurious retreat',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative mb-20">

      <div className="relative h-screen w-full overflow-hidden">

        {/* ── Slides ── */}
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
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }} />
            </div>

            <div className="relative h-full flex items-center justify-center text-center px-4 pb-24">
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
                  <Button variant="accent" size="lg">Book Your Stay</Button>
                  <Button variant="primary" size="lg">Explore Rooms</Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute', left: '1rem', top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            color: 'white', padding: '0.75rem',
            borderRadius: '9999px', border: 'none',
            cursor: 'pointer', transition: 'background-color 0.3s', zIndex: 10,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          aria-label="Previous slide"
        >
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute', right: '1rem', top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            color: 'white', padding: '0.75rem',
            borderRadius: '9999px', border: 'none',
            cursor: 'pointer', transition: 'background-color 0.3s', zIndex: 10,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          aria-label="Next slide"
        >
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: '5rem',
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
                backgroundColor: index === currentSlide ? '#d4a574' : 'rgba(255,255,255,0.5)',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { if (index !== currentSlide) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.75)'; }}
              onMouseLeave={(e) => { if (index !== currentSlide) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)'; }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/*Room-checker inputs*/}
      <div className="absolute left-1/2 bottom-0 z-20 w-full max-w-6xl px-4 transform -translate-x-1/2 translate-y-1/2">
        <RoomChecker />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
};

export default Hero;