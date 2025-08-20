<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">About Me</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        
        <!-- Profile Image & Quick Info -->
        <div class="lg:col-span-1">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <!-- Profile Image Placeholder -->
            <div class="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-6xl">👨‍💻</span>
            </div>
            
            <h2 class="text-2xl font-bold text-white text-center mb-4">{{ profile.name }}</h2>
            <p class="text-purple-300 text-center text-lg mb-6">{{ profile.title }}</p>
            
            <!-- Quick Info -->
            <div class="space-y-3">
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-purple-400">📍</span>
                <span>{{ profile.location }}</span>
              </div>
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-purple-400">📧</span>
                <span>{{ profile.email }}</span>
              </div>
              <div class="flex items-center text-gray-300">
                <span class="w-6 text-purple-400">🎂</span>
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
              My Story
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

      <!-- Values Section -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-white text-center mb-12">My Values</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
              <span class="text-3xl">{{ value.icon }}</span>
            </div>
            <h4 class="text-xl font-semibold text-white mb-3">{{ value.title }}</h4>
            <p class="text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>

      <!-- Fun Facts -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-6 text-center">Fun Facts About Me</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="fact in funFacts" :key="fact.label" class="text-center">
            <div class="text-3xl mb-2">{{ fact.icon }}</div>
            <div class="text-2xl font-bold text-purple-400 mb-1">{{ fact.value }}</div>
            <div class="text-sm text-gray-400">{{ fact.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      profile: {
        name: 'Diana Khayenzeli',
        title: 'Full Stack Developer',
        location: 'Your City, Country',
        email: 'khayenzelidianne@gmail.com',
        experience: '3+'
      },
      
      aboutText: {
        story1: 'Hello! I\'m a passionate full-stack developer with a love for creating digital experiences that matter. My journey into development started during my university years when I discovered the perfect blend of creativity and logic that programming offers.',
        story2: 'Over the years, I\'ve had the privilege of working on diverse projects, from small business websites to complex web applications. Each project has taught me something new and reinforced my belief that good code should be both functional and beautiful.',
        story3: 'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and the power of collaboration to create amazing things.'
      },
      
      services: [
        {
          icon: '🎨',
          title: 'UI/UX Design',
          description: 'Creating intuitive and beautiful user interfaces'
        },
        {
          icon: '⚛️',
          title: 'Frontend Development',
          description: 'Building responsive and interactive web applications'
        },
        {
          icon: '🔧',
          title: 'Backend Development',
          description: 'Developing robust server-side solutions'
        },
        {
          icon: '📱',
          title: 'Mobile Development',
          description: 'Creating mobile-first and progressive web apps'
        }
      ],
      
      values: [
        {
          icon: '🎯',
          title: 'Quality',
          description: 'I believe in writing clean, maintainable code and delivering pixel-perfect designs.'
        },
        {
          icon: '🤝',
          title: 'Collaboration',
          description: 'Great projects are built by great teams. I love working with others to achieve common goals.'
        },
        {
          icon: '🚀',
          title: 'Innovation',
          description: 'I\'m always exploring new technologies and approaches to solve problems creatively.'
        }
      ],
      
      funFacts: [
        { icon: '☕', value: '500+', label: 'Cups of Coffee' },
        { icon: '💻', value: '50+', label: 'Projects Completed' },
        { icon: '🌙', value: '1000+', label: 'Hours of Coding' },
        { icon: '📚', value: '20+', label: 'Technologies Learned' }
      ]
    }
  }
}
</script>