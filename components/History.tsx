'use client';

import SplitText from "./SplitText";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const History = () => {
    return (
        <section data-navbar-invert="true" className='w-full pt-2 mt-12 md:mt-25 pb-0 md:pb-5'>
            <div className=" p-3 px-4 flex flex-col items-center justify-center gap-5">
                <h1 className='section-title mb-8'>Our History</h1>

                {/* <p className='font-light text-3xl/tight max-w-[60%] text-center tracking-tight'>
                    Founded in 2018 by JanaJo Uhlendorf in the USA as a nonprofit  organization called Grace and Favor Ministries, we began as a  Christian-based initiative with the goal of empowering communities.
                </p> */}

                <SplitText
                    text={`Founded in 2018 by JanaJo Uhlendorf in the USA as a nonprofit  organization called Grace and Favor Ministries, we began as a  Christian-based initiative with the goal of empowering communities.`}
                    className="font-light text-lg md:text-xl lg:text-2xl max-w-[80%] lg:max-w-[60%] text-center tracking-tight"
                    delay={200}
                    duration={0.9}
                    ease="power2.out"
                    splitType="lines"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <SplitText
                    text={`
                    We grew from there, and as we partnered with rural communities across Uganda, Rwanda, Kenya, Burundi, and Tanzania, it became clear that there was an urgent need for sustainable solutions in these regions.`}
                    className="font-light text-lg md:text-xl lg:text-2xl max-w-[80%] lg:max-w-[60%] text-center tracking-tight"
                    delay={400}
                    duration={0.9}
                    ease="power2.out"
                    splitType="lines"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <SplitText
                    text={`This realization led to our registration in Uganda as Uhlendorf Innovations Africa, a social enterprise committed to collaborating with countless communities in remote areas of Uganda, Rwanda, Tanzania, and Burundi to create lasting, positive change.`}
                    className="font-light text-lg md:text-xl lg:text-2xl max-w-[80%] lg:max-w-[60%] text-center tracking-tight"
                    delay={600}
                    duration={0.9}
                    ease="power2.out"
                    splitType="lines"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
        </section>
    )
}

export default History