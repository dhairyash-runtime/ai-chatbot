import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkStyles = "hover:text-[#DEDB00] transition-colors";
    const activeLinkStyles = "text-[#218CA1] w-12 item-center border-b-2 border-[#218CA1] pb-1";

    return (
        <div
            className={`w-full font-['Poppins'] bg-white sticky top-0 z-50 shadow-none border-none transition-transform duration-500 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <nav className="flex items-center justify-between px-6 mx-auto max-w-7xl">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="relative cursor-pointer py-2">
                            <img
                                src="/runtime-solutions-logo.png"
                                alt="Runtime Solutions Logo"
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-12 text-[#4C4C4C] text-[15px] font-medium">
                    <Link href="#" className={activeLinkStyles}>
                        Home
                    </Link>
                    <Link href="#features" className={linkStyles}>
                        Features
                    </Link>
                    <Link href="#benefits" className={linkStyles}>
                        Benefits
                    </Link>
                    <Link href="#collaborations" className={linkStyles}>
                        Collaborations
                    </Link>
                    <Link href="#blogs" className={linkStyles}>
                        Blogs
                    </Link>
                </div>

                <div className="hidden md:block md:-mr-4">
                    <button
                        className="text-[12px] px-3 py-2 rounded-full font-medium transition-colors shadow-md cursor-pointer bg-[#218CA1] hover:bg-[#DEDB00] text-white hover:text-black"
                    >
                        <a
                            href="https://www.runtime-solutions.com/contact/"
                        >
                            Integrate AI Chatbot
                        </a>
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-3">
                    <button
                        className="text-[10px] px-3 py-2 rounded-full font-semibold transition-colors cursor-pointer bg-[#218CA1] hover:bg-[#DEDB00] text-white hover:text-black"
                    >
                        Integrate AI Chatbot
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#218CA1] hover:text-[#DEDB00] focus:outline-none p-1"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-white w-full h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-200">
                    <div className="flex flex-col px-6 text-gray-800 font-medium text-[15px]">
                        <Link href="#" className="py-4 border-b border-gray-200 hover:text-[#DEDB00] transition-colors" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="#features" className="py-4 border-b border-gray-200 hover:text-[#DEDB00] transition-colors" onClick={() => setIsOpen(false)}>
                            Features
                        </Link>
                        <Link href="#benefits" className="py-4 border-b border-gray-200 hover:text-[#DEDB00] transition-colors" onClick={() => setIsOpen(false)}>
                            Benefits
                        </Link>
                        <Link href="#collaborations" className="py-4 border-b border-gray-200 hover:text-[#DEDB00] transition-colors" onClick={() => setIsOpen(false)}>
                            Collaborations
                        </Link>
                        <Link href="#blogs" className="py-4 border-b border-gray-200 hover:text-[#DEDB00] transition-colors" onClick={() => setIsOpen(false)}>
                            Insights
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
