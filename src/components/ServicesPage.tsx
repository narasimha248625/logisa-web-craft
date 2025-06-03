import { Code, Smartphone, Database, Zap, CheckCircle, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "Complete web application development from frontend to backend, ensuring seamless integration and optimal performance.",
      features: ["Custom web applications", "Responsive design", "API development", "Database design", "Performance optimization"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Modern, interactive user interfaces using cutting-edge technologies like Next.js, React, and TypeScript.",
      features: ["React/Next.js applications", "TypeScript integration", "ShadCN UI components", "Mobile-first design", "SEO optimization"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, MongoDB, and real-time features for scalable applications.",
      features: ["RESTful APIs", "Database architecture", "WebSocket integration", "Authentication systems", "Cloud deployment"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Incorporate artificial intelligence and machine learning capabilities into your applications for enhanced functionality.",
      features: ["AI-powered features", "API integrations", "Automation solutions", "Data analytics", "Smart workflows"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision, requirements, and goals to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating user-centric designs and robust technical architecture for optimal user experience."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Building your application with clean, scalable code and modern development practices."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing and performance optimization to ensure reliability and speed."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing support to keep your application running smoothly."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services from idea conception through implementation 
            and delivery, ensuring results that exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="animate-fade-in">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-gray-100 transition-all duration-300">
                  <div className="text-3xl font-bold text-gray-300 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="animate-fade-in">
          <div className="bg-black text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">My Commitment</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Quality First</h3>
                <p className="text-gray-300">
                  Every line of code is written with performance, scalability, and maintainability in mind.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                <p className="text-gray-300">
                  Clear timelines and regular updates ensure your project stays on track.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-gray-300">
                  Comprehensive support and maintenance to keep your application running smoothly.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              I take full responsibility from idea conception through implementation and delivery, 
              ensuring results that not only meet but exceed your expectations. Your success is my priority.
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-lg font-medium">
              Let's Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
