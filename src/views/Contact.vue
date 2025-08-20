<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p class="text-xl text-gray-300 mb-8">Let's discuss your project and bring your ideas to life</p>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Form -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Diana Khayenzeli *</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition-all duration-300"
                placeholder="John Doe"
              >
            </div>
            
            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition-all duration-300"
                placeholder="john@example.com"
              >
            </div>
            
            <!-- Subject -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <select 
                v-model="form.subject"
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition-all duration-300"
              >
                <option value="">Select a subject</option>
                <option value="web-development">Web Development</option>
                <option value="consultation">Technical Consultation</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <!-- Budget -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Project Budget</label>
              <select 
                v-model="form.budget"
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition-all duration-300"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
              </select>
            </div>
            
            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Message *</label>
              <textarea 
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition-all duration-300 resize-vertical"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              ></textarea>
            </div>
            
            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Send Message
              </span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
            
            <!-- Success/Error Messages -->
            <div v-if="submitMessage" class="p-4 rounded-lg border transition-all duration-300" :class="submitSuccess ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-red-500/20 text-red-300 border-red-500/30'">
              <div class="flex items-center">
                <svg v-if="submitSuccess" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <svg v-else class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
                {{ submitMessage }}
              </div>
            </div>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-8">
          
          <!-- Contact Details -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">Email</h4>
                  <p class="text-gray-400">{{ contactInfo.email }}</p>
                  <p class="text-gray-500 text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">Phone</h4>
                  <p class="text-gray-400">{{ contactInfo.phone }}</p>
                  <p class="text-gray-500 text-sm">Available Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">Location</h4>
                  <p class="text-gray-400">{{ contactInfo.location }}</p>
                  <p class="text-gray-500 text-sm">Open to remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            
            <div class="grid grid-cols-2 gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple-400 transition-all duration-300 group"
              >
                <div class="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <component :is="social.icon" class="w-6 h-6 text-purple-400"></component>
                </div>
                <div>
                  <div class="text-white font-medium">{{ social.name }}</div>
                  <div class="text-gray-400 text-sm">{{ social.handle }}</div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Quick Response Times -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6">Response Times</h3>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Email Inquiries</span>
                <span class="text-purple-400 font-semibold">< 24 hours</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Project Proposals</span>
                <span class="text-purple-400 font-semibold">2-3 days</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Urgent Issues</span>
                <span class="text-purple-400 font-semibold">Same day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="faq in faqs" :key="faq.question" class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h4 class="text-lg font-semibold text-white mb-3">{{ faq.question }}</h4>
            <p class="text-gray-400 text-sm leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p class="text-gray-300 mb-6">Let's schedule a free consultation to discuss your needs and how I can help</p>
          <button 
            @click="scrollToForm"
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
      },
      
      isSubmitting: false,
      submitMessage: '',
      submitSuccess: false,
      
      contactInfo: {
        email: 'your.email@example.com',
        phone: '+1 (555) 123-4567',
        location: 'Your City, Country'
      },
      
      socialLinks: [
        {
          name: 'LinkedIn',
          handle: '@yourlinkedin',
          icon: 'LinkedInIcon',
          url: 'https://linkedin.com/in/yourprofile'
        },
        {
          name: 'GitHub',
          handle: '@yourgithub',
          icon: 'GitHubIcon',
          url: 'https://github.com/yourprofile'
        },
        {
          name: 'Twitter',
          handle: '@yourtwitter',
          icon: 'TwitterIcon',
          url: 'https://twitter.com/yourprofile'
        },
        {
          name: 'Instagram',
          handle: '@yourinstagram',
          icon: 'InstagramIcon',
          url: 'https://instagram.com/yourprofile'
        }
      ],
      
      faqs: [
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary based on complexity, but most websites take 2-6 weeks, while web applications can take 1-3 months. I\'ll provide a detailed timeline during our consultation.'
        },
        {
          question: 'Do you work with international clients?',
          answer: 'Absolutely! I work with clients worldwide and am experienced in remote collaboration. I\'m flexible with time zones and communication preferences.'
        },
        {
          question: 'What\'s your payment structure?',
          answer: 'I typically work with a 50% upfront payment and 50% upon completion for smaller projects. Larger projects are broken into milestones with payments at each stage.'
        },
        {
          question: 'Do you provide ongoing maintenance?',
          answer: 'Yes, I offer maintenance packages to keep your website updated, secure, and running smoothly. This includes regular updates, backups, and technical support.'
        }
      ]
    }
  },
  
  components: {
    LinkedInIcon: {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    GitHubIcon: {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    },
    TwitterIcon: {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
    },
    InstagramIcon: {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    }
  },
  
  methods: {
    async submitForm() {
      // Basic form validation
      if (!this.form.name || !this.form.email || !this.form.message) {
        this.submitSuccess = false;
        this.submitMessage = 'Please fill in all required fields.';
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.submitSuccess = false;
        this.submitMessage = 'Please enter a valid email address.';
        return;
      }

      this.isSubmitting = true;
      this.submitMessage = '';
      
      try {
        // Simulate form submission with delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // In a real application, you would send the form data to your backend
        console.log('Form submitted:', this.form);
        
        this.submitSuccess = true;
        this.submitMessage = 'Thank you for your message! I\'ll get back to you within 24 hours.';
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          budget: '',
          message: ''
        };
        
      } catch (error) {
        this.submitSuccess = false;
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
        console.error('Form submission error:', error);
      } finally {
        this.isSubmitting = false;
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    },
    
    scrollToForm() {
      const form = document.querySelector('form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Focus on first input after scroll
        setTimeout(() => {
          const firstInput = form.querySelector('input');
          if (firstInput) {
            firstInput.focus();
          }
        }, 500);
      }
    }
  },

  mounted() {
    // Add some entrance animations or other initialization if needed
    console.log('Contact page mounted');
  }
}
</script>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.5);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.7);
}

/* Focus states for better accessibility */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
}
</style>