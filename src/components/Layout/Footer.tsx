import React from 'react';
import { FlaskConical, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FlaskConical className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LabCorp</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner in laboratory testing services. We provide accurate, 
              reliable, and timely lab results to help you make informed health decisions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@labcorp.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">123 Medical Center Dr, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blood Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Urine Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Genetic Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pathology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Radiology</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LabCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;