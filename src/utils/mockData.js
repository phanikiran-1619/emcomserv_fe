// Mock data for EmCom website
// This file contains all mock data used in the frontend before backend integration

export const companyInfo = {
  name: "EmCom",
  tagline: "Better Solutions For Your Business",
  description: "Empowering Innovations in Embedded & IoT Systems",
  mission: "We help companies build smart, secure, and scalable embedded communication solutions.",
  
  contact: {
    email: "info@emcomserv.com",
    phone: "+91 944 8641 262",
    address: "Beside Bhagani, Hoodi, Bangalore – 560048, INDIA"
  }
};

export const heroData = {
  title: "Better Solutions For Your Business",
  subtitle: "Empowering Innovations in Embedded & IoT Systems",
  description: "🚀 We help companies build smart, secure, and scalable embedded communication solutions.",
  ctaText: "Get Started",
  backgroundImages: [
    "https://images.unsplash.com/photo-1551703616-e5a729ff0185?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXN8ZW58MHx8fHwxNzUzMDkwMjQ0fDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1650530415027-dc9199f473ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxlbWJlZGRlZCUyMHN5c3RlbXN8ZW58MHx8fHwxNzUzMDkwMjQ0fDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1553341640-9397992456f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxJb1QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc1MzA5MDI1Mnww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1597787185613-cf51d79fa7e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxJb1QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc1MzA5MDI1Mnww&ixlib=rb-4.1.0&q=85"
  ]
};

export const aboutData = {
  title: "About Us",
  description: "At EmCom, we specialize in delivering cutting-edge training, development, and testing services in embedded systems and communication technologies. Our mission is to empower engineers and businesses to build world-class solutions.",
  technologies: [
    "Artificial Intelligence",
    "IoT Systems", 
    "Embedded Communications",
    "Cloud Integration"
  ],
  additionalInfo: "From Bluetooth and Zigbee to AWS and GCP – our team is equipped to support your tech journey."
};

export const philosophyData = {
  title: "Our Philosophy",
  principles: [
    {
      number: "01",
      title: "ACT",
      description: "We act responsibly, focusing on sustainable and efficient solutions."
    },
    {
      number: "02", 
      title: "PACT",
      description: "We partner closely with clients to build mutual growth and trust."
    },
    {
      number: "03",
      title: "IMPACT", 
      description: "Our work delivers measurable impact, driving innovation across industries."
    }
  ]
};

export const servicesData = {
  title: "What We Offer",
  description: "We combine deep industry knowledge with technical excellence to deliver:",
  services: [
    "Embedded Systems Development",
    "Cloud & Embedded Integration", 
    "Communication Protocol Engineering (COM / Ethernet)",
    "Test Automation & Validation",
    "Hardware Porting & Driver Development",
    "Training & Mentorship Programs"
  ]
};

export const whyEmComData = {
  title: "Why EmCom?",
  stats: [
    {
      percentage: "100%",
      title: "Expertise in Embedded Systems"
    },
    {
      percentage: "95%", 
      title: "Cloud & Embedded Integration"
    },
    {
      percentage: "95%",
      title: "COM & Ethernet Protocols" 
    },
    {
      percentage: "95%",
      title: "Communication Channel Optimization"
    }
  ]
};

export const industriesData = {
  title: "Industries We Serve",
  industries: [
    {
      name: "Embedded Product Companies",
      icon: "📡"
    },
    {
      name: "Cloud-based IoT Solutions", 
      icon: "☁️"
    },
    {
      name: "Automotive & Industrial Devices",
      icon: "🚗" 
    },
    {
      name: "Consumer Electronics",
      icon: "📱"
    }
  ]
};

export const ctaData = {
  title: "Looking to scale your product or improve your embedded architecture?",
  subtitle: "🎯 Let's Collaborate",
  description: "Our team is here to support your goals with reliable and innovative solutions.",
  ctaText: "Contact Us Now"
};

// Mock API functions
export const mockApi = {
  // Mock contact form submission
  submitContactForm: async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure randomly
        if (Math.random() > 0.1) {
          resolve({
            success: true,
            message: "Message sent successfully! We'll get back to you within 24 hours."
          });
        } else {
          reject(new Error("Failed to send message. Please try again."));
        }
      }, 2000);
    });
  },

  // Mock newsletter subscription
  subscribeNewsletter: async (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && email.includes('@')) {
          resolve({
            success: true,
            message: "Successfully subscribed to newsletter!"
          });
        } else {
          reject(new Error("Please enter a valid email address."));
        }
      }, 1000);
    });
  },

  // Mock consultation booking
  bookConsultation: async (_data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Consultation booked successfully! We'll send you a calendar invite.",
          consultationId: `CONS-${Date.now()}`
        });
      }, 1500);
    });
  }
};