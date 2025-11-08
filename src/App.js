import React, { useState } from 'react';
import logo from './assets/markabinet-logo.png';

// Modal Component for Book a Demo
const BookDemoModal = ({ isOpen, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  if (!isOpen) return null;

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] max-h-[700px] transform transition-all duration-300 scale-100 opacity-100 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book Your Demo</h2>
            <p className="text-gray-600 mt-1">Schedule a personalized demo with our team</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Zoho Booking Calendar Embed */}
        <div className="flex-1 p-4">
          <div className="w-full h-full flex items-center justify-center">
            {/* Loading indicator */}
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-markabinet-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Loading calendar...</p>
                </div>
              </div>
            )}
            
            {/* Error fallback */}
            {iframeError && (
              <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-markabinet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-markabinet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Your Demo</h3>
                  <p className="text-gray-600 mb-4">Let's schedule a personalized demo of Markabinet.ai for your institution.</p>
                  <div className="space-y-3">
                    <a 
                      href="https://calendar.zoho.in/eventreqForm/zz0802123089e63700ac6d73b40ed116179bd618620a8bb8d8bf9e5219dcb38117a5b1ca37f6543a3273f79ef57a22d504b47c1a59?theme=0&l=en&tz=Asia%2FKolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-markabinet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-markabinet-700 transition-colors"
                    >
                      Open Calendar in New Tab
                    </a>
                    <div className="text-sm text-gray-500">
                      <p>Or contact Avichal Gupta directly:</p>
                      <p className="mt-1">
                        <a href="mailto:avichal.gupta@markabinet.com" className="text-markabinet-600 hover:underline">
                          avichal.gupta@markabinet.com
                        </a>
                      </p>
                      <p>
                        <a href="tel:+918273000955" className="text-markabinet-600 hover:underline">
                          +91 8273 000 955
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <iframe
              src="https://calendar.zoho.in/eventreqForm/zz0802123089e63700ac6d73b40ed116179bd618620a8bb8d8bf9e5219dcb38117a5b1ca37f6543a3273f79ef57a22d504b47c1a59?theme=0&l=en&tz=Asia%2FKolkata"
              title="avichal.gupta"
              frameBorder="0"
              scrolling="no"
              marginWidth="0"
              border="0px"
              marginHeight="0"
              height="350px"
              width="432px"
              allowTransparency="true"
              align="center"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              className={`rounded-lg mx-auto ${!iframeLoaded ? 'invisible' : 'visible'}`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Us Modal Component
const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        {/* Header */}
        <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-200 rounded-t-2xl">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About Markabinet.ai</h2>
            <p className="text-gray-600 mt-1">Transforming education through intelligent technology</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Mission Section */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-markabinet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing higher education by empowering colleges and universities with AI-driven CRM solutions 
              that streamline admissions, enhance student engagement, and boost enrollment success rates.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded by education and technology experts, Markabinet.ai was born from the frustration of seeing 
                talented students slip through the cracks due to inefficient admission processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We've dedicated ourselves to creating intelligent solutions that ensure no student inquiry goes 
                unanswered and every potential candidate receives the attention they deserve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-markabinet-50 to-purple-50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-markabinet-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">500+</span>
                  </div>
                  <span className="text-gray-800 font-semibold">Educational Institutions Served</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">95%</span>
                  </div>
                  <span className="text-gray-800 font-semibold">Client Satisfaction Rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2M+</span>
                  </div>
                  <span className="text-gray-800 font-semibold">Student Inquiries Processed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-markabinet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Continuously advancing technology to solve education's biggest challenges</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Student Success</h4>
                <p className="text-gray-600 text-sm">Every decision we make prioritizes student outcomes and experiences</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">Delivering exceptional quality in every product and service we provide</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center bg-gradient-to-r from-markabinet-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Institution?</h3>
            <p className="text-markabinet-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of forward-thinking colleges and universities that trust Markabinet.ai 
              to streamline their admissions and boost enrollment success.
            </p>
            <button 
              onClick={onClose}
              className="bg-white text-markabinet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = ({ onShowAbout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Markabinet.ai" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-markabinet-600 font-medium transition-colors">
              Features
            </a>
            <button onClick={onShowAbout} className="text-gray-600 hover:text-markabinet-600 font-medium transition-colors">
              About
            </button>
            <a href="#contact" className="text-gray-600 hover:text-markabinet-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-markabinet-600 font-medium">
              Features
            </a>
            <button onClick={() => onShowAbout()} className="block px-3 py-2 text-gray-600 hover:text-markabinet-600 font-medium text-left w-full">
              About
            </button>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-markabinet-600 font-medium">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = ({ onBookDemo }) => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-markabinet-50 pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-markabinet-600 to-purple-600 bg-clip-text text-transparent">
              Where Student Journeys Meet Smart Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your admissions process with intelligent lead management, 
            automated student engagement, and data-driven insights that boost enrollment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onBookDemo}
              className="bg-markabinet-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-markabinet-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const Features = () => {
  const features = [
    {
      title: 'Smart Lead Management',
      description: 'Capture and organize student inquiries from multiple channels with AI-powered lead scoring and automated follow-up sequences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Admission Pipeline',
      description: 'Track every student from inquiry to enrollment with visual pipeline management and automated stage progression.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Student 360° Dashboard',
      description: 'Complete student profiles with interaction history, communication logs, and personalized engagement insights.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'WhatsApp Integration',
      description: 'Automated WhatsApp and email campaigns with personalized messaging and instant student communication tracking.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Counselor Productivity',
      description: 'Task automation, follow-up reminders, and performance analytics to maximize counselor efficiency and student engagement.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Analytics & Reports',
      description: 'Real-time enrollment insights, conversion metrics, and customizable reports for data-driven admission strategies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Colleges Choose Markabinet.ai
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline admissions, engage students, and boost enrollment rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-markabinet-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-markabinet-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const Benefits = () => {
  const benefits = [
    {
      stat: '5x',
      description: 'Faster lead follow-up',
      detail: 'Automated responses within minutes'
    },
    {
      stat: '40%',
      description: 'Higher admission conversion',
      detail: 'From inquiry to enrollment'
    },
    {
      stat: '0',
      description: 'Missed inquiries',
      detail: '24/7 automated lead capture'
    },
    {
      stat: '100%',
      description: 'Accountability',
      detail: 'Complete audit trail & reporting'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-markabinet-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results for Higher Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 500+ colleges and universities transforming their admissions process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-markabinet-600 mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.description}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Demo Section Component
const Demo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const brochurePages = [
    {
      title: "Admissions Dashboard",
      subtitle: "Real-time enrollment insights at your fingertips",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          <div className="md:col-span-2 space-y-4">
            <div className="bg-gradient-to-r from-markabinet-600 to-purple-600 h-10 md:h-12 rounded-lg flex items-center px-4">
              <span className="text-white font-semibold text-sm md:text-base">Enrollment Performance</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4">
                <div className="text-green-600 text-xl md:text-2xl font-bold">+25%</div>
                <div className="text-gray-600 text-xs md:text-sm">Enrollment Growth</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4">
                <div className="text-blue-600 text-xl md:text-2xl font-bold">2,847</div>
                <div className="text-gray-600 text-xs md:text-sm">Active Inquiries</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">Engineering</span>
                <div className="w-20 md:w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-markabinet-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">Business</span>
                <div className="w-20 md:w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 hidden md:block">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Top Programs</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-600">Computer Science</span>
                  <span className="text-xs md:text-sm text-green-600">+12%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-600">MBA</span>
                  <span className="text-xs md:text-sm text-green-600">+8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-600">Medicine</span>
                  <span className="text-xs md:text-sm text-green-600">+15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Student Management",
      subtitle: "Complete student journey tracking",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-markabinet-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs md:text-sm">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Ananya Sharma</h4>
                  <p className="text-xs md:text-sm text-gray-500">Computer Science Applicant</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                <div>
                  <span className="text-gray-500">Application Status:</span>
                  <div className="font-semibold text-blue-600">Under Review</div>
                </div>
                <div>
                  <span className="text-gray-500">Score:</span>
                  <div className="font-semibold text-green-600">95/100</div>
                </div>
              </div>
            </div>
            <div className="bg-markabinet-50 border border-markabinet-200 rounded-lg p-3 md:p-4">
              <h4 className="font-semibold text-markabinet-800 mb-2 text-sm md:text-base">AI Recommendations</h4>
              <ul className="text-xs md:text-sm text-markabinet-700 space-y-1">
                <li>• High probability candidate</li>
                <li>• Schedule interview call</li>
                <li>• Send scholarship info</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Recent Activity</h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-xs md:text-sm text-gray-600">Application submitted</span>
                  <span className="text-xs text-gray-400 ml-auto">2 days ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-xs md:text-sm text-gray-600">WhatsApp follow-up sent</span>
                  <span className="text-xs text-gray-400 ml-auto">1 week ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-xs md:text-sm text-gray-600">Initial inquiry received</span>
                  <span className="text-xs text-gray-400 ml-auto">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Communication Hub",
      subtitle: "Automated engagement that converts",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-full">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-green-800 text-sm md:text-base">WhatsApp Campaign: Active</span>
              </div>
              <p className="text-xs md:text-sm text-green-700">847 students engaged in last 24 hours</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Message Templates</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-gray-600">Welcome Message</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-gray-600">Follow-up Sequence</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Scheduled</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Response Rates</h4>
                <div className="text-xs md:text-sm text-gray-600 space-y-1">
                  <div>• WhatsApp: 89% open rate</div>
                  <div>• Email: 76% open rate</div>
                  <div>• SMS: 94% delivery rate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-4 lg:mt-0">
            <div className="bg-markabinet-50 border border-markabinet-200 rounded-lg p-3 md:p-4">
              <h4 className="font-semibold text-markabinet-800 mb-2 text-sm md:text-base">Today's Tasks</h4>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-markabinet-700">Follow-up calls</span>
                  <span className="text-markabinet-600 font-medium">23 pending</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-markabinet-700">Application reviews</span>
                  <span className="text-markabinet-600 font-medium">15 pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brochurePages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brochurePages.length) % brochurePages.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brochurePages.length);
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [brochurePages.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Markabinet.ai in Action
          </h2>
          <p className="text-lg text-gray-600">
            Discover how colleges are transforming their admissions with our intelligent platform.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Slide Container */}
          <div className="relative h-[500px] md:h-[550px] lg:h-[600px]">
            {brochurePages.map((page, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="h-full p-3 md:p-6 lg:p-8 overflow-y-auto">
                  {/* Page Header */}
                  <div className="mb-3 md:mb-6">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {page.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600">{page.subtitle}</p>
                  </div>
                  
                  {/* Page Content */}
                  <div className="h-4/5 md:h-3/4">
                    {page.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="ml-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5 text-markabinet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="mr-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5 text-markabinet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {brochurePages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-markabinet-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Page Counter */}
          <div className="absolute top-6 right-6 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-medium text-gray-700">
              {currentSlide + 1} / {brochurePages.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ onBookDemo }) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-markabinet-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">Markabinet.ai</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The Smart CRM for Smarter Campuses — transforming admissions through intelligent automation and AI-powered insights.
            </p>
            <button 
              onClick={onBookDemo}
              className="bg-markabinet-600 hover:bg-markabinet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Book a Demo
            </button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Avichal Gupta</p>
                <p className="text-sm text-gray-400">Sales Lead</p>
              </div>
              <div className="space-y-2">
                <a href="mailto:avichal@markabinet.ai" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  avichal.gupta@markabinet.com
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 8273000955
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Markabinet.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  return (
    <div className="App min-h-screen bg-white">
      <Header onShowAbout={handleShowAbout} />
      <main>
        <Hero onBookDemo={handleBookDemo} />
        <Features />
        <Benefits />
        <Demo />
      </main>
      <Footer onBookDemo={handleBookDemo} />
      <BookDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <AboutModal isOpen={showAbout} onClose={handleCloseAbout} />
    </div>
  );
}

export default App;
