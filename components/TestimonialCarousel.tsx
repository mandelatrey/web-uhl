'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  user: string;
  message: string;
  photo: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialCarousel = ({ testimonials, className = '' }: TestimonialCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate number of visible cards based on viewport
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 3; // Desktop
    if (width >= 768) return 2; // Tablet
    return 1; // Mobile
  };

  // Navigation handlers
  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / testimonials.length;
    const gap = 16; // gap-4 = 16px
    const scrollDistance = cardWidth + gap;
    
    container.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
    
    setActiveIndex(prev => Math.min(prev + 1, testimonials.length - 1));
  };

  const handlePrevious = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / testimonials.length;
    const gap = 16; // gap-4 = 16px
    const scrollDistance = cardWidth + gap;
    
    container.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth'
    });
    
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  // Calculate if navigation buttons should be disabled
  const visibleCards = getVisibleCards();
  const lastVisibleIndex = testimonials.length - visibleCards;
  const canGoPrevious = activeIndex > 0;
  const canGoNext = activeIndex < lastVisibleIndex;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (canGoPrevious) {
          handlePrevious();
        }
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (canGoNext) {
          handleNext();
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      // Make container focusable for keyboard events
      container.setAttribute('tabindex', '0');
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [canGoPrevious, canGoNext, activeIndex]);

  // Empty state handling
  if (testimonials.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-500 text-lg">No testimonials available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        role="region"
        aria-label="Community testimonials carousel"
        className="flex overflow-x-scroll gap-4 md:gap-6 scroll-smooth"
        style={{
          scrollSnapType: 'x mandatory',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.user}-${index}`}
            className="flex-shrink-0 w-[200px] md:w-[280px] lg:w-[300px]"
            style={{
              scrollSnapAlign: 'start',
            }}
          >
            <TestimonialCard
              user={testimonial.user}
              message={testimonial.message}
              photo={testimonial.photo}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          aria-label="Previous testimonial"
          aria-disabled={!canGoPrevious}
          className={`
            w-12 h-12 rounded-full border-2 border-fruit-green/30
            flex items-center justify-center
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fruit-green focus-visible:ring-offset-2
            ${canGoPrevious 
              ? 'hover:scale-110 hover:bg-gray-100/55 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'
            }
          `}
        >
          <ChevronLeft className="w-6 h-6 text-fruit-green" />
        </button>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          aria-label="Next testimonial"
          aria-disabled={!canGoNext}
          className={`
            w-12 h-12 rounded-full border-2 border-fruit-green/30
            flex items-center justify-center
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            ${canGoNext 
              ? 'hover:scale-110 hover:bg-gray-100/55 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'
            }
          `}
        >
          <ChevronRight className="w-6 h-6 text-fruit-green" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
