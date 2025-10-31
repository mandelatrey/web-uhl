'use client';

import SplitText from "./SplitText";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const History = () => {
    return (
        <section className='my-4'>
            <div className="pt-55 p-3 mx-4 flex flex-col items-center justify-center gap-5">
                <h1 className='section-title'>Our History</h1>

                {/* <p className='font-light text-3xl/tight max-w-[60%] text-center tracking-tight'>
                    Founded in 2018 by JanaJo Uhlendorf in the USA as a nonprofit  organization called Grace and Favor Ministries, we began as a  Christian-based initiative with the goal of empowering communities.
                </p> */}

                <SplitText
                                text="Founded in 2018 by JanaJo Uhlendorf in the USA as a nonprofit  organization called Grace and Favor Ministries, we began as a  Christian-based initiative with the goal of empowering communities."
                                className="font-light text-4xl/tight max-w-[60%] text-center tracking-tight"
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
            </div>
        </section>
    )
}

export default History