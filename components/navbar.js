import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full pt-1 z-50 transition-all duration-300 ease-in-out ${scrollPosition > 20 ? 'bg-primary bg-opacity-60 backdrop-filter backdrop-blur-lg' : 'bg-primary'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="\logo-axelabs-white-v2-1@2x.png" alt="AxeLabs" width={120} height="auto"/>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <a href="#" className={`px-3 py-2 text-sm font-medium rounded-md ${router.pathname === '/' ? 'text-yellow-500' : 'text-white'}`}>Home</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-white rounded-md">Project</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-white rounded-md">Download CV</a>
            </div>
          </div>
          <div className="block md:hidden">
            <button onClick={() => setNavbarOpen(!navbarOpen)} className="bg-grey inline-flex items-center justify-center p-2 text-black-400 rounded-md hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <img src="\hamburgermenu-svgrepocom.svg" className="block w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className={`${navbarOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pb-3 space-y-1">
          <a href="#" className={`block px-3 py-2 text-base font-medium rounded-md ${router.pathname === '/' ? 'text-yellow-500' : 'text-white'}`}>Home</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-white rounded-md">Project</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-white rounded-md">Download CV</a>
        </div>
      </div>
    </nav>
  );
}