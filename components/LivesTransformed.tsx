import TestimonialCarousel from './TestimonialCarousel';

const LivesTransformed = () => {
    const messages = [
        {
            user: "Sarah Mukasa, Community Leader",
            message: "Before Uhlendorf came, we walked 5 kilometers for water. Now we have clean water in our village. Our children are healthier and spend more time in school.",
            photo: "/users/user1.png",
        },
        {
            user: "James Okello, Local Farmer",
            message: "The training programs changed everything for my family. I learned sustainable farming techniques that tripled my harvest. Now I can provide for my children's education.",
            photo: "/users/user2.png",
        },
        {
            user: "Grace Nambi, Health Worker",
            message: "Working with Uhlendorf has been a masterclass in collaboration. They blend innovation and empathy perfectly. Every project feels built to sustain the people.",
            photo: "/users/user3.png",
        },
        {
            user: "David Mutesi, Partner Organisation",
            message: "Their approach is different. They don't just build infrastructure and leave. They empower communities to maintain and grow what's been started. That's real development.",
            photo: "/users/user4.png",
        },
    ];

    return (
        <section className="w-full h-svh flex flex-col items-center gap-y-7">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-y-3">
                        <h1 className='section-title'>How Lives Are Transformed</h1>
                        <p className="text-center text-md/tight lg:text-lg font-light max-w-sm lg:max-w-lg">
                        We envision  solutions that foster self-reliance especially in rural areas.
                        </p>
                </div>
                
                <TestimonialCarousel testimonials={messages} className='pt-15'/>
            </div>
        </section>
    )
}

export default LivesTransformed