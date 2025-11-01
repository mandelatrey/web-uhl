import Image from 'next/image'

const Bento = () => {
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
        <div className='container w-full h-[90%] flex items-center justify-center pt-4 px-5 md:px-1'>
            <div className="grid grid-cols-1 max-w-xl md:max-w-3xl h-full gap-4 grid-rows-5 sm:grid-cols-4 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-4 lg:pt-5 md:pt-3 pt-3">
                {bentoCards.map((card, index) => (
                    <div 
                        key={index} 
                        className={`rounded-2xl transition-color duration-300 ease-in-out group flex items-end overflow-hidden h-full bg-gray-500
                            ${index === 0 ? 'col-span-2 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2' : ''}
                            ${index === 1 || index === 2 ? 'col-span-2 row-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 ' : ''}
                            ${index === 3 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1' : ''}
                            ${index === 4 ? 'col-span-2 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1' : ''}
                            `}
                    >
                        <div className='flex flex-col mx-auto h-full w-full justify-end bg-opacity-100 z-10 overflow-hidden transition-all duration-500 ease-in-out p-4 group-hover:bg-gray-300/10'>
                            <h2 className='font-bold text-lg/tight tracking-tight text-white max-w-[80%] transform ease-in-out transition-all duration-300 delay-100'>
                                {card.title}
                            </h2>
                            <p className='text-white text-sm max-w-[80%] opacity-70 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 delay-150 pt-2'>
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