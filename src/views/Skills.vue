<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">My Skills</h1>
        <p class="text-xl text-gray-300 mb-8">Technologies and tools I use to deliver geospatial solutions</p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
      </div>

      <!-- Technical Skills -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 flex items-center">
          <span class="mr-3">🗺️</span>
          Geospatial & Technical Skills
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- GIS & Remote Sensing -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
              <span class="mr-2">🌍</span>
              GIS & Remote Sensing
            </h3>
            <div class="space-y-4">
              <div v-for="skill in gisSkills" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-green-400 font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Programming & Web Development -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
              <span class="mr-2">💻</span>
              Programming & Web Development
            </h3>
            <div class="space-y-4">
              <div v-for="skill in devSkills" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-green-400 font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Stack -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 flex items-center">
          <span class="mr-3">🛠️</span>
          Technology Stack
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="category in techStack" :key="category.name" class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="text-3xl mb-4">{{ category.icon }}</div>
            <h3 class="text-lg font-semibold text-white mb-4">{{ category.name }}</h3>
            <div class="space-y-2">
              <span 
                v-for="tech in category.technologies" 
                :key="tech"
                class="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 flex items-center">
          <span class="mr-3">🤝</span>
          Soft Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="skill in softSkills" :key="skill.title" class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div class="text-4xl mb-4">{{ skill.icon }}</div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ skill.title }}</h3>
            <p class="text-gray-400 text-sm">{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Certifications & Learning -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Certifications -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
            <span class="mr-3">🏆</span>
            Certifications
          </h3>
          <div class="space-y-4">
            <div v-for="cert in certifications" :key="cert.name" class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">{{ cert.icon }}</span>
              </div>
              <div>
                <h4 class="text-white font-medium">{{ cert.name }}</h4>
                <p class="text-gray-400 text-sm">{{ cert.issuer }} • {{ cert.year }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Currently Learning -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
            <span class="mr-3">📚</span>
            Currently Learning
          </h3>
          <div class="space-y-4">
            <div v-for="learning in currentlyLearning" :key="learning.name" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="text-2xl">{{ learning.icon }}</div>
                <div>
                  <h4 class="text-white font-medium">{{ learning.name }}</h4>
                  <p class="text-gray-400 text-sm">{{ learning.description }}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-green-400 font-semibold text-sm">{{ learning.progress }}%</div>
                <div class="w-16 bg-gray-700 rounded-full h-1 mt-1">
                  <div 
                    class="bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full"
                    :style="{ width: learning.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const gisSkills = ref([
  { name: 'ArcGIS / QGIS', level: 92 },
  { name: 'Remote Sensing (Erdas, GEE)', level: 88 },
  { name: 'Surveying (RTK-GPS, Total Station)', level: 85 },
  { name: 'Spatial Analysis', level: 90 },
  { name: 'Geodatabase Design', level: 80 },
  { name: 'AutoCAD', level: 75 }
])

const devSkills = ref([
  { name: 'Python', level: 90 },
  { name: 'SQL (PostgreSQL, Spatial SQL)', level: 85 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'Vue 3 & PrimeVue', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'HTML5 & CSS3', level: 92 },
  { name: 'Tailwind CSS', level: 85 }
])

const techStack = ref([
  {
    name: 'GIS & Remote Sensing',
    icon: '🗺️',
    technologies: ['ArcGIS', 'QGIS', 'Erdas Imagine', 'Google Earth Engine', 'AutoCAD']
  },
  {
    name: 'Surveying',
    icon: '📏',
    technologies: ['RTK-GPS', 'Total Station', 'Field Mapping', 'Cadastral Survey']
  },
  {
    name: 'Programming',
    icon: '💻',
    technologies: ['Python', 'R', 'JavaScript', 'SQL', 'Node.js']
  },
  {
    name: 'Web & Database',
    icon: '🌐',
    technologies: ['Vue 3', 'PrimeVue', 'PostgreSQL', 'Tailwind CSS', 'HTML5', 'CSS3']
  }
])

const softSkills = ref([
  {
    icon: '💡',
    title: 'Analytical Thinking',
    description: 'Solving complex spatial and technical challenges with creativity and logic.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Working effectively with teams, clients, and stakeholders.'
  },
  {
    icon: '📢',
    title: 'Communication',
    description: 'Translating technical concepts for diverse audiences.'
  },
  {
    icon: '⏱️',
    title: 'Time Management',
    description: 'Delivering quality results within deadlines.'
  },
  {
    icon: '🌱',
    title: 'Sustainability Focus',
    description: 'Passionate about climate, food security, and sustainable development.'
  },
  {
    icon: '🔍',
    title: 'Attention to Detail',
    description: 'Ensuring data accuracy and integrity in all deliverables.'
  }
])

const certifications = ref([
  {
    name: 'First Class Honors, BSc Geomatic Engineering & GIS',
    issuer: 'JKUAT',
    year: '2024',
    icon: '🎓'
  },
  {
    name: 'ArcGIS Pro: Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2023',
    icon: '🗺️'
  },
  {
    name: 'Python for Geospatial',
    issuer: 'Coursera',
    year: '2022',
    icon: '🐍'
  }
])

const currentlyLearning = ref([
  {
    name: 'Advanced Spatial SQL',
    description: 'Optimizing spatial queries and geodatabase performance',
    progress: 70,
    icon: '🗄️'
  },
  {
    name: 'Web GIS Dashboards',
    description: 'Building interactive dashboards with Vue 3 & PrimeVue',
    progress: 60,
    icon: '📊'
  },
  {
    name: 'Cloud GIS',
    description: 'Deploying geospatial solutions on cloud platforms',
    progress: 45,
    icon: '☁️'
  }
])
</script>