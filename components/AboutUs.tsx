'use client'
import React from 'react'
import { motion } from 'motion/react'

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Donald M Wangwabi",
            role: "CEO/Team Lead",
            image: "/uhl-team/donald.png"
        },
        {
            name: "Madrine Nabukera",
            role: "Operations Lead",
            image: "/uhl-team/madrine.png"
        },
        {
            name: "Mercy Mutoni",
            role: "Health Tech Lead",
            image: "/uhl-team/mercy.png"
        },
        {
            name: "Olivia Nankya",
            role: "Communications Lead",
            image: "/uhl-team/olive.png"
        },
        {
            name: "Muyonjo Mandela Trevor W",
            role: "CTO / Design Lead",
            image: "/uhl-team/trevor.png"
        },
    ];

    return (
        <section className='w-full h-full flex flex-col items-center gap-y-7 pt-35 '>
            <div className='container mx-auto flex flex-col items-center'>
                <motion.div 
                    className="flex flex-col gap-y-3 items-center justify-center pb-12 p-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h1 
                        className='section-title max-w-[70%] md:max-w-full text-center'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Mission
                    </motion.h1>
                    <motion.p 
                        className="text-center text-md/tight lg:text-lg font-light max-w-lg lg:max-w-xl mx-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        "To empower and uplift East African communities through innovative and sustainable solutions that address critical needs in water, income security and health."
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="flex flex-col gap-y-3 items-center justify-center pb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h1 
                        className='section-title max-w-[70%] md:max-w-full text-center'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        Vision
                    </motion.h1>
                    <motion.p 
                        className="text-center text-md/tight lg:text-lg font-light max-w-lg lg:max-w-xl mx-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        "To have a world where every community thrives with sustainable access to clean water, economic opportunities and health care, achieved through solutions that foster resilience and self-reliance in rural communities."
                    </motion.p>
                </motion.div>
            </div>

            <div className="relative w-full">
                {/* Video Component */}
                <div className="w-full max-w-4xl px-4 mx-auto relative z-10 mb-20">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                            src="https://www.youtube.com/embed/Tb-hNcOFJ1s"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Background Element - starts from middle of video, fixed position */}
                <div className='absolute top-1/8 md:top-1/6 left-0 w-full bg-highlight-green -z-10 h-[250vh] sm:h-[200vh] md:h-[150vh]' />

                {/* Content */}
                <div className='container mx-auto flex flex-col items-center relative z-10 pb-20'>
                    <motion.div 
                        className="flex flex-col gap-y-3 items-center justify-center pb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.h1 
                            className='section-title max-w-[70%] md:max-w-full text-center'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Our Team
                        </motion.h1>
                        <motion.p 
                            className="text-center text-md/tight lg:text-lg font-light max-w-lg lg:max-w-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Meet the people helping us to make a difference
                        </motion.p>
                    </motion.div>

                    {/* Unified Grid: mobile 1 col, tablet 2 cols, md+ 3 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl px-4">
                        {teamMembers.map((member, index) => (
                            <motion.div 
                                key={member.name} 
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-300 rounded-3xl overflow-hidden mb-3 md:mb-4">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-semibold text-center text-base md:text-md lg:text-lg">{member.name}</h3>
                                <p className="text-sm md:text-sm lg:text-md text-gray-600 text-center font-light">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUs
