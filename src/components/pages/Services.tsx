import React from 'react';
import { Microscope, Heart, Brain, Baby, FlaskConical, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FlaskConical,
      title: 'Blood Tests',
      description: 'Comprehensive blood analysis including CBC, chemistry panels, lipid profiles, and specialized blood work.',
      features: ['Complete Blood Count (CBC)', 'Basic Metabolic Panel', 'Lipid Profile', 'Liver Function Tests', 'Thyroid Panel']
    },
    {
      icon: Heart,
      title: 'Cardiac Testing',
      description: 'Specialized tests to assess heart health and cardiovascular risk factors.',
      features: ['Cardiac Enzymes', 'BNP/NT-proBNP', 'Troponin', 'CRP (C-Reactive Protein)', 'Homocysteine']
    },
    {
      icon: Brain,
      title: 'Neurological Testing',
      description: 'Advanced testing for neurological conditions and brain health assessment.',
      features: ['CSF Analysis', 'Alzheimer\'s Markers', 'Parkinson\'s Testing', 'Multiple Sclerosis Panel', 'Epilepsy Screening']
    },
    {
      icon: Baby,
      title: 'Pregnancy & Fertility',
      description: 'Comprehensive testing for pregnancy monitoring and fertility assessment.',
      features: ['hCG (Pregnancy Test)', 'Prenatal Screening', 'Fertility Hormones', 'Genetic Testing', 'NIPT Testing']
    },
    {
      icon: Microscope,
      title: 'Pathology Services',
      description: 'Expert tissue analysis and diagnostic pathology services.',
      features: ['Biopsy Analysis', 'Cytology', 'Immunohistochemistry', 'Molecular Pathology', 'Cancer Screening']
    },
    {
      icon: Shield,
      title: 'Infectious Disease',
      description: 'Comprehensive testing for bacterial, viral, and parasitic infections.',
      features: ['COVID-19 Testing', 'STD Panel', 'Hepatitis Screening', 'HIV Testing', 'Tuberculosis Testing']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive laboratory testing services powered by cutting-edge technology 
              and delivered by experienced medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Available Tests:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple steps to get your lab results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Schedule',
                description: 'Book your appointment online or visit one of our convenient locations.'
              },
              {
                step: '2',
                title: 'Sample Collection',
                description: 'Our trained professionals collect your samples with care and precision.'
              },
              {
                step: '3',
                title: 'Analysis',
                description: 'State-of-the-art equipment and expert technicians analyze your samples.'
              },
              {
                step: '4',
                title: 'Results',
                description: 'Access your secure results online with detailed explanations.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quality You Can Trust</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our laboratory is accredited by the College of American Pathologists (CAP) 
                and certified by the Clinical Laboratory Improvement Amendments (CLIA), 
                ensuring the highest standards of quality and accuracy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">CAP Accredited Laboratory</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">CLIA Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">ISO 15189 Compliant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 Quality Monitoring</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Quality assurance"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Lab Testing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to schedule your appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/register"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;