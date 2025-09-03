"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showJoinNow, setShowJoinNow] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 400) {
      if (currentScrollY > lastScrollY) {
        setIsVisible(true);
        setShowJoinNow(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(true);
      setShowJoinNow(false);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive]);

  const dropdowns: Record<string, string[]> = {
    Trading: ["Trade Markets", "Trading Platform", "Crypto", "CFD Trading"],
    Investing: ["Stocks", "Copy Investors", "Portfolios", "Staking"],
    "Top Markets": ["Crypto", "Stocks", "Commodities", "Currencies"],
    Education: ["eToro Academy", "News & Analysis", "Podcasts"],
    Company: ["About", "Careers", "Help Center", "Media"],
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-sm z-50 transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="text-4xl font-bold text-green-600 flex-shrink-0">
            eToro
          </Link>


          <div
            className={`flex-1 flex items-center justify-between transition-all duration-300 ${
              isSearchActive
                ? "opacity-0 translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <nav className="hidden lg:flex lg:ml-10">
              <ul className="flex space-x-8 ">
                {Object.keys(dropdowns).map((link) => (
                  <li key={link} className="relative group ">
                    <a
                      href="#"
                      className="text-gray-800 font-light transition-colors"
                    >
                      {link}
                    </a>
                    <div className="absolute left-0 top-full mt-6 border border-gray-200 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">
                      <ul className="py-2">
                        {dropdowns[link].map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

        
            <div className="hidden lg:flex items-center space-x-6 ml-auto">
      
              <button
                onClick={() => setIsSearchActive(true)}
                className="flex items-center text-gray-800 "
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>

              {/* Language */}
              <a
                href="#"
                className="flex items-center text-gray-800 "
              >
                🌐 English (UK)
              </a>

              {/* Login */}
              <a
                href="#"
                className="text-gray-800  font-light"
              >
                Login
              </a>
              {showJoinNow && (
                <a
                  href="#"
                  className="bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-green-700 transition"
                >
                  Join Now
                </a>
              )}
            </div>
          </div>
          <div
            className={`absolute left-0 w-full flex justify-center items-center transition-all duration-300 ${
              isSearchActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                🔍
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for Instrument / Data"
                className="block w-full bg-white border border-gray-300 rounded-full py-4 pl-12 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={() => setIsSearchActive(false)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
