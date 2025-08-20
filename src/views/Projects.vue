<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">My Projects</h1>
        <p class="text-xl text-gray-300 mb-8">A showcase of my recent work and creative solutions</p>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeFilter = category"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300"
          :class="activeFilter === category 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-6xl">{{ project.icon }}</span>
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            <div class="absolute top-4 right-4">
              <span class="bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm">{{ project.category }}</span>
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Project Links -->
            <div class="flex space-x-3">
              <button 
                v-if="project.liveUrl"
                @click="openLink(project.liveUrl)"
                class="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Live Demo
              </button>
              <button 
                v-if="project.githubUrl"
                @click="openLink(project.githubUrl)"
                class="flex-1 bg-white/10 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Project -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Featured Project</h2>
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <!-- Project Image/Demo -->
            <div class="relative h-64 lg:h-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-8xl">{{ featuredProject.icon }}</span>
              </div>
            </div>
            
            <!-- Project Details -->
            <div class="p-8">
              <div class="mb-4">
                <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {{ featuredProject.category }}
                </span>
              </div>
              
              <h3 class="text-3xl font-bold text-white mb-4">{{ featuredProject.title }}</h3>
              <p class="text-gray-300 mb-6 leading-relaxed">{{ featuredProject.description }}</p>
              
              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul class="space-y-2">
                  <li v-for="feature in featuredProject.features" :key="feature" class="flex items-center text-gray-300">
                    <span class="text-purple-400 mr-2">✓</span>
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <!-- Technologies -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in featuredProject.technologies" 
                    :key="tech"
                    class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex space-x-4">
                <button 
                  v-if="featuredProject.liveUrl"
                  @click="openLink(featuredProject.liveUrl)"
                  class="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  View Live Project
                </button>
                <button 
                  v-if="featuredProject.githubUrl"
                  @click="openLink(featuredProject.githubUrl)"
                  class="bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
                >
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div v-for="stat in projectStats" :key="stat.label" class="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-2xl font-bold text-purple-400 mb-1">{{ stat.value }}</div>
          <div class="text-gray-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Have a Project in Mind?</h2>
        <p class="text-xl text-gray-300 mb-8">Let's collaborate and create something amazing together</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact">
            <button class="p-button p-button-lg bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start a Project
            </button>
          </router-link>
          <router-link to="/services">
            <button class="p-button p-button-lg p-button-outlined text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300">
              View Services
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      activeFilter: 'All',
      categories: ['All', 'Web Apps', 'Frontend', 'Full Stack', 'Mobile'],
      
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A modern e-commerce solution with payment integration and admin dashboard.',
          category: 'Full Stack',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
          icon: '🛍️',
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'Collaborative task management tool with real-time updates and team features.',
          category: 'Web Apps',
          technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
          icon: '📋',
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          id: 3,
          title: 'Portfolio Website',
          description: 'Responsive portfolio website with smooth animations and modern design.',
          category: 'Frontend',
          technologies: ['Vue.js', 'Tailwind CSS', 'GSAP'],
          icon: '💼',
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          id: 4,
          title: 'Weather App',
          description: 'Beautiful weather application with location-based forecasts and maps.',
          category: 'Mobile',
          technologies: ['React Native', 'Weather API', 'Maps'],
          icon: '🌤️',
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          id: 5,
          title: 'Blog CMS',
          description: 'Content management system for bloggers with rich text editor and SEO.',
          category: 'Full Stack',
          technologies: ['Nuxt.js', 'Strapi', 'MySQL'],
          icon: '📝',
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          id: 6,
          title: 'Fitness Tracker',
          description: 'Personal fitness tracking app with workout plans and progress analytics.',
          category: 'Web Apps',
          technologies: ['Vue.js', 'Chart.js', 'Firebase'],
          icon: '💪',
          liveUrl: '#',
          githubUrl: '#'
        }
      ],
      
      featuredProject: {
        title: 'SaaS Analytics Dashboard',
        description: 'A comprehensive analytics dashboard for SaaS businesses featuring real-time data visualization, user management, and advanced reporting capabilities. Built with modern technologies to handle large datasets and provide insights that drive business decisions.',
        category: 'Full Stack',
        icon: '📊',
        technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js', 'AWS'],
        features: [
          'Real-time data visualization',
          'Advanced filtering and sorting',
          'Export reports to PDF/Excel',
          'User role management',
          'API integrations',
          'Mobile responsive design'
        ],
        liveUrl: '#',
        githubUrl: '#'
      },
      
      projectStats: [
        { icon: '🚀', value: '50+', label: 'Projects Completed' },
        { icon: '😊', value: '25+', label: 'Happy Clients' },
        { icon: '⭐', value: '4.9', label: 'Average Rating' },
        { icon: '🏆', value: '3+', label: 'Years Experience' }
      ]
    }
  },
  
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'All') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.activeFilter)
    }
  },
  
  methods: {
    openLink(url) {
      // In a real application, this would open the actual URL
      console.log('Opening:', url)
      // window.open(url, '_blank')
    }
  }
}
</script>