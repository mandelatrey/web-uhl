import Image from 'next/image'
import React from 'react'

const Bento = () => {
    // Bento card data with titles, descriptions, and image paths
    const bentoCards = [
        {
            title: "Needs Assessments",
            description: "Exploring initiatives to identify and address unmet needs within communities",
            image: "/images/pillars/uhl-image-2.webp"
        },
        {
            title: "Baseline Studies",
            description: "Assessing core needs and uncovering new insights to better understand the problem",
            image: "/images/pillars/uhl-image-3.webp"
        },
        {
            title: "Partner Mapping",
            description: "Mapping stakeholders and partners to strengthen collaboration and resource mobilization",
            image: "/images/pillars/uhl-image-5.webp"
        },
        {
            title: "Community Outreach & Engagements",
            description: "Fostering creativity and technological advancement in rural areas",
            image: "/images/pillars/uhl-image-9.webp"
        },
        {
            title: "Monitoring & Evaluation",
            description: "Ensuring our programs deliver measurable impact and continuous improvement",
            image: "/images/pillars/uhl-img-1.webp"
        }
    ];

    return (
        <div className='h-full w-full flex items-start justify-start p-3'>
            <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-4 md:grid-rows-3 w-full h-full gap-4 xl:m-15 xl:mx-52 lh:m-34 md:m-16">
                {bentoCards.map((card, index) => (
                    <div 
                        key={index} 
                        className={`relative rounded-2xl transition-all duration-300 ease-in-out group flex items-end overflow-hidden h-full bg-gray-500
                            ${index === 0 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-2' : ''}
                            ${index === 1 || index === 2 ? 'col-span-2 row-span-1 md:col-span-1 lg:row-span-1' : ''}
                            ${index === 3 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-2' : ''}
                            ${index === 4 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-1' : ''}
                            `}
                    >
                        <div className="absolute inset-0 rounded-xl overflow-hidden top-0 bottom-0 right-0 left-0">
                            <Image 
                                src={card.image}
                                alt={`${card.title} illustration`}
                                fill
                                className="object-cover opacity-100 transition-opacity duration-300"
                            />
                        </div>
                        <div className='flex flex-col mx-auto h-full w-full justify-end bg-opacity-100 relative z-10 overflow-hidden transition-all duration-500 ease-in-out p-4 group-hover:bg-fruit-green/60'>
                            <h2 className='font-bold text-xl/tight tracking-tight text-white max-w-[70%] transform ease-in-out transition-all duration-300 delay-100'>
                                {card.title}
                            </h2>
                            <p className='text-white text-sm max-w-[70%] opacity-70 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 delay-150'>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bento