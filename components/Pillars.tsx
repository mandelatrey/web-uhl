'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BanknoteArrowUp, Droplet, HeartPlus } from 'lucide-react'
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Pillars = () => {
  const data = [
    {
      name: "Water",
      description: "We bring sustainable water solutions to East African communities through safe water infrastructure, conservation practices, and educational programs. Our goal is to empower these communities with reliable water access to support health and foster broader development.",
      icon: <Droplet size={48} strokeWidth={1} />,
    },
    {
      name: "Income Security",
      description: "Through our initiatives, programs, and projects, we help individuals and  families achieve financial independence and security, laying the  foundation for prosperous and resilient communities.",
      icon: <BanknoteArrowUp size={48} strokeWidth={1} />,
    },
    {
      name: "Health",
      description: "By fostering healthier environments, we help East African communities thrive and focus on building a brighter future.",
      icon: <HeartPlus size={48} strokeWidth={1} />
    },

  ];

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.pillar-item');
    
    items.forEach((item) => {
      const contentWrappers = item.querySelectorAll('.pillar-content-wrapper');
      
      gsap.set(contentWrappers, {
        opacity: 0,
        maxHeight: 0,
        overflow: 'hidden'
      });
      
      gsap.to(contentWrappers, {
        opacity: 1,
        maxHeight: 500,
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'top center-=100',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, { scope: container })

  return (
    <section data-navbar-invert="true" className='w-full min-h-dvh overflow-hidden flex items-center justify-center py-12 md:py-16 lg:py-20' ref={container}>
      <div className='container h-full w-full px-4 sm:px-6 md:px-8 max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] flex flex-col justify-center gap-y-6'>
        <h1 className='section-title mb-6 md:mb-8 lg:mb-15'>Our Pillars</h1>
        <div className='flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10'>
          {data.map((pillar) => (
            <div key={pillar.name} className='pillar-item'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start'>
                <div className='flex flex-col items-start gap-3 md:gap-4 lg:gap-5'>
                  <div className='pillar-content-wrapper'>
                    <div className='text-fruit-green'>
                      {pillar.icon}
                    </div>
                  </div>
                  <h2 className='font-medium text-lg md:text-xl lg:text-xl uppercase text-left'>{pillar.name}</h2>
                </div>
                <div className='pillar-content-wrapper'>
                  <p className='text-left text-sm md:text-base lg:text-base'>{pillar.description}</p>
                </div>
              </div>
              <div className='h-[1px] w-full bg-fruit-green/20 mt-4 md:mt-6 lg:mt-8' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars