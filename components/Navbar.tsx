"use client";
import { navItems } from "@/lib/info";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/store'
import { toggleOpen, setProjectsOpen } from '@/store/headerSlice'

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const pathname = usePathname();
    const dispatch = useDispatch<AppDispatch>()
    const isOpen = useSelector((s: RootState) => s.header.isOpen)
    const isProjectsDropdownOpen = useSelector((s: RootState) => s.header.isProjectsDropdownOpen)
    const [isInverted, setIsInverted] = useState(false);
    const navbarTriggersRef = useRef<ScrollTrigger[]>([]);

    const handleClick = () => {
        dispatch(toggleOpen())
    };

    // Close mobile menu and dropdown on route change
    useEffect(() => {
        if (isOpen) {
            dispatch(toggleOpen());
        }
        if (isProjectsDropdownOpen) {
            dispatch(setProjectsOpen(false));
        }
    }, [pathname]);

    // keep dropdown open state in redux; reuse selector above
    const closeProjectsDropdownTimeoutRef = useRef<number | null>(null);

    const openProjectsDropdown = () => {
        if (closeProjectsDropdownTimeoutRef.current) {
            window.clearTimeout(closeProjectsDropdownTimeoutRef.current);
            closeProjectsDropdownTimeoutRef.current = null;
        }
        dispatch(setProjectsOpen(true))
    };

    const scheduleCloseProjectsDropdown = () => {
        if (closeProjectsDropdownTimeoutRef.current) {
            window.clearTimeout(closeProjectsDropdownTimeoutRef.current);
        }
        closeProjectsDropdownTimeoutRef.current = window.setTimeout(() => {
            dispatch(setProjectsOpen(false))
            closeProjectsDropdownTimeoutRef.current = null;
        }, 220);
    };



    // Detect light backgrounds and invert navbar colors
    useEffect(() => {
        // Reset inverted state on route change
        setIsInverted(false);
        
        // Kill only navbar-specific ScrollTriggers
        navbarTriggersRef.current.forEach(trigger => trigger.kill());
        navbarTriggersRef.current = [];
        
        // Small delay to ensure DOM is ready after route change
        const timer = setTimeout(() => {
            const lightSections = gsap.utils.toArray<HTMLElement>('section[data-navbar-invert="true"]');

            if (lightSections.length === 0) {
                return;
            }

            const triggers = lightSections.map((section) => {
                return ScrollTrigger.create({
                    trigger: section,
                    start: 'top 65px',
                    end: 'bottom 65px',
                    onEnter: () => setIsInverted(true),
                    onLeave: () => setIsInverted(false),
                    onEnterBack: () => setIsInverted(true),
                    onLeaveBack: () => setIsInverted(false),
                });
            });

            // Store triggers for cleanup
            navbarTriggersRef.current = triggers;
        }, 100);

        return () => {
            clearTimeout(timer);
            // Clean up on unmount or route change
            navbarTriggersRef.current.forEach(trigger => trigger.kill());
        };
    }, [pathname]);

    return (

        <header className="fixed top-0 left-0 right-0 z-30 w-full">

            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}></div>
            <nav className={`navbar ${isOpen ? "active" : ""}`}>
                {/*wrapper*/}
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-highlight-green font-medium uppercase text-sm/5">Uhlendorf Innovations</h3>
                    <button className="border size-[35px] rounded-full flex items-center justify-center border-highlight-green/25 hover:bg-highlight-green/70 transition-colors duration-300 group">
                        <X
                            onClick={handleClick}
                            size={25}
                            className="text-highlight-green m-2 group-hover:text-dark-green group-hover:transition-colors group-hover:duration-300"
                        />
                    </button>
                </div>

                <ul className="grid">
                    {navItems.map((item) => (
                        <div key={item.name} className="border-b border-highlight-green/10 text-left justify-between flex items-center hover:bg-highlight-green/5 transition-colors duration-200">
                            {item.name.toLowerCase() === "projects" ? (
                                <div className="flex-1">
                                    <div
                                        className="flex items-center justify-between py-7 ml-4 cursor-pointer group"
                                        onClick={() => dispatch(setProjectsOpen(!isProjectsDropdownOpen))}
                                    >
                                        <span className="text-sm text-highlight-green">{item.name}</span>
                                        <ChevronDown
                                            className={`text-highlight-green mr-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''} `}
                                            size={16}
                                        />
                                    </div>

                                    {/* Mobile Dropdown Menu */}
                                    {isProjectsDropdownOpen && (
                                        <div className="ml-4 mb-4 bg-highlight-green/5 rounded-lg">
                                            <Link
                                                href="/projects/listening-campaigns"
                                                className="block px-4 py-3 text-sm text-highlight-green hover:bg-highlight-green/10 transition-colors duration-200 border-b border-highlight-green/10"
                                                onClick={() => dispatch(toggleOpen())}
                                            >
                                                The Listening Campaigns
                                            </Link>
                                            <Link
                                                href="/projects/economic-empowerment"
                                                className="block px-4 py-3 text-sm text-highlight-green hover:bg-highlight-green/10 transition-colors duration-200 border-b border-highlight-green/10"
                                                onClick={() => dispatch(toggleOpen())}
                                            >
                                                Economic Empowerment Programs
                                            </Link>
                                            <Link
                                                href="/projects/enterprise-financing"
                                                className="block px-4 py-3 text-sm text-highlight-green hover:bg-highlight-green/10 transition-colors duration-200"
                                                onClick={() => dispatch(toggleOpen())}
                                            >
                                                Enterprise Financing & Investment Linkages
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href={item.href}
                                        className="text-sm py-7 text-highlight-green ml-4"
                                        onClick={() => dispatch(toggleOpen())}>
                                        {item.name}
                                    </Link>
                                    <ArrowRight
                                        className="text-highlight-green mr-4"
                                        size={15}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </ul>

                <button className="primary-btn">
                    Log In
                </button>
            </nav>


            {/* Main header content */}
            <div className={`transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="mx-auto h-[70px] w-[78%] max-w-screen px-4 pt-4 mt-5">
                    <div className={`relative flex items-center justify-between w-[100%] h-full rounded-full px-2 transition-all duration-300`}>
                        <a href="./" className="flex flex-row items-center pl-2">
                            <Image
                                src="./icons/uhlendorf-logo.svg"
                                width={120}
                                height={50}
                                alt="company logo"
                                className={`transition-all duration-300 invert`} />
                        </a>

                        <button onClick={handleClick} className="lg:hidden ml-auto">
                            <Menu size={26} className={`transition-colors duration-300`} />
                        </button>

                        {/* Desktop */}
                        <ul className="max-lg:hidden flex flex-row  items-center gap-10">
                            {navItems.map((item) => (
                                <li key={item.name} className={`text-sm tracking-wide cursor-pointer transition-all duration-300 flex items-center gap-1 relative py-2 ease-in}`}>
                                    {item.name.toLowerCase() === "projects" ? (
                                        <div
                                            className="flex items-center gap-1 group"
                                            onMouseEnter={openProjectsDropdown}
                                            onMouseLeave={scheduleCloseProjectsDropdown}
                                        >
                                            <Link href={item.href}>
                                                {item.name}
                                            </Link>
                                            <ChevronDown size={14} className="mt-[1px] group-hover:translate-y-[0.8px] transition-transform duration-200" />

                                            {/* Dropdown Menu */}
                                            {isProjectsDropdownOpen && (
                                                <div
                                                    className="absolute top-full left-0 mt-5 bg-white border border-gray-200 rounded-lg shadow-lg py-3 min-w-[280px] z-50"
                                                    onMouseEnter={openProjectsDropdown}
                                                    onMouseLeave={scheduleCloseProjectsDropdown}
                                                >
                                                    <Link
                                                        href="/projects/listening-campaigns"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-gray-800 transition-colors duration-200"
                                                    >
                                                        The Listening Campaigns
                                                    </Link>
                                                    <Link
                                                        href="/projects/economic-empowerment"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-gray-800 transition-colors duration-200"
                                                    >
                                                        Economic Empowerment Programs
                                                    </Link>
                                                    <Link
                                                        href="/projects/enterprise-financing"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-gray-800 transition-colors duration-200"
                                                    >
                                                        Enterprise Financing & Investment Linkages
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>


                        <button className={`h-[40px] w-[120px] rounded-lg uppercase flex items-center justify-center max-lg:hidden font-medium transition-all duration-300 bg-fruit-green text-white`}>
                            <p className="mx-14 font-semibold text-sm text-white">
                                Login
                            </p>
                        </button>

                        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md z-[-1] bg-white/30 rounded-xl"/>


                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;