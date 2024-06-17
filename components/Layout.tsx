import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (element: string) => {
    const section = document.getElementById(element);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="text-white w-full relative z-30">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl md:text-3xl font-bold ml-10">Auto Keyz</h1>
          <button
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col mr-20 gap-5 md:flex-row absolute md:relative inset-x-0 top-full md:top-auto bg-gray-800 md:bg-transparent w-full md:w-auto p-4 md:p-0 z-50`}>
            <button className="py-2 px-4 hover:bg-gray-700 md:text-white md:p-2 text-left" onClick={() => handleScroll('services')}>Our Services</button>
            <button className="py-2 px-4 hover:bg-gray-700 md:text-white md:p-2 text-left" onClick={() => handleScroll('pricing')}>Pricing</button>
            <button className="py-2 px-4 hover:bg-gray-700 md:text-white md:p-2 text-left" onClick={() => handleScroll('contact')}>Get In Touch</button>
          </nav>
        </div>
      </header>
      <main className="flex-grow w-full">
        {children}
      </main>
      <footer className="bg-gray-8000 text-white w-full p-4">
        <p className="text-center">© 2024 Auto Keyz - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
