<template>
  <nav class="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo/Brand -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">YN</span>
          </div>
          <span class="text-white font-semibold text-lg">Diana Khayenzeli</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group"
            :class="{ 'text-purple-300': isActiveRoute(item.path) }"
          >
            {{ item.name }}
            <span 
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': isActiveRoute(item.path) }"
            ></span>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-purple-300 transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div 
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'"
      >
        <div class="pt-4 pb-2 space-y-2">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="block text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
            :class="{ 'text-purple-300 bg-white/5': isActiveRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isMobileMenuOpen: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact Me', path: '/contact' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    isActiveRoute(path) {
      return this.$route.path === path
    }
  },
  watch: {
    '$route'() {
      // Close mobile menu when route changes
      this.isMobileMenuOpen = false
    }
  }
}
</script>