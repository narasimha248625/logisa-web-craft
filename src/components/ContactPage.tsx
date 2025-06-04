import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    setIsError(false);

    try {
      const res = await fetch('https://formspree.io/f/xeokoolj', { // Replace with your Formspree endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage('Thank you! Your message has been sent successfully.');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setIsError(true);
      setResponseMessage(error.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            
            <div className="space-y-6 mb-12">
              {/* Email */}
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a 
                    href="mailto:varahanarasimhalogisa25@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    varahanarasimhalogisa25@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <a 
                    href="tel:+917995853246"
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    +91 7995853246
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-black text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Quick Response Guaranteed</h3>
              <p className="text-gray-300 mb-4">
                I typically respond to all inquiries within 24 hours. Whether you have a question 
                about a project or want to discuss a new opportunity, I'm here to help.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-sm">Usually responds within a few hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-700">{responseMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg font-medium"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              From initial concept to final delivery, I'm committed to turning your vision into reality. 
              Let's discuss how we can work together to create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:varahanarasimhalogisa25@gmail.com"
                className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-lg font-medium"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+917995853246"
                className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 text-lg font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
