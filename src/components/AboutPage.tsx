
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate Full Stack Software Development Engineer with hands-on experience 
            in creating scalable, production-ready applications that solve real-world problems.
          </p>
        </div>

        {/* Main Bio Section */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a dedicated Full Stack Software Development Engineer who thrives on building 
                innovative solutions from the ground up. My expertise spans the entire technology 
                stack, with a particular focus on modern JavaScript/TypeScript ecosystems.
              </p>
              <p>
                My approach to development is rooted in understanding business needs and translating 
                them into robust, scalable applications. I specialize in frontend technologies like 
                Next.js with ShadCN components and Lucide React icons, while also architecting 
                powerful backend systems using Node.js with MongoDB and WebSocket integration.
              </p>
              <p>
                What sets me apart is my commitment to end-to-end development excellence - from 
                initial concept and design to deployment and ongoing maintenance. I believe in 
                writing clean, maintainable code that not only works today but scales for tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                <p className="text-gray-600 mb-2">Touchcore Systems</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>October 2024 - Present</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Leading full-stack development initiatives, architecting scalable solutions, 
                  and delivering high-quality software products. Responsible for end-to-end 
                  development cycles, from requirements analysis to deployment and maintenance, 
                  ensuring optimal performance and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {/* B.Tech */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Bachelor of Technology</h3>
                  <p className="text-gray-600 mb-1">Electronics and Computer Engineering</p>
                  <p className="text-gray-500 text-sm mb-2">Vignan's Institute of Information and Technology</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>2020 - 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Intermediate (Class 12)</h3>
                  <p className="text-gray-500 text-sm mb-2">Srichaitanya Junior College</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>2018 - 2020</span>
                  </div>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Secondary School (Class 10)</h3>
                  <p className="text-gray-500 text-sm mb-2">Srichaitanya Techno School</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>2017 - 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
              <div className="space-y-3">
                {['Next.js', 'React', 'TypeScript', 'JavaScript', 'ShadCN UI', 'Tailwind CSS', 'Lucide React'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Backend Technologies</h3>
              <div className="space-y-3">
                {['Node.js', 'MongoDB', 'WebSocket', 'REST APIs', 'Express.js', 'Database Design', 'Server Architecture'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
