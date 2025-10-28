'use client';

import Image from 'next/image';
import FadeContent from './FadeContent'
import { useEffect, useState } from 'react';

interface BackImageProps {
    images: string[];
    interval?: number;
    credit?: string;
    className?: string;
}

const HeroImage = ({ images, interval, credit, className }: BackImageProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(handle);

    }, [images.length, interval]);

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='w-screen h-screen relative'>
            {images.map((img,i) => (
                <div key={i} 
                    className='absolute inset-0 w-full h-full'
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${img})`,
                        opacity: i === index ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out'
                    }}
                />
            ))}
            {credit && (
                <div className="absolute bottom-4 right-4 z-10">
                    <p className="text-white/70 text-sm">{credit}</p>
                </div>
            )}
        </div>
    </FadeContent>
        
  )
}

export default HeroImage;