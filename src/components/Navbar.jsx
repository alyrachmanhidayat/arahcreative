import { useEffect } from "react";
import logoImage from "../assets/arah creative logo.png";

export const Navbar = ({menuOpen, setMenuOpen})=>{
        useEffect(()=>{
            document.body.style.overflow=menuOpen ? "hidden" : "";
        },[menuOpen]);

    // Function to handle navigation and close mobile menu
    const handleNavigation = (sectionId) => {
        setMenuOpen(false);
        // Add a small delay to ensure the menu closes before scrolling
        setTimeout(() => {
            // Normalize sectionId to lowercase for consistency
            const element = document.getElementById(sectionId.toLowerCase());
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        // navbar
        <nav className="absolute top-0 w-full z-[10000] bg-[rgba(10, 10, 10, 0.8)] border-b border-white/10 shadow-lg backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a 
                        href="#home" 
                        className="font-mono text-xl font-bold text-white cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('home');
                        }}
                    >
                        {" "}
                        Arah<span className="text-blue-500">.Creative</span>{" "}
                    </a>
                    {/* hamburger menu */}
                    <div className="w-7 h-5 relative cursor-pointer z-[9999] md:hidden flex flex-col justify-center space-y-1" onClick={() => setMenuOpen((prev) => !prev)}>
                        <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                    
                    {/* navbar item */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a 
                            href="#home" 
                            className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('home');
                            }}
                        > 
                            Home
                        </a>

                        <a 
                            href="#about" 
                            className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('about');
                            }}
                        > 
                            About 
                        </a>

                        <a 
                            href="#services" 
                            className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('services');
                            }}
                        > 
                            Services
                        </a>

                        <a 
                            href="#pricing" 
                            className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('pricing');
                            }}
                        > 
                            Pricing
                        </a>

                        <a 
                            href="#contact" 
                            className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('contact');
                            }}
                        > 
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            
            {/* mobile menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/95 z-[9998] flex flex-col items-center justify-center">
                    <div className="text-2xl font-mono space-y-4"> {/* Reduced mobile spacing */}
                        <a 
                            href="#home" 
                            className="block text-white px-4 py-2" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('home');
                            }}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className="block text-white px-4 py-2" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('about');
                            }}
                        >
                            About
                        </a>
                        <a 
                            href="#services" 
                            className="block text-white px-4 py-2" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('services');
                            }}
                        >
                            Services
                        </a>
                        <a 
                            href="#pricing" 
                            className="block text-white px-4 py-2" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('pricing');
                            }}
                        >
                            Pricing
                        </a>
                        <a 
                            href="#contact" 
                            className="block text-white px-4 py-2" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('contact');
                            }}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}