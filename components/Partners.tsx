import { div } from "motion/react-client";
import Image from "next/image";

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

const Partners = () => {
    return (
        <div className="flex flex-col bg-highlight-green h-[300px] md:h-[300px] w-full px-12  items-center p-6 pt-15 gap-y-10">
            <p className="uppercase  text-base md:text-sm font-medium text-center md:text-left">We have partnered with more than
                <span className="text-fruit-green max-w-[60%]"> 
                 {' '}10+ organizations</span> 
            </p>

            <div className="flex items-center overflow-hidden gap-8">
                {companies.map((company) => (
                    <Image 
                        src={company.logo} 
                        alt={company.label}
                        key={company.label}
                        width={90}
                        height={50}
                        className="object-contain hover:opacity-80 transition-all duration-300"
                    />
                ))}

            </div>

        </div>
    )
}

export default Partners