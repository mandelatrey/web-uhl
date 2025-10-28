"use client";

import { backgroundImages } from "@/lib/imageLinks"
import HeroImage from "./HeroImage"
import RotatingText from './RotatingText'
import FadeContent from "./FadeContent";
import SplitText from "./SplitText";
import Navbar from "./Navbar";
import CardNav from "./CardNav";

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
            <Navbar />
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

            <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6">
                    <FadeContent blur={true} duration={1500} easing="ease-in" initialOpacity={0}>
                        <div className="max-w-xl">
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
                                human centered agri-solutions
                            </h1>

                            <SplitText
                                text="We uplift communities through innovative solutions that address   critical needs in water, income security, and health."
                                className="font-medium text-xl text-white/70 max-w-[80%] tracking-normal"
                                delay={1000}
                                duration={0.8}
                                ease="power3.out"
                                splitType="lines"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                                onLetterAnimationComplete={handleAnimationComplete}
                            />

                            {/* 
                            <p className="font-dm-sans font-medium text-xl text-white/90 max-w-[80%] tracking-normal">
                                We uplift communities through innovative solutions that address critical needs in water, income security, and health.
                            </p> */}
                        </div>
                    </FadeContent>
                </div>
            </div>
        </section>

    )
}


export default Hero