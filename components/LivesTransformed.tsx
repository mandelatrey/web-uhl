import TestimonialCarousel from './TestimonialCarousel';

const LivesTransformed = () => {
    const messages = [
        {
            user: "Sarah Mukasa, Community Leader",
            message: "Before Uhlendorf came, we walked 5 kilometers for water. Now we have clean water in our village.",
            photo: "/users/user1.png",
        },
        {
            user: "James Okello, Local Farmer",
            message: "The training programs changed everything for my family. I learned sustainable farming techniques that tripled my harvest.",
            photo: "/users/user2.png",
        },
        {
            user: "Grace Nambi, Health Worker",
            message: "Working with Uhlendorf has been a masterclass in collaboration. They blend innovation and empathy perfectly.",
            photo: "/users/user3.png",
        },
        {
            user: "David Mutesi, Partner Organisation",
            message: "They don't just build infrastructure and leave. They empower communities to maintain and grow what's been started.",
            photo: "/users/user4.png",
        },
    ];

    return (
        <section className="w-full h-full flex flex-col items-center gap-y-7">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-y-1 items-center justify-center">
                        <h1 className='section-title max-w-[80%] md:max-w-full text-center'>How Lives Are Transformed</h1>
                        <p className="text-center text-md/tight lg:text-lg font-light max-w-sm lg:max-w-lg">
                        We envision  solutions that foster self-reliance especially in rural areas.
                        </p>
                </div>
                
                <TestimonialCarousel testimonials={messages} className='pt-10'/>
            </div>
        </section>
    )
}

export default LivesTransformed