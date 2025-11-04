import React, { useState } from 'react';
import logo from './assets/markabinet-logo.png';

// Header Component
const Header = () => {
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
            <a href="#pricing" className="text-gray-600 hover:text-markabinet-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-markabinet-600 font-medium transition-colors">
              About
            </a>
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
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-markabinet-600 font-medium">
              Pricing
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-markabinet-600 font-medium">
              About
            </a>
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
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-markabinet-50 pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Wealth Managers with{' '}
            <span className="bg-gradient-to-r from-markabinet-600 to-purple-600 bg-clip-text text-transparent">
              AI Precision
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your wealth management practice with intelligent automation, 
            personalized client insights, and streamlined compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-markabinet-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-markabinet-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Book a Demo
            </button>
            <button className="bg-white text-markabinet-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-markabinet-600 hover:bg-markabinet-50 transition-all duration-200">
              Get Started
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
      title: 'Dashboard',
      description: 'Comprehensive overview of your portfolio performance, client activities, and key metrics in one intuitive interface.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Client Insights',
      description: 'AI-powered analytics to understand client behavior, preferences, and investment patterns for personalized service.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Smart Communication',
      description: 'Automated client communications, meeting scheduling, and follow-up reminders to enhance relationship management.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Compliance',
      description: 'Streamlined regulatory compliance with automated reporting, audit trails, and risk assessment tools.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Wealth Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your clients, grow your business, and stay compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

// Demo Section Component
const Demo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const brochurePages = [
    {
      title: "Portfolio Dashboard",
      subtitle: "Real-time insights at your fingertips",
      content: (
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="col-span-2 space-y-4">
            <div className="bg-gradient-to-r from-markabinet-600 to-purple-600 h-12 rounded-lg flex items-center px-4">
              <span className="text-white font-semibold">Portfolio Performance</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-green-600 text-2xl font-bold">+12.5%</div>
                <div className="text-gray-600 text-sm">YTD Returns</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-blue-600 text-2xl font-bold">$2.4M</div>
                <div className="text-gray-600 text-sm">Total AUM</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tech Stocks</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-markabinet-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bonds</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Top Performers</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">AAPL</span>
                  <span className="text-sm text-green-600">+5.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">MSFT</span>
                  <span className="text-sm text-green-600">+3.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">GOOGL</span>
                  <span className="text-sm text-green-600">+2.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Client Management",
      subtitle: "Personalized insights for every client",
      content: (
        <div className="grid grid-cols-2 gap-6 h-full">
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-markabinet-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-500">High Net Worth</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Portfolio Value:</span>
                  <div className="font-semibold">$1.2M</div>
                </div>
                <div>
                  <span className="text-gray-500">Risk Level:</span>
                  <div className="font-semibold text-amber-600">Moderate</div>
                </div>
              </div>
            </div>
            <div className="bg-markabinet-50 border border-markabinet-200 rounded-lg p-4">
              <h4 className="font-semibold text-markabinet-800 mb-2">AI Recommendations</h4>
              <ul className="text-sm text-markabinet-700 space-y-1">
                <li>• Consider ESG investment options</li>
                <li>• Rebalance tech allocation</li>
                <li>• Schedule quarterly review</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Portfolio rebalanced</span>
                  <span className="text-xs text-gray-400 ml-auto">2 days ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Meeting scheduled</span>
                  <span className="text-xs text-gray-400 ml-auto">1 week ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Risk assessment updated</span>
                  <span className="text-xs text-gray-400 ml-auto">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Compliance & Reporting",
      subtitle: "Automated compliance made simple",
      content: (
        <div className="grid grid-cols-3 gap-6 h-full">
          <div className="col-span-2 space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-green-800">Compliance Status: All Clear</span>
              </div>
              <p className="text-sm text-green-700">All regulatory requirements are up to date</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Quarterly Reports</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Q4 2024</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Q1 2025</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Audit Trail</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• 247 transactions logged</div>
                  <div>• 15 client interactions</div>
                  <div>• 8 compliance checks passed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-markabinet-50 border border-markabinet-200 rounded-lg p-4">
              <h4 className="font-semibold text-markabinet-800 mb-2">Upcoming Deadlines</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-markabinet-700">Form ADV Update</span>
                  <span className="text-markabinet-600 font-medium">15 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-markabinet-700">Annual Audit</span>
                  <span className="text-markabinet-600 font-medium">45 days</span>
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
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Markabinet.ai Platform
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our platform transforms wealth management through intelligent design.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Slide Container */}
          <div className="relative h-96 md:h-[500px]">
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
                <div className="h-full p-8 md:p-12">
                  {/* Page Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {page.title}
                    </h3>
                    <p className="text-lg text-gray-600">{page.subtitle}</p>
                  </div>
                  
                  {/* Page Content */}
                  <div className="h-3/4">
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
const Footer = () => {
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
              Transforming wealth management through intelligent automation and AI-powered insights.
            </p>
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
                  avichal@markabinet.ai
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
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
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
