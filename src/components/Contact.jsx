import React, { useState } from 'react';
import { Send, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - replace with actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully! ✨",
        description: "We'll get back to you within 24 hours. Thank you for reaching out!",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 professional-dots-background opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-12 group hover:scale-105 transform duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-2 transition-transform duration-200" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="text-center space-y-8">
            {/* Animated Logo */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse-magic"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500">
                  <img 
                    src="/logo.png" 
                    alt="EmCom Logo" 
                    className="w-14 h-14 object-contain animate-pulse-smooth group-hover:brightness-110 transition-all duration-500"
                  />
                  {/* Sparkle Effects */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-gray-900 animate-text-glow-subtle">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to transform your embedded systems? Let's discuss your project requirements and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 professional-dots-background opacity-30"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4 animate-text-glow-subtle">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                    placeholder="+91 000 000 0000"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="w-full text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-300 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-magic"></div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none btn-magical"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending Magic...
                      </>
                    ) : (
                      <span className="flex items-center space-x-3">
                        <span>Send Message</span>
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-16 pt-12 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center space-x-3 text-green-600 mb-6">
                <CheckCircle className="w-6 h-6 animate-pulse" />
                <span className="font-bold text-lg">We typically respond within 24 hours</span>
              </div>
              <p className="text-gray-600 text-lg">
                For urgent matters, feel free to call us directly at{' '}
                <a href="tel:+919448641262" className="text-blue-600 hover:text-blue-700 font-bold hover:underline transition-colors duration-300">
                  +91 944 8641 262
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Email us at:{' '}
                <a href="mailto:info@emcomserv.com" className="text-blue-600 hover:text-blue-700 font-bold hover:underline transition-colors duration-300">
                  info@emcomserv.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Address: Beside Bhagani, Hoodi, Bangalore – 560048, INDIA
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;