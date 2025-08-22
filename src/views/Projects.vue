<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-800 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">My Projects</h1>
        <p class="text-xl text-gray-300 mb-8">Geospatial solutions and mapping projects that make a difference</p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <Button
          v-for="category in categories"
          :key="category"
          @click="activeFilter = category"
          :label="category"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300"
          :class="activeFilter === category 
            ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white border-0' 
            : 'p-button-outlined text-gray-300 border-gray-600 hover:bg-white/10 hover:text-white hover:border-white'"
        />
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="relative h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 overflow-hidden">
            <img 
              v-if="project.image" 
              :src="project.image" 
              alt="Project Image" 
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full bg-gray-800"></div>

            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            <div class="absolute top-4 right-4">
              <span class="bg-green-500/80 text-white px-3 py-1 rounded-full text-sm">{{ project.category }}</span>
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
                class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Project Links -->
            <div class="flex space-x-3">
              <Button 
                v-if="project.demoUrl"
                @click="openLink(project.demoUrl)"
                label="View Project"
                class="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 border-0"
              />
              <Button 
                v-if="project.githubUrl"
                @click="openLink(project.githubUrl)"
                label="GitHub"
                class="flex-1 bg-white/10 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300 border-0"
              />
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
            <div class="relative h-64 lg:h-auto bg-gradient-to-br from-green-500/20 to-blue-500/20">
              <img 
                v-if="featuredProject.image" 
                :src="featuredProject.image" 
                alt="Featured Project Image" 
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full bg-gray-800"></div>
            </div>
            
            <!-- Project Details -->
            <div class="p-8">
              <div class="mb-4">
                <span class="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                    <span class="text-green-400 mr-2">✓</span>
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
                    class="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex space-x-4">
                <Button 
                  v-if="featuredProject.demoUrl"
                  @click="openLink(featuredProject.demoUrl)"
                  label="View Live Project"
                  class="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 border-0"
                />
                <Button 
                  v-if="featuredProject.githubUrl"
                  @click="openLink(featuredProject.githubUrl)"
                  label="View Code"
                  class="bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div v-for="stat in projectStats" :key="stat.label" class="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-2xl font-bold text-green-400 mb-1">{{ stat.value }}</div>
          <div class="text-gray-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Need Geospatial Solutions?</h2>
        <p class="text-xl text-gray-300 mb-8">Let's collaborate on mapping and GIS projects that create impact</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact">
            <Button 
              label="Start a Project"
              class="p-button-lg bg-gradient-to-r from-green-500 to-blue-500 border-0 hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            />
          </router-link>
          <router-link to="/skills">
            <Button 
              label="View Skills"
              class="p-button-lg p-button-outlined text-white border-white hover:bg-white hover:text-green-900 transition-all duration-300"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'

// Filter state
const activeFilter = ref('All')

// Project categories
const categories = ref(['All', 'GIS Analysis', 'Web Development', 'Remote Sensing', 'Surveying'])

// Projects
const projects = ref([
  
  {
    id: 1,
    title: 'Kenya Land Surface Temperature Analysis (2005-2023)',
    description: 'Interactive LST analysis across Kenya using MODIS satellite data spanning nearly two decades. Enables temporal comparison, statistical analysis, and trend visualization for climate research.',
    category: 'Remote Sensing',
    technologies: ['Google Earth Engine', 'MODIS MOD11A2', 'JavaScript', 'Time Series Analysis'],
    image: '/lst.jpg',
    demoUrl: 'https://dianakhayenzeli.users.earthengine.app/view/land-surface-temperature',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Flood Risk Assessment Mapping',
    description: 'Spatial analysis project identifying flood-prone zones using satellite data and field surveys.',
    category: 'GIS Analysis',
    technologies: ['QGIS', 'Google Earth Engine', 'Python', 'Remote Sensing'],
    image: null,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Cadastral Mapping & Surveying',
    description: 'Precision cadastral surveys for 100+ land parcels using RTK-GPS and total station equipment.',
    category: 'Surveying',
    technologies: ['RTK-GPS', 'Total Station', 'AutoCAD', 'ArcGIS'],
    image: null,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Land Use Classification',
    description: 'Automated land use/land cover classification using satellite imagery and machine learning.',
    category: 'Remote Sensing',
    technologies: ['Google Earth Engine', 'Python', 'Sentinel-2', 'QGIS'],
    image: null,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Water Bodies Delineation',
    description: 'Automated water body mapping using remote sensing techniques for environmental monitoring.',
    category: 'Remote Sensing',
    technologies: ['Google Earth Engine', 'Landsat', 'QGIS', 'Python'],
    image: null,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Google Plus Code Addressing',
    description: 'Digital mapping of 500+ sites for enhanced geospatial accessibility and water resource tracking.',
    category: 'GIS Analysis',
    technologies: ['QGIS', 'GPS', 'Google Plus Codes', 'Field Mapping'],
    image: null,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'Groundwater Potential Analysis',
    description: 'Multi-criteria analysis for groundwater potential zone mapping in semi-arid regions.',
    category: 'Remote Sensing',
    technologies: ['Google Earth Engine', 'Remote Sensing', 'CHIRPS','SRTM','GLiM global lithology', 'Java Script', 'Spatial Analysis'],
    image: '/gwater.jpg',
    demoUrl: 'https://healthfacilities.projects.earthengine.app/view/groundwater-potential-analysis',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'School Mapping for Health Planning',
    description: 'Geospatial mapping of educational infrastructure to support HPV microplanning initiatives.',
    category: 'GIS Analysis',
    technologies: ['QGIS', 'OpenStreetMap', 'Field Mapping', 'Health GIS'],
    image: null,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'Kakamega County NDVI Analysis',
    description: 'Interactive vegetation monitoring system tracking NDVI trends throughout 2024, revealing seasonal patterns and ecosystem health.',
    category: 'Remote Sensing',
    technologies: ['Google Earth Engine', 'Sentinel-2', 'JavaScript', 'Time Series Analysis'],
    image: '/ndvi.jpg',
    demoUrl: 'https://healthfacilities.projects.earthengine.app/view/kakamega-county-ndvi-analysis',
    githubUrl: '#'
  }
])

// Featured project
const featuredProject = ref({
  title: 'Land Information Management System (LIMS)',
  description: 'A comprehensive client management system designed for land administration and geospatial data management. Built with modern web technologies to streamline land information processes, improve data accessibility, and support decision-making in land management.',
  category: 'Web Development',
  image: null, // you can set e.g. '/lims.jpg' later
  technologies: ['Vue.js 3', 'Pinia', 'PrimeVue', 'PostgreSQL', 'Node.js', 'Spatial SQL'],
  features: [
    'Interactive land parcel visualization',
    'Client data management system',
    'Document management and storage',
    'Advanced spatial querying capabilities',
    'Real-time data synchronization',
    'Mobile-responsive design'
  ],
  demoUrl: '#',
  githubUrl: '#'
})

// Stats
const projectStats = ref([
  { icon: '🗺️', value: '15+', label: 'Mapping Projects' },
  { icon: '📊', value: '500+', label: 'Sites Mapped' },
  { icon: '🎯', value: '100+', label: 'Survey Parcels' },
  { icon: '🏆', value: '3+', label: 'Special Assignments' }
])

// Filter
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

// Link handler
const openLink = (url) => {
  window.open(url, '_blank')
}
</script>
