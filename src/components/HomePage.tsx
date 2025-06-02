
import { useState, useEffect } from "react";
import { ChevronDown, Code, Database, Smartphone } from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Varahanarasimha</span>
                  <span className="block text-gray-600">Logisa</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  Full Stack Software Development Engineer
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Passionate about crafting scalable, production-ready applications with expertise in 
                end-to-end full-stack development. Specializing in modern JavaScript/TypeScript 
                ecosystems with a focus on innovation and excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  View My Work
                </button>
                <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/lovable-uploads/9df2d0ae-6741-4f14-aef0-e7a122377d7a.png"
                    alt="Varahanarasimha Logisa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <Code className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering comprehensive solutions across the full technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-4">
                Modern JavaScript/TypeScript with Next.js, React, and ShadCN components
              </p>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm ml-2">TypeScript</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
              </div>
            </div>

            {/* Backend */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-4">
                Scalable server-side solutions with Node.js, MongoDB, and real-time features
              </p>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm ml-2">MongoDB</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">WebSocket</span>
              </div>
            </div>

            {/* Full Stack */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Full Stack Integration</h3>
              <p className="text-gray-600 mb-4">
                End-to-end development from conception to deployment and maintenance
              </p>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">API Design</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm ml-2">DevOps</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
