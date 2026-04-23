import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import heroSlides from '../../constants/heroSlides';
import Button from '../ui/buttons';
import RoomChecker from '../ui/RoomChecker';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isHovered, setIsHovered] = useState(false);


  

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length, isHovered]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative mb-20">
      

      <div className="relative h-screen w-full overflow-hidden">
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        {/* ── heroSlides ── */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={clsx(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className='absolute inset-0 bg-cover bg-center '
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className='absolute inset-0 bg-black/40' />
            </div>
           

            <div className="relative h-full flex items-center justify-center text-center px-4 pb-24">
              <div className="max-w-4xl">
                <h1
                  className={clsx(
                    'text-fluid-heading font-bold text-white mb-6 tracking-tight leading-tight',
                    index === currentSlide ? 'fadeIn 1s ease-out' : 'none'
                  )}
                >
                  {slide.title}
                </h1>
                <p 
                className={clsx(
                  'text-fluid-parag text-white/90 mb-8',
                  index === currentSlide ? 'fadeIn 1s ease-out 0.3s both' : 'none'
                )}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={clsx(
                    'flex gap-4 justify-center flex-wrap',
                    index === currentSlide ? 'fadeIn 1s ease-out 0.6s both' : 'none'
                  )}
                >
                  <Link to="/Rooms" >
                    <Button variant="accent" size="lg">Book Your Stay</Button>
                  </Link>
                  <Link to="/Rooms" >
                    <Button variant="ghost" size="lg">Explore Rooms</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 bg-white/20 backdrop-blur-sm text-white p-3  rounded-full cursor-pointer z-10 -translate-y-1/2 transition-colors duration-300'
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          aria-label="Previous slide"
        >
          <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 bg-white/20 backdrop-blur-sm text-white p-3  rounded-full cursor-pointer z-10 -translate-y-1/2 transition-colors duration-300'
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          aria-label="Next slide"
        >
          <svg className='w-6 h-6 ' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          className='absolute bottom-20 left-1/2 flex gap-3 z-10 -translate-x-1/2'
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsx(
                'h-2 w-8 rounded-full cursor-pointer transition-all duration-300',
                index === currentSlide ? 'bg-accent scale-110' : 'bg-white/30 hover:bg-white/60'
              )}
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