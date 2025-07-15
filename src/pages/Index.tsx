import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import PortfolioPage from "../components/PortfolioPage";
import ServicesPage from "../components/ServicesPage";
import ContactPage from "../components/ContactPage";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  
  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "services", label: "Services", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "services":
        return <ServicesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage("home")}
                className="text-xl font-bold hover:text-gray-600 transition-colors duration-300"
              >
                Varahanarasimha
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 ${
                        currentPage === item.id
                          ? "text-black bg-gray-100"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      <IconComponent size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      currentPage === item.id
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Varahanarasimha Logisa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
