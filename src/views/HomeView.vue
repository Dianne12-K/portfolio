<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Text Content -->
        <div class="text-white space-y-8">
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
              Hello, I'm
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {{ developerName }}
              </span>
            </h1>
            <p class="text-xl lg:text-2xl text-gray-300">
              {{ tagline }}
            </p>
            <p class="text-lg text-gray-400 leading-relaxed">
              {{ description }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/projects">
              <button class="p-button p-button-lg bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
            </router-link>
            <router-link to="/contact">
              <button class="p-button p-button-lg p-button-outlined text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300">
                Get In Touch
              </button>
            </router-link>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-400">{{ stats.experience }}</div>
              <div class="text-sm text-gray-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-400">{{ stats.projects }}</div>
              <div class="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-400">{{ stats.clients }}</div>
              <div class="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="relative z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
            <div class="space-y-6">
              <!-- Code Editor Mockup -->
              <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div class="flex space-x-2 mb-3">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="space-y-2 text-gray-300">
                  <div><span class="text-purple-400">const</span> <span class="text-blue-400">developer</span> = {</div>
                  <div class="pl-4">name: <span class="text-green-400">"{{ developerName }}"</span>,</div>
                  <div class="pl-4">skills: [<span class="text-green-400">"Vue.js"</span>, <span class="text-green-400">"JavaScript"</span>],</div>
                  <div class="pl-4">passion: <span class="text-green-400">"Creating amazing experiences"</span></div>
                  <div>};</div>
                </div>
              </div>
              
              <!-- Tech Stack Icons -->
              <div class="grid grid-cols-4 gap-4">
                <div v-for="tech in techStack" :key="tech" class="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
                  <div class="text-2xl mb-2">{{ getTechIcon(tech) }}</div>
                  <div class="text-xs text-gray-300">{{ tech }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse" style="animation-delay: 1s;"></div>
        </div>
      </div>
    </div>

    <!-- Quick Links Section -->
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link
          v-for="item in quickLinks"
          :key="item.name"
          :to="item.path"
          class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {{ item.icon }}
          </div>
          <h3 class="text-white font-semibold text-lg mb-2">{{ item.name }}</h3>
          <p class="text-gray-400 text-sm">{{ item.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      developerName: 'DIANA KHAYENZELI', 
      tagline: 'Full Stack Developer & UI/UX Enthusiast',
      description: 'I craft digital experiences that blend functionality with beautiful design. Passionate about creating solutions that make a difference.',
      
      stats: {
        experience: '3+',
        projects: '50+',
        clients: '25+'
      },
      
      techStack: ['Vue.js', 'React', 'Node.js', 'Python'],
      
      quickLinks: [
        {
          name: 'About Me',
          path: '/about',
          icon: '👋',
          description: 'Learn more about my journey and background'
        },
        {
          name: 'Skills',
          path: '/skills',
          icon: '⚡',
          description: 'Technologies and tools I work with'
        },
        {
          name: 'Projects',
          path: '/projects',
          icon: '🚀',
          description: 'Check out my latest work and creations'
        },
        {
          name: 'Contact',
          path: '/contact',
          icon: '💬',
          description: 'Let\'s discuss your next project'
        }
      ]
    }
  },
  
  methods: {
    getTechIcon(tech) {
      const icons = {
        'Vue.js': '💚',
        'React': '⚛️',
        'Node.js': '🟢',
        'Python': '🐍',
        'JavaScript': '⚡',
        'CSS': '🎨'
      }
      return icons[tech] || '💻'
    }
  }
}
</script>