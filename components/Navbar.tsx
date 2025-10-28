"use client";
import { navItems } from "@/lib/info";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/store'
import { toggleOpen, setProjectsOpen, setIsScrolling } from '@/store/headerSlice'

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isOpen = useSelector((s: RootState) => s.header.isOpen)
    const isProjectsDropdownOpen = useSelector((s: RootState) => s.header.isProjectsDropdownOpen)
    const isScrolling = useSelector((s: RootState) => s.header.isScrolling)

    const handleClick = () => {
        dispatch(toggleOpen())
    };

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

    // Hide header while the page is actively scrolling; show when scroll stops.

    useEffect(() => {
    const onStart = () => { dispatch(setIsScrolling(true)); };
    const onEnd = () => { dispatch(setIsScrolling(false)); };

        // Try to use the globally-registered ScrollTrigger (registered in page.tsx)
        const gsapRaw = gsap as unknown as Record<string, unknown>
        type ScrollTriggerLike = {
            addEventListener?: (name: string, cb: () => void) => void
            removeEventListener?: (name: string, cb: () => void) => void
        }

        const ST = gsapRaw.ScrollTrigger as unknown as ScrollTriggerLike | undefined

        let dynamicST: ScrollTriggerLike | null = null

        if (ST && typeof ST.addEventListener === 'function') {
            ST.addEventListener('scrollStart', onStart)
            ST.addEventListener('scrollEnd', onEnd)
        } else {
            // Fallback: dynamically import ScrollTrigger and register
            import('gsap/ScrollTrigger')
                .then(({ ScrollTrigger }) => {
                    try {
                        gsap.registerPlugin(ScrollTrigger)
                        if (typeof ScrollTrigger.addEventListener === 'function') {
                            ScrollTrigger.addEventListener('scrollStart', onStart)
                            ScrollTrigger.addEventListener('scrollEnd', onEnd)
                        }
                        dynamicST = ScrollTrigger as ScrollTriggerLike
                    } catch {}
                })
                .catch(() => {});
        }

        return () => {
            try {
                if (ST && typeof ST.removeEventListener === 'function') {
                    ST.removeEventListener('scrollStart', onStart)
                    ST.removeEventListener('scrollEnd', onEnd)
                }
                if (dynamicST && typeof dynamicST.removeEventListener === 'function') {
                    dynamicST.removeEventListener('scrollStart', onStart)
                    dynamicST.removeEventListener('scrollEnd', onEnd)
                }
            } catch {}
        };
    }, [dispatch]);

    return (
      
        <header className="fixed top-0 left-0 right-0 z-30 w-full mx-auto">
            
                {/* <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}></div> */}
                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                        {/*wrapper*/}
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-highlight-green font-medium tracking-tight uppercase text-xl/5">Uhlendorf Innovations</h3>
                            <button className="border size-[35px] rounded-full flex items-center justify-center border-highlight-green/25 hover:bg-highlight-green/50 transition-colors duration-300 group">
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
                                                        href="#agribridge" 
                                                        className="block px-4 py-3 text-sm text-highlight-green hover:bg-highlight-green/10 transition-colors duration-200 border-b border-highlight-green/10"
                                                    >
                                                        Agribridge
                                                    </Link>
                                                    <Link 
                                                        href="#community-engagement" 
                                                        className="block px-4 py-3 text-sm text-highlight-green hover:bg-highlight-green/10 transition-colors duration-200"
                                                    >
                                                        Community Engagement Projects
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <>
                                            <Link
                                                href={item.href}
                                                className="text-sm py-7 text-highlight-green ml-4">
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
            <div className={`relative flex justify-between transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : isScrolling ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                <div className="container lg:pb-0 mx-auto h-[70px] fixed top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-7xl">
                    <div className="flex items-center justify-between bg-white/80 backdrop-blur-md w-full h-full rounded-xl px-3">
                        <a href="./" className="flex flex-row items-center">
                            <Image
                                src="./icons/uhlendorf-logo.svg"
                                width={100}
                                height={50}
                                alt="company logo" 
                                className=""/>
                        </a>

                        <button onClick={handleClick} className="lg:hidden ml-auto">
                                <Menu size={20} />
                        </button>

                        {/* Desktop */}
                    <ul className="max-lg:hidden flex flex-row  items-center gap-10">
                        {navItems.map((item) => (
                            <li key={item.name} className="text-xs tracking-wide hover:text-green-700 cursor-pointer transition-colors duration-300 flex items-center gap-1 relative">
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
                                                className="absolute top-full left-0 mt-7 bg-white border border-gray-200 rounded-lg shadow-lg py-3 min-w-[200px] z-50"
                                                onMouseEnter={openProjectsDropdown}
                                                onMouseLeave={scheduleCloseProjectsDropdown}
                                            >
                                                <Link 
                                                    href="#agribridge" 
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                                                >
                                                    Agribridge
                                                </Link>
                                                <Link 
                                                    href="#community-engagement" 
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                                                >
                                                    Community Engagement Projects
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


                    <button className="secondary-btn">
                        <p className="mx-14 font-semibold text-sm">
                            Login
                        </p>
                    </button>   

                    
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;