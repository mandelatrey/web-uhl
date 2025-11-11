'use client';

import Image from "next/image";

const Partners = () => {
    const companies = [
        {
            label: 'Bridge',
            logo: '/partners/bridge-icon.png'
        },
        {
            label: 'The Government of Burundi',
            logo: '/partners/burundi-icon.png'
        },
        {
            label: 'Days For Girls',
            logo: '/partners/D4G-icon.png'
        },
        {
            label: 'Medical Teams International',
            logo: '/partners/medical_teams-icon.png'
        },
        {
            label: 'Mission Green',
            logo: '/partners/mission_green-icon.png'
        },
        {
            label: 'National ICT Innovation Hub',
            logo: '/partners/NIIH-icon.png'
        },
        {
            label: 'National Water and Sewerage Corporation',
            logo: '/partners/nwsc-icon.png'
        },
        {
            label: 'Uganda Christian Outreach Ministries',
            logo: '/partners/SHC-logo.png'
        },

    ];
    return (
        <section data-navbar-invert="true" className="flex flex-col h-[300px] md:h-[300px] w-full px-12 items-center p-6 pt-15 gap-y-10">
            <p className="lettercase text-2xl md:text-lg text-center md:text-left">We have partnered with more than
                <span className="text-fruit-green max-w-[60%]">
                    {' '}10+ organizations</span>
            </p>

            <div className="relative w-full overflow-hidden" style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}>
                {/* Scrolling container */}
                <div className="flex items-center gap-12 md:gap-16 animate-scroll">
                    {/* First set of logos */}
                    {companies.map((company) => (
                        <Image
                            src={company.logo}
                            alt={company.label}
                            key={`first-${company.label}`}
                            width={0}
                            height={50}
                            sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
                            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain flex-shrink-0"
                        />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company) => (
                        <Image
                            src={company.logo}
                            alt={company.label}
                            key={`second-${company.label}`}
                            width={0}
                            height={50}
                            sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
                            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain flex-shrink-0"
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Partners