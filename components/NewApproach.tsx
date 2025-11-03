'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



const NewApproach = () => {
    const approachItems = [
        {
            title: "Needs Assessments",
            description: "Exploring initiatives to identify and address unmet needs within communities",
            image: "/pillars/uhl-image-2.webp"
        },
        {
            title: "Baseline Studies",
            description: "Assessing core needs and uncovering new insights to better understand the problem",
            image: "/pillars/uhl-image-3.webp"
        },
        {
            title: "Partner Mapping",
            description: "Mapping stakeholders and partners to strengthen collaboration and resource mobilization",
            image: "/pillars/uhl-image-5.webp"
        },
        {
            title: "Community Outreach & Engagements",
            description: "Fostering creativity and technological advancement in rural areas",
            image: "/pillars/uhl-image-9.webp"
        },
        {
            title: "Monitoring & Evaluation",
            description: "Ensuring our programs deliver measurable impact and continuous improvement",
            image: "/pillars/uhl-img-1.webp"
        }
    ];

    const container = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.sticky-card');
        const lastCard = cards[cards.length - 1];

        cards.forEach((card, i) => {
            ScrollTrigger.create({
                trigger: card,
                start: "center center",
                endTrigger: lastCard,
                end: i === cards.length - 1 ? "center center+=50%" : "center center",
                scrub: true,
                pin: true,
                pinSpacing: i === cards.length - 1,
                animation: i < cards.length - 1 ? gsap.to(card, {
                    scale: 0.9,
                    rotate: -5,
                    opacity: 0.8,
                    ease: "none",
                }) : undefined
            });
        });
    }, { scope: container });

    return (
        <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-full pt-7 p-4 overflow-hidden' id='sticky-cards' ref={container}>
            {approachItems.map((item, index) => (
                <div className='sticky-card flex items-start pt-5' key={item.title} >
                    <div className='ring-white p-2 bg-highlight-green w-full rounded-xl h-[230px] md:h-[250px] lg:h-[300px] flex items-end shadow-lg justify-between' >
                        <div className='flex flex-col max-w-[50%] rounded-full pl-3 pb-3 lg:pl-6 lg:pb-6'>
                            <p className='text-xs font-medium text-fruit-green pt-3'>Step {index + 1}</p>
                            <h2 className='font-semibold text-md/tighter lg:text-xl/tight lg:max-w-[60%] tracking-tight pb-2 pt-1 lg:pb-4 lg:pt-3'>{item.title}</h2>
                            <p className='text-sm lg:text-base max-w-[90%] md:max-w-[80%]'>{item.description}</p>
                        </div>

                        <div className='w-[40%] md:w-[50%] h-full overflow-hidden rounded-lg relative'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewApproach