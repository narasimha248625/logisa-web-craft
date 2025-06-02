
import { ExternalLink, Github, Calendar, Users, Zap, Globe } from "lucide-react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Easy Hiring (Gen AI)",
      description: "AI-powered hiring platform revolutionizing recruitment with automated candidate assessments, video and text questions, and advanced anti-cheating detection.",
      longDescription: "A comprehensive hiring solution that leverages artificial intelligence to streamline the recruitment process. Features include automated candidate assessments, integrated video and text-based questioning systems, Gladia API integration for advanced audio processing, and Face API implementation for robust cheating detection during interviews.",
      technologies: ["Next.js", "TypeScript", "AI/ML", "Gladia API", "Face API", "Node.js", "MongoDB"],
      features: ["Automated candidate assessments", "Video & text interviews", "AI-powered cheating detection", "Automated scheduling", "Real-time analytics"],
      icon: Zap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Team Stack",
      description: "Centralized team intelligence platform designed to track skills, experience, and performance while enhancing manager-employee relationships.",
      longDescription: "A sophisticated team management platform that provides comprehensive insights into team dynamics, skill tracking, and performance metrics. The platform facilitates better communication between managers and employees while providing actionable data for team optimization.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Express.js", "Chart.js"],
      features: ["Skills tracking", "Performance analytics", "Team collaboration tools", "Real-time communication", "Progress monitoring"],
      icon: Users,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Digital Infuzon Website Migration",
      description: "Complete website migration from WordPress to Wix Standard, significantly improving user experience, performance, and maintainability.",
      longDescription: "Led a comprehensive website migration project, transitioning from a legacy WordPress system to a modern Wix Standard platform. The migration resulted in improved loading times, enhanced user experience, better mobile responsiveness, and simplified content management for the client.",
      technologies: ["Wix Standard", "JavaScript", "CSS3", "SEO Optimization", "Performance Tuning"],
      features: ["Improved performance", "Enhanced UX/UI", "Mobile optimization", "SEO improvements", "Easy content management"],
      icon: Globe,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects that demonstrate my expertise in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className={`animate-fade-in ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
                {/* Project Image/Visual */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className={`relative h-80 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-2xl overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent size={80} className="text-white opacity-80" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {project.technologies.slice(0, 3).join(', ')}
                          {project.technologies.length > 3 && ` +${project.technologies.length - 3} more`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <button className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                        <ExternalLink size={18} />
                        <span>View Project</span>
                      </button>
                      <button className="flex items-center space-x-2 px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                        <Github size={18} />
                        <span>View Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Let's discuss how we can create something amazing together.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-lg font-medium">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
