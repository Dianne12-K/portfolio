<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">My Services</h1>
        <p class="text-xl text-gray-300 mb-8">Transforming ideas into digital reality with expert development solutions</p>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <!-- Main Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div v-for="service in mainServices" :key="service.title" class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</div>
          <h3 class="text-2xl font-bold text-white mb-4">{{ service.title }}</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">{{ service.description }}</p>
          
          <!-- Features List -->
          <ul class="space-y-2 mb-6">
            <li v-for="feature in service.features" :key="feature" class="flex items-center text-gray-400">
              <span class="text-purple-400 mr-2">✓</span>
              {{ feature }}
            </li>
          </ul>
          
          <!-- Pricing -->
          <div class="flex items-center justify-between pt-4 border-t border-white/10">
            <div class="text-purple-400 font-semibold">{{ service.priceRange }}</div>
            <router-link to="/contact">
              <button class="p-button p-button-sm bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600">
                Get Quote
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="service in additionalServices" :key="service.title" class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl mb-4">{{ service.icon }}</div>
            <h4 class="text-lg font-semibold text-white mb-3">{{ service.title }}</h4>
            <p class="text-gray-400 text-sm mb-4">{{ service.description }}</p>
            <div class="text-purple-400 font-medium">{{ service.price }}</div>
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">My Development Process</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(step, index) in processSteps" :key="step.title" class="relative">
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                {{ index + 1 }}
              </div>
              <h4 class="text-lg font-semibold text-white mb-3">{{ step.title }}</h4>
              <p class="text-gray-400 text-sm">{{ step.description }}</p>
            </div>
            
            <!-- Arrow for desktop -->
            <div v-if="index < processSteps.length - 1" class="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
              <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies I Use -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Technologies I Work With</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="tech in technologies" :key="tech.name" class="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div class="text-2xl mb-2">{{ tech.icon }}</div>
            <div class="text-white text-sm font-medium">{{ tech.name }}</div>
          </div>
        </div>
      </div>

      <!-- Why Choose Me -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Why Choose Me?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="reason in whyChooseMe" :key="reason.title" class="text-center">
            <div class="text-4xl mb-4">{{ reason.icon }}</div>
            <h4 class="text-xl font-semibold text-white mb-3">{{ reason.title }}</h4>
            <p class="text-gray-400">{{ reason.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl text-gray-300 mb-8">Let's discuss how I can help bring your ideas to life</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact">
            <button class="p-button p-button-lg bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start a Project
            </button>
          </router-link>
          <router-link to="/projects">
            <button class="p-button p-button-lg p-button-outlined text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300">
              View My Work
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      mainServices: [
        {
          icon: '🎨',
          title: 'Frontend Development',
          description: 'Create stunning, responsive user interfaces using modern frameworks like Vue.js, React, and cutting-edge CSS technologies.',
          features: [
            'Responsive Web Design',
            'Modern JavaScript Frameworks',
            'Performance Optimization',
            'Cross-browser Compatibility',
            'UI/UX Implementation'
          ],
          priceRange: 'Starting at $2,000'
        },
        {
          icon: '⚙️',
          title: 'Backend Development',
          description: 'Build robust, scalable server-side applications with secure APIs, databases, and cloud integrations.',
          features: [
            'RESTful API Development',
            'Database Design & Integration',
            'Authentication & Security',
            'Cloud Deployment',
            'Performance Monitoring'
          ],
          priceRange: 'Starting at $2,500'
        },
        {
          icon: '🚀',
          title: 'Full-Stack Development',
          description: 'Complete end-to-end web application development from concept to deployment, handling both frontend and backend.',
          features: [
            'Complete Web Applications',
            'Database Integration',
            'User Authentication',
            'Payment Integration',
            'Deployment & Maintenance'
          ],
          priceRange: 'Starting at $4,000'
        },
        {
          icon: '📱',
          title: 'Progressive Web Apps',
          description: 'Develop fast, reliable PWAs that work offline and provide native app-like experiences across all devices.',
          features: [
            'Offline Functionality',
            'Push Notifications',
            'App-like Experience',
            'Fast Loading',
            'Cross-platform Compatibility'
          ],
          priceRange: 'Starting at $3,000'
        }
      ],
      
      additionalServices: [
        {
          icon: '🔧',
          title: 'Code Review',
          description: 'Professional code review and optimization suggestions',
          price: '$100/hour'
        },
        {
          icon: '🚀',
          title: 'Performance Optimization',
          description: 'Speed up your existing website or application',
          price: 'Starting at $500'
        },
        {
          icon: '🎓',
          title: 'Technical Consultation',
          description: 'Expert advice on technology choices and architecture',
          price: '$150/hour'
        },
        {
          icon: '🛠️',
          title: 'Bug Fixes',
          description: 'Quick fixes for existing applications',
          price: 'Starting at $200'
        },
        {
          icon: '📚',
          title: 'Code Documentation',
          description: 'Comprehensive documentation for your codebase',
          price: 'Starting at $300'
        },
        {
          icon: '🔄',
          title: 'Legacy Migration',
          description: 'Modernize your old applications',
          price: 'Custom Quote'
        }
      ],
      
      processSteps: [
        {
          title: 'Discovery',
          description: 'Understanding your needs, goals, and project requirements'
        },
        {
          title: 'Planning',
          description: 'Creating detailed project roadmap and technical specifications'
        },
        {
          title: 'Development',
          description: 'Building your solution with regular updates and feedback'
        },
        {
          title: 'Launch',
          description: 'Testing, deployment, and post-launch support'
        }
      ],
      
      technologies: [
        { name: 'Vue.js', icon: '💚' },
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Git', icon: '📝' },
        { name: 'Figma', icon: '🎨' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind', icon: '🌊' }
      ],
      
      whyChooseMe: [
        {
          icon: '⚡',
          title: 'Fast Delivery',
          description: 'I value your time and deliver projects on schedule without compromising quality.'
        },
        {
          icon: '💎',
          title: 'Quality Code',
          description: 'Clean, maintainable, and well-documented code that follows industry best practices.'
        },
        {
          icon: '🤝',
          title: 'Great Communication',
          description: 'Regular updates, transparent process, and always available for questions.'
        },
        {
          icon: '🔄',
          title: 'Ongoing Support',
          description: 'Post-launch support and maintenance to keep your application running smoothly.'
        },
        {
          icon: '📈',
          title: 'Scalable Solutions',
          description: 'Built to grow with your business and handle increased traffic and features.'
        },
        {
          icon: '🎯',
          title: 'Results-Focused',
          description: 'Focused on delivering solutions that meet your business objectives and user needs.'
        }
      ]
    }
  }
}
</script>