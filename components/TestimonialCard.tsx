import Image from 'next/image';
import { memo } from 'react';

interface TestimonialCardProps {
  user: string;
  message: string;
  photo: string;
  index: number;
}

const TestimonialCard = memo(({ user, message, photo, index }: TestimonialCardProps) => {
  return (
    <div 
      role="article" 
      aria-label={`Testimonial from ${user}`}
      className="bg-highlight-green/40 rounded-2xl shadow-md p-4 px-8 py-8 flex flex-col gap-4 w-full h-[50%] min-h-[400px]"
    >
      {/* User Photo - Circular, 60px diameter */}
      <div className="flex justify-start">
        <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-[0.5] border-dark-brown/30">
          <Image
            src={photo}
            alt={user}
            fill
            className="object-cover"
            sizes="60px"
            loading="lazy"
          />
        </div>
      </div>

      {/* Testimonial Message with line clamping */}
      <p className="text-gray-800 text-sm md:text-base font-normal leading-relaxed flex-grow pt-6">
        {message}
      </p>

      {/* User Name and Role */}
      <p className="text-gray-700 text-sm/tight md:text-base/tight line-clamp-1 font-semibold mt-auto">
        {user}
      </p>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
