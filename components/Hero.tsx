"use client";

import { backgroundImages } from "@/lib/imageLinks"
import HeroImage from "./HeroImage"
import RotatingText from './RotatingText'
import FadeContent from "./FadeContent";
import SplitText from "./SplitText";
import Navbar from "./Navbar";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const uhlLogo = '/icons/uhlendorf logo.svg';

const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About UHlendorf" },
        ]
    },
    {
        label: "Projects",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Agribridge", ariaLabel: "Agribridge" },
            { label: "Community Projects", ariaLabel: "Community Projects" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us" },
            { label: "Youtube", ariaLabel: "Youtube" },
            { label: "LinkedIn", ariaLabel: "LinkedIn" }
        ]
    }
];
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const Hero = () => {
    
    const images: string[] = backgroundImages.map(img => img.link);

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            

            <HeroImage images={images} interval={10000} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
            
            {/* <CardNav
                logo={uhlLogo}
                logoAlt="Company Logo"
                items={items}
                baseColor="#fff"
                menuColor="#000"
                buttonBgColor="#111"
                buttonTextColor="#fff"
                ease="power3.out" 
                className="w-full bg-highlight-green"/> */}

            <div className="absolute inset-0 z-20 flex items-center px-6 justify-left mx-4">
                <Navbar />
                <div className="mx-auto w-full h-full flex items-center justify-center">
                    <FadeContent blur={false} duration={1500} easing="ease-in" initialOpacity={0}>
                        <div className="max-w-4xl justify-self-center flex flex-col items-center">
                            <h1 className="header-title">
                                Fueling Africa&apos;s growth with{' '}
                                <span className="inline-block">
                                    <RotatingText
                                        texts={['sustainable', 'empowering', 'life-changing', 'innovative']}
                                        mainClassName="px-4 pl-2 text-highlight-green font-light overflow-hidden py-1 inline-flex items-center rounded-xl font-bold transition-all duration-100"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-100%" }}
                                        staggerDuration={0.03}
                                        splitLevelClassName="overflow-hidden"
                                        transition={{
                                            type: "spring",
                                            damping: 25,
                                            stiffness: 300
                                        }}
                                        rotationInterval={3000}
                                    />
                                </span>{' '}
                                <br /> human centered agri-solutions
                            </h1>

                            <SplitText
                                text="We uplift communities through innovative solutions that address   critical needs in water, income security, and health."
                                className="font-base text-xl text-white/70 tracking-normal pt-5 max-w-[80%]"
                                delay={200}
                                duration={0.9}
                                ease="power2.out"
                                splitType="words"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                onLetterAnimationComplete={handleAnimationComplete}
                            />
                        </div>
                    </FadeContent>
                </div>
            </div>
        </section>

    )
}


export default Hero