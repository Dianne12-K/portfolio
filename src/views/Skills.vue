<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">My Skills</h1>
        <p class="text-xl text-gray-300 mb-8">Technologies and tools I work with to bring ideas to life</p>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <!-- Technical Skills -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 flex items-center">
          <span class="mr-3">⚡</span>
          Technical Skills
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Frontend Skills -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
              <span class="mr-2">🎨</span>
              Frontend Development
            </h3>
            <div class="space-y-4">
              <div v-for="skill in frontendSkills" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-purple-400 font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
              <span class="mr-2">⚙️</span>
              Backend Development
            </h3>
            <div class="space-y-4">
              <div v-for="skill in backendSkills" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-purple-400 font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
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
                class="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
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
          <span class="mr-3">🧠</span>
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
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
                <div class="text-purple-400 font-semibold text-sm">{{ learning.progress }}%</div>
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

<script>
export default {
  name: 'Skills',
  data() {
    return {
      frontendSkills: [
        { name: 'Vue.js', level: 90 },
        { name: 'React', level: 85 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 }
      ],
      
      backendSkills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'RESTful APIs', level: 90 }
      ],
      
      techStack: [
        {
          name: 'Frontend',
          icon: '🎨',
          technologies: ['Vue.js', 'React', 'Nuxt.js', 'Vite', 'Webpack']
        },
        {
          name: 'Backend',
          icon: '⚙️',
          technologies: ['Node.js', 'Python', 'Express.js', 'Django', 'FastAPI']
        },
        {
          name: 'Database',
          icon: '🗄️',
          technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase']
        },
        {
          name: 'Tools',
          icon: '🔧',
          technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
        }
      ],
      
      softSkills: [
        {
          icon: '💡',
          title: 'Problem Solving',
          description: 'Breaking down complex challenges into manageable solutions'
        },
        {
          icon: '🤝',
          title: 'Team Collaboration',
          description: 'Working effectively with diverse teams and stakeholders'
        },
        {
          icon: '📢',
          title: 'Communication',
          description: 'Explaining technical concepts clearly to non-technical audiences'
        },
        {
          icon: '⏱️',
          title: 'Time Management',
          description: 'Delivering high-quality work within deadlines'
        },
        {
          icon: '🔄',
          title: 'Adaptability',
          description: 'Quickly learning new technologies and adapting to changes'
        },
        {
          icon: '👁️',
          title: 'Attention to Detail',
          description: 'Ensuring pixel-perfect designs and bug-free code'
        }
      ],
      
      certifications: [
        {
          name: 'AWS Certified Developer',
          issuer: 'Amazon Web Services',
          year: '2023',
          icon: 'AWS'
        },
        {
          name: 'Vue.js Certification',
          issuer: 'Vue Mastery',
          year: '2023',
          icon: 'VUE'
        },
        {
          name: 'JavaScript Algorithms',
          issuer: 'freeCodeCamp',
          year: '2022',
          icon: 'JS'
        }
      ],
      
      currentlyLearning: [
        {
          name: 'Three.js',
          description: '3D graphics and animations',
          progress: 65,
          icon: '🎮'
        },
        {
          name: 'Docker & DevOps',
          description: 'Containerization and deployment',
          progress: 40,
          icon: '🐳'
        },
        {
          name: 'GraphQL',
          description: 'Modern API development',
          progress: 55,
          icon: '📊'
        }
      ]
    }
  }
}
</script>