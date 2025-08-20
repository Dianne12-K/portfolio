<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">Professional Services</h1>
        <p class="text-xl text-gray-300 mb-8">
          Geospatial solutions, surveying, and web development for sustainable impact
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
      </div>

      <!-- Main Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="service in mainServices"
          :key="service.title"
          class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</div>
          <h3 class="text-2xl font-bold text-white mb-4">{{ service.title }}</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">{{ service.description }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="feature in service.features" :key="feature" class="flex items-center text-gray-400">
              <span class="text-green-400 mr-2">✓</span>
              {{ feature }}
            </li>
          </ul>
          <div class="flex items-center justify-between pt-4 border-t border-white/10">
            <div class="text-green-400 font-semibold">{{ service.priceRange }}</div>
            <router-link to="/contact">
              <Button class="p-button p-button-sm bg-gradient-to-r from-green-500 to-blue-500 border-0 hover:from-green-600 hover:to-blue-600">
                Get Quote
              </Button>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="service in additionalServices"
            :key="service.title"
            class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
          >
            <div class="text-3xl mb-4">{{ service.icon }}</div>
            <h4 class="text-lg font-semibold text-white mb-3">{{ service.title }}</h4>
            <p class="text-gray-400 text-sm mb-4">{{ service.description }}</p>
            <div class="text-green-400 font-medium">{{ service.price }}</div>
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">How I Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(step, index) in processSteps" :key="step.title" class="relative">
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                {{ index + 1 }}
              </div>
              <h4 class="text-lg font-semibold text-white mb-3">{{ step.title }}</h4>
              <p class="text-gray-400 text-sm">{{ step.description }}</p>
            </div>
            <div v-if="index < processSteps.length - 1" class="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
              <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Technologies & Tools</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="tech in technologies"
            :key="tech.name"
            class="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div class="text-2xl mb-2">{{ tech.icon }}</div>
            <div class="text-white text-sm font-medium">{{ tech.name }}</div>
          </div>
        </div>
      </div>

      <!-- Why Choose Me -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Why Work With Me?</h2>
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
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Collaborate?</h2>
        <p class="text-xl text-gray-300 mb-8">Let's create geospatial solutions for a sustainable future</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact">
            <Button class="p-button-lg bg-gradient-to-r from-green-500 to-blue-500 border-0 hover:from-green-600 hover:to-blue-600 transition-all duration-300">
              Start a Project
            </Button>
          </router-link>
          <router-link to="/projects">
            <Button class="p-button-lg p-button-outlined text-white border-white hover:bg-white hover:text-green-900 transition-all duration-300">
              View My Work
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const mainServices = ref([
  {
    icon: '🗺️',
    title: 'GIS Analysis & Mapping',
    description: 'Spatial data analysis, thematic mapping, and geospatial solutions for climate, land use, and infrastructure projects.',
    features: [
      'Spatial data processing (ArcGIS, QGIS)',
      'Land use/cover mapping',
      'Environmental & risk analysis',
      'Custom map production',
      'Geodatabase design'
    ],
    priceRange: 'From $1,500'
  },
  {
    icon: '📡',
    title: 'Remote Sensing & Image Analysis',
    description: 'Satellite imagery processing, classification, and change detection for environmental monitoring and planning.',
    features: [
      'Satellite data acquisition',
      'Image classification (Erdas, GEE)',
      'Change detection',
      'Vegetation & water analysis',
      'Custom reporting'
    ],
    priceRange: 'From $1,800'
  },
  {
    icon: '📏',
    title: 'Surveying & Field Data Collection',
    description: 'Cadastral, topographic, and engineering surveys using RTK-GPS, total station, and mobile mapping tools.',
    features: [
      'RTK-GPS & total station surveys',
      'Cadastral & topographic mapping',
      'Ground truthing',
      'Field data integration',
      'Survey data processing'
    ],
    priceRange: 'From $2,000'
  },
  {
    icon: '💻',
    title: 'Web GIS & Application Development',
    description: 'Custom web mapping applications and dashboards using Vue 3, PrimeVue, and spatial databases.',
    features: [
      'Web GIS solutions (Vue, JS, Node.js)',
      'Interactive dashboards',
      'Spatial database integration (PostgreSQL)',
      'API development',
      'Responsive design'
    ],
    priceRange: 'From $2,500'
  }
])

const additionalServices = ref([
  {
    icon: '📝',
    title: 'Data Visualization',
    description: 'Custom charts, dashboards, and spatial data visualizations.',
    price: 'From $300'
  },
  {
    icon: '🔍',
    title: 'Quality Assurance',
    description: 'Data validation, accuracy checks, and code review.',
    price: '$100/hour'
  },
  {
    icon: '🛠️',
    title: 'Legacy Data Migration',
    description: 'Modernizing and migrating old geospatial datasets.',
    price: 'Custom Quote'
  },
  {
    icon: '📚',
    title: 'Documentation & Training',
    description: 'User guides, technical docs, and GIS training sessions.',
    price: 'From $200'
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Speed and efficiency improvements for GIS/web apps.',
    price: 'From $400'
  },
  {
    icon: '🎓',
    title: 'Technical Consultation',
    description: 'Expert advice on GIS, surveying, and web mapping.',
    price: '$150/hour'
  }
])

const processSteps = ref([
  {
    title: 'Consultation',
    description: 'Understand your project goals, data, and requirements.'
  },
  {
    title: 'Planning',
    description: 'Develop a tailored workflow and technical roadmap.'
  },
  {
    title: 'Execution',
    description: 'Implement solutions with regular updates and feedback.'
  },
  {
    title: 'Delivery',
    description: 'Final review, deployment, and ongoing support.'
  }
])

const technologies = ref([
  { name: 'ArcGIS', icon: '🗺️' },
  { name: 'QGIS', icon: '🌍' },
  { name: 'Erdas Imagine', icon: '🛰️' },
  { name: 'AutoCAD', icon: '📐' },
  { name: 'Google Earth Engine', icon: '🌐' },
  { name: 'RTK-GPS', icon: '📡' },
  { name: 'Python', icon: '🐍' },
  { name: 'R', icon: '📊' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Vue 3', icon: '💚' },
  { name: 'PrimeVue', icon: '🌟' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Tailwind CSS', icon: '🌊' }
])

const whyChooseMe = ref([
  {
    icon: '🎯',
    title: 'Results-Driven',
    description: 'Focused on delivering actionable geospatial insights and solutions.'
  },
  {
    icon: '💡',
    title: 'Technical Expertise',
    description: 'First Class Honors in Geomatic Engineering with hands-on GIS, surveying, and web development skills.'
  },
  {
    icon: '🌱',
    title: 'Sustainability Focus',
    description: 'Passionate about climate, food security, and sustainable development.'
  },
  {
    icon: '🤝',
    title: 'Collaborative Approach',
    description: 'Transparent communication and regular project updates.'
  },
  {
    icon: '⚡',
    title: 'Timely Delivery',
    description: 'Efficient project management and on-time completion.'
  },
  {
    icon: '🔒',
    title: 'Data Integrity',
    description: 'Strict attention to data quality, accuracy, and security.'
  }
])
</script>