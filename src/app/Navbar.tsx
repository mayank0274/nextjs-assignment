"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "ABOUT ME",
    "PORTFOLIO",
    "SKILLS",
    "SERVICES",
    "TESTIMONIALS",
  ];

  return (
    <>
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-black text-white">
        <div className="text-lg font-semibold">ERICA JONES</div>

        <div className="flex items-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
          GET IN TOUCH
        </button>
      </nav>

      <nav className="md:hidden relative">
        <div className="flex items-center justify-between px-6 py-4 bg-black text-white">
          <div className="text-lg font-semibold">ERICA JONES</div>
          <button onClick={toggleMenu} className="p-1">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-gradient-to-br from-purple-800 via-pink-700 to-orange-600 z-50">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="text-lg font-semibold px-3 py-1 text-white">
                ERICA JONES
              </div>
              <button onClick={toggleMenu} className="text-white p-1">
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item}>
                  <a
                    href="#"
                    className="block px-4 py-3 text-white text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </div>
              ))}

              <div className="pt-4">
                <button
                  className="w-full bg-white text-black px-6 py-3 rounded-full text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
