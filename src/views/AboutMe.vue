<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">About Me</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

        <!-- Profile Image & Quick Info -->
        <div class="lg:col-span-1">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <!-- Profile Image Placeholder -->
            <div class="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-green-400 shadow-lg">
              <img src="/diana.jpeg" alt="Diana Khayenzeli" class="w-full h-full object-cover" />
            </div>



            <h2 class="text-2xl font-bold text-white text-center mb-4">{{ profile.name }}</h2>
            <p class="text-green-300 text-center text-lg mb-6">{{ profile.title }}</p>

            <!-- Quick Info -->
            <div class="space-y-3">
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-green-400">📍</span>
                <span>{{ profile.location }}</span>
              </div>
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-green-400">🎓</span>
                <span>{{ profile.degree }}</span>
              </div>
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-green-400">📧</span>
                <span>{{ profile.email }}</span>
              </div>
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-green-400">⭐</span>
                <span>{{ profile.experience }} years experience</span>
              </div>
            </div>
          </div>
        </div>

        <!-- About Content -->
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">🎯</span>
              My Journey
            </h3>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {{ aboutText.story1 }}
              </p>
              <p>
                {{ aboutText.story2 }}
              </p>
              <p>
                {{ aboutText.story3 }}
              </p>
            </div>
          </div>

          <!-- What I Do -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">⚡</span>
              What I Do
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="service in services" :key="service.title" class="bg-white/5 rounded-lg p-4">
                <div class="text-2xl mb-2">{{ service.icon }}</div>
                <h4 class="font-semibold text-white mb-2">{{ service.title }}</h4>
                <p class="text-gray-400 text-sm">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education & Experience Timeline -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-white text-center mb-12">My Journey</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Education -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 class="text-xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">🎓</span>
              Education
            </h4>
            <div class="space-y-4">
              <div v-for="edu in education" :key="edu.school" class="border-l-4 border-green-400 pl-4">
                <h5 class="font-semibold text-white">{{ edu.degree }}</h5>
                <p class="text-green-300">{{ edu.school }}</p>
                <p class="text-gray-400 text-sm">{{ edu.period }} • {{ edu.grade }}</p>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 class="text-xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">💼</span>
              Experience
            </h4>
            <div class="space-y-4">
              <div v-for="exp in experience" :key="exp.company" class="border-l-4 border-blue-400 pl-4">
                <h5 class="font-semibold text-white">{{ exp.role }}</h5>
                <p class="text-blue-300">{{ exp.company }}</p>
                <p class="text-gray-400 text-sm">{{ exp.period }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-white text-center mb-12">My Values</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div
              class="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-green-500/30">
              <span class="text-3xl">{{ value.icon }}</span>
            </div>
            <h4 class="text-xl font-semibold text-white mb-3">{{ value.title }}</h4>
            <p class="text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>

      <!-- Achievements & Fun Facts -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-6 text-center">Achievements & Fun Facts</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="fact in funFacts" :key="fact.label" class="text-center">
            <div class="text-3xl mb-2">{{ fact.icon }}</div>
            <div class="text-2xl font-bold text-green-400 mb-1">{{ fact.value }}</div>
            <div class="text-sm text-gray-400">{{ fact.label }}</div>
          </div>
        </div>
      </div>

      <!-- Skills Preview -->
      <div class="mt-16 text-center">
        <h3 class="text-3xl font-bold text-white mb-6">Want to know more about my technical skills?</h3>
        <router-link to="/skills">
          <Button label="View My Skills"
            class="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-8 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 border-0" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

// Profile information
const profile = ref({
  name: 'Diana Khayenzeli',
  title: 'Geomatic Engineer & GIS Developer',
  location: 'Nairobi, Kenya',
  degree: 'First Class Honors',
  email: 'khayenzelidianne@gmail.com',
  experience: '5+'
})

// About text based on Diana's background
const aboutText = ref({
  story1: 'Hello! I\'m a passionate Geomatic Engineer with First Class Honors from Jomo Kenyatta University of Agriculture and Technology. My journey began with a fascination for how technology can solve real-world challenges, particularly in climate change, food security, and sustainable development.',
  story2: 'Throughout my career, I\'ve had the privilege of working on diverse projects - from precision cadastral surveys using RTK-GPS equipment to developing comprehensive Land Information Management Systems. Each project has strengthened my belief that geospatial technologies are powerful tools for positive change.',
  story3: 'When I\'m not mapping territories or analyzing satellite imagery, you\'ll find me contributing to environmental monitoring projects, exploring new GIS technologies, or mentoring others in geospatial analysis. I\'m committed to continuous learning and using innovative solutions to address the world\'s most pressing challenges.'
})

// Services based on Diana's expertise
const services = ref([
  {
    icon: '🗺️',
    title: 'GIS Analysis & Mapping',
    description: 'Advanced spatial analysis using ArcGIS, QGIS, and custom solutions'
  },
  {
    icon: '📏',
    title: 'Land Surveying',
    description: 'Precision cadastral and topographic surveys with modern equipment'
  },
  {
    icon: '🛰️',
    title: 'Remote Sensing',
    description: 'Satellite imagery analysis and environmental monitoring'
  },
  {
    icon: '💻',
    title: 'Web GIS Development',
    description: 'Creating interactive mapping applications with Vue.js and spatial databases'
  }
])

// Education from resume
const education = ref([
  {
    degree: 'BSc. Geomatic Engineering & GIS',
    school: 'Jomo Kenyatta University of Agriculture and Technology',
    period: 'Sept 2019 - Jan 2025',
    grade: 'First Class Honors'
  },
  {
    degree: 'Kenya Certificate of Secondary Education',
    school: 'Malava Girls Secondary School',
    period: 'Feb 2015 - Dec 2018',
    grade: 'A-'
  }
])

// Experience from resume
const experience = ref([
  {
    role: 'GIS Intern',
    company: 'Ramani Geosystems Limited',
    period: 'February 2025 - Present'
  },
  {
    role: 'External Attachment',
    company: 'Geodev K Ltd',
    period: 'January - April 2024'
  },
  {
    role: 'External Attachment',
    company: 'Vihiga County Government',
    period: 'January - April 2023'
  }
])

// Values based on Diana's passion areas
const values = ref([
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'Using geospatial technologies to address climate change and promote sustainable development practices.'
  },
  {
    icon: '🎯',
    title: 'Precision',
    description: 'Delivering high-precision surveys and accurate spatial analysis that stakeholders can rely on for critical decisions.'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Combining traditional surveying methods with cutting-edge technologies to create comprehensive solutions.'
  }
])

// Fun facts based on resume achievements
const funFacts = ref([
  { icon: '🗺️', value: '500+', label: 'Sites Digitally Mapped' },
  { icon: '📏', value: '100+', label: 'Land Parcels Surveyed' },
  { icon: '🎯', value: '3+', label: 'Special Assignments' },
  { icon: '🌍', value: '15+', label: 'GIS Projects Completed' }
])
</script>