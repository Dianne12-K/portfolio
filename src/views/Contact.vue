<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p class="text-xl text-gray-300 mb-8">Let's discuss your geospatial project and create innovative solutions together</p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Form -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
              <InputText 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <InputText 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <!-- Subject -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
              <Dropdown 
                v-model="form.subject"
                :options="projectTypes"
                option-label="label"
                option-value="value"
                placeholder="Select project type"
                class="w-full bg-white/5 border border-white/20 rounded-lg text-white focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300"
              />
            </div>
            
            <!-- Budget -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Project Budget (USD)</label>
              <Dropdown 
                v-model="form.budget"
                :options="budgetRanges"
                option-label="label"
                option-value="value"
                placeholder="Select budget range"
                class="w-full bg-white/5 border border-white/20 rounded-lg text-white focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300"
              />
            </div>
            
            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
              <Textarea 
                v-model="form.message"
                required
                :rows="5"
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300 resize-vertical"
                placeholder="Tell me about your mapping needs, survey requirements, or GIS project goals..."
              />
            </div>
            
            <!-- Submit Button -->
            <Button 
              type="submit"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-0"
            >
              <template #default>
                <i class="pi pi-send mr-2"></i>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </template>
            </Button>
            
            <!-- Success/Error Messages -->
            <Message v-if="submitMessage" :severity="submitSuccess ? 'success' : 'error'" :closable="false">
              {{ submitMessage }}
            </Message>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-8">
          
          <!-- Contact Details -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">Email</h4>
                  <p class="text-gray-400">{{ contactInfo.email }}</p>
                  <p class="text-gray-500 text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-phone text-white text-xl"></i>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">Phone</h4>
                  <p class="text-gray-400">{{ contactInfo.phone }}</p>
                  <p class="text-gray-500 text-sm">Available Mon-Fri, 9AM-6PM EAT</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-map-marker text-white text-xl"></i>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">Location</h4>
                  <p class="text-gray-400">{{ contactInfo.location }}</p>
                  <p class="text-gray-500 text-sm">Available for field work across Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            
            <div class="grid grid-cols-1 gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-green-400 transition-all duration-300 group"
              >
                <div class="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i :class="social.icon" class="text-green-400 text-xl"></i>
                </div>
                <div class="flex-1">
                  <div class="text-white font-medium">{{ social.name }}</div>
                  <div class="text-gray-400 text-sm">{{ social.handle }}</div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Expertise Areas -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6">My Expertise</h3>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-300">GIS Analysis & Mapping</span>
                <i class="pi pi-check-circle text-green-400"></i>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Land Surveying & Cadastral</span>
                <i class="pi pi-check-circle text-green-400"></i>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Remote Sensing Analysis</span>
                <i class="pi pi-check-circle text-green-400"></i>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Web Development (GIS Apps)</span>
                <i class="pi pi-check-circle text-green-400"></i>
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
        <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30 backdrop-blur-sm">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Your Geospatial Project?</h2>
          <p class="text-gray-300 mb-6">Let's schedule a free consultation to discuss your mapping and GIS needs</p>
          <Button 
            @click="scrollToForm"
            class="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-8 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 border-0"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Message from 'primevue/message'

// Form data
const form = ref({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Project types based on Diana's expertise
const projectTypes = ref([
  { label: 'GIS Analysis & Mapping', value: 'gis-analysis' },
  { label: 'Land Surveying & Cadastral', value: 'land-surveying' },
  { label: 'Remote Sensing Analysis', value: 'remote-sensing' },
  { label: 'Web GIS Development', value: 'web-gis' },
  { label: 'Environmental Monitoring', value: 'environmental' },
  { label: 'Infrastructure Planning', value: 'infrastructure' },
  { label: 'Consultation & Training', value: 'consultation' },
  { label: 'Other', value: 'other' }
])

// Budget ranges appropriate for geospatial projects
const budgetRanges = ref([
  { label: 'Under $1,000', value: 'under-1k' },
  { label: '$1,000 - $5,000', value: '1k-5k' },
  { label: '$5,000 - $10,000', value: '5k-10k' },
  { label: '$10,000 - $25,000', value: '10k-25k' },
  { label: '$25,000+', value: '25k-plus' }
])

// Contact information from Diana's resume
const contactInfo = ref({
  email: 'khayenzelidianne@gmail.com',
  phone: '+254 757 054 191',
  location: 'Nairobi, Kenya'
})

// Social media links
const socialLinks = ref([
  {
    name: 'LinkedIn',
    handle: 'diana-khayenzeli',
    icon: 'pi pi-linkedin',
    url: 'https://www.linkedin.com/in/diana-khayenzeli-/'
  },
  {
    name: 'GitHub',
    handle: '@diana-khayenzeli',
    icon: 'pi pi-github',
    url: 'https://github.com/diana-khayenzeli'
  },
  {
    name: 'Email',
    handle: 'khayenzelidianne@gmail.com',
    icon: 'pi pi-envelope',
    url: 'mailto:khayenzelidianne@gmail.com'
  }
])

// FAQs specific to geospatial services
const faqs = ref([
  {
    question: 'What types of surveying equipment do you use?',
    answer: 'I use modern surveying equipment including RTK-GPS, Total Station, theodolites, and leveling machines to ensure high precision in data collection for cadastral, topographical, and engineering surveys.'
  },
  {
    question: 'Do you work on projects outside Nairobi?',
    answer: 'Yes! I\'ve worked across Kenya including Vihiga County and various semi-arid regions. I\'m available for field work nationwide and have experience in diverse geographical conditions.'
  },
  {
    question: 'What GIS software do you specialize in?',
    answer: 'I have advanced proficiency in ArcGIS, QGIS, Erdas Imagine, AutoCAD, and Google Earth Engine. I also develop custom web GIS applications using Vue.js and spatial databases like PostgreSQL.'
  },
  {
    question: 'How long do mapping projects typically take?',
    answer: 'Project timelines vary based on area size and complexity. Small cadastral surveys take 1-2 weeks, while comprehensive GIS analysis projects can take 1-2 months. I\'ll provide detailed timelines during consultation.'
  },
  {
    question: 'Do you provide training in GIS software?',
    answer: 'Yes, I offer training and consultation services in GIS software, remote sensing techniques, and geospatial analysis methods. I can provide both individual and group training sessions.'
  },
  {
    question: 'Can you help with climate change and sustainability projects?',
    answer: 'Absolutely! I\'m passionate about using geospatial technologies for climate solutions, food security, and sustainable development. I have experience in environmental monitoring and risk assessment projects.'
  }
])

// Form submission handler
const submitForm = async () => {
  // Basic form validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    submitSuccess.value = false
    submitMessage.value = 'Please fill in all required fields.'
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    submitSuccess.value = false
    submitMessage.value = 'Please enter a valid email address.'
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission with delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', form.value)
    
    submitSuccess.value = true
    submitMessage.value = 'Thank you for your message! I\'ll get back to you within 24 hours to discuss your geospatial project.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: ''
    }
    
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again or contact me directly at khayenzelidianne@gmail.com'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
    
    // Auto-hide message after 8 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 8000)
  }
}

// Scroll to form function
const scrollToForm = () => {
  const form = document.querySelector('form')
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Focus on first input after scroll
    setTimeout(() => {
      const firstInput = form.querySelector('input')
      if (firstInput) {
        firstInput.focus()
      }
    }, 500)
  }
}
</script>

<style scoped>
/* Custom scrollbar for textarea */
:deep(.p-inputtextarea) {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

:deep(.p-dropdown) {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

:deep(.p-dropdown .p-dropdown-label) {
  color: white !important;
}

:deep(.p-dropdown .p-dropdown-trigger) {
  color: rgba(255, 255, 255, 0.7) !important;
}

:deep(.p-inputtext) {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

:deep(.p-inputtext::placeholder) {
  color: rgba(255, 255, 255, 0.4) !important;
}

/* Focus states */
:deep(.p-inputtext:focus) {
  border-color: rgb(34, 197, 94) !important;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5) !important;
}

:deep(.p-dropdown:focus) {
  border-color: rgb(34, 197, 94) !important;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5) !important;
}

:deep(.p-inputtextarea:focus) {
  border-color: rgb(34, 197, 94) !important;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5) !important;
}
</style>