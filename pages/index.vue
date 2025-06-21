<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="section-padding pt-24 lg:pt-32 min-h-screen flex items-center">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="text-center lg:text-left">
            <div class="mb-6">
              <h1 
                ref="heroName" 
                class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 opacity-0"
              >
                Hi, I'm <span class="text-gradient">Nguyen Huu Tu</span>
              </h1>
              <div 
                ref="heroTitle" 
                class="text-xl md:text-2xl text-gray-600 mb-6 opacity-0"
              >
                <span class="typewriter-text"></span>
                <span class="cursor">|</span>
              </div>
            </div>
            
            <p 
              ref="heroDescription" 
              class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0"
            >
              {{ cvStore.personalInfo.summary }}
            </p>

            <!-- CTA Buttons -->
            <div 
              ref="heroButtons" 
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0"
            >
              <NuxtLink to="/projects" class="btn-primary">
                <Icon name="heroicons:code-bracket" class="w-5 h-5 mr-2" />
                View My Projects
              </NuxtLink>
              <NuxtLink to="/cv" class="btn-secondary">
                <Icon name="heroicons:document-text" class="w-5 h-5 mr-2" />
                Download CV
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary">
                <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
                Get In Touch
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div 
              ref="heroStats" 
              class="grid grid-cols-3 gap-6 mt-12 opacity-0"
            >
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-blue-600">{{ cvStore.totalExperience }}+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-blue-600">{{ projectsStore.projects.length }}+</div>
                <div class="text-sm text-gray-600">Projects Done</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-blue-600">{{ cvStore.activeCertifications.length }}+</div>
                <div class="text-sm text-gray-600">Certifications</div>
              </div>
            </div>
          </div>

          <!-- Hero Image/Animation -->
          <div class="flex justify-center lg:justify-end">
            <div 
              ref="heroImage" 
              class="relative w-80 h-80 lg:w-96 lg:h-96 opacity-0"
            >
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div class="absolute inset-4 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full opacity-30 animate-pulse delay-1000"></div>
              
              <!-- Profile placeholder or actual image -->
              <div class="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-800 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                NT
              </div>
              
              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-lg rotate-12 opacity-80 animate-bounce delay-500">
                <Icon name="heroicons:code-bracket" class="w-8 h-8 text-yellow-800 mx-auto mt-4" />
              </div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-lg -rotate-12 opacity-80 animate-bounce delay-1000">
                <Icon name="heroicons:device-phone-mobile" class="w-8 h-8 text-green-800 mx-auto mt-4" />
              </div>
              <div class="absolute top-1/2 -left-8 w-12 h-12 bg-red-400 rounded-full opacity-80 animate-bounce delay-1500">
                <Icon name="heroicons:server" class="w-6 h-6 text-red-800 mx-auto mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 
            ref="featuredTitle" 
            class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 opacity-0"
          >
            Featured Projects
          </h2>
          <p 
            ref="featuredDescription" 
            class="text-lg text-gray-600 max-w-2xl mx-auto opacity-0"
          >
            Here are some of my recent projects that showcase my skills across different technologies and domains.
          </p>
        </div>

        <div 
          ref="featuredGrid" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProjectCard
            v-for="project in projectsStore.featuredProjects"
            :key="project.id"
            :project="project"
            class="project-card opacity-0"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink 
            ref="viewAllButton" 
            to="/projects" 
            class="btn-primary opacity-0"
          >
            <Icon name="heroicons:arrow-right" class="w-5 h-5 mr-2" />
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skills Overview Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 
            ref="skillsTitle" 
            class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 opacity-0"
          >
            Technical Skills
          </h2>
          <p 
            ref="skillsDescription" 
            class="text-lg text-gray-600 max-w-2xl mx-auto opacity-0"
          >
            I specialize in a wide range of technologies across the full development stack.
          </p>
        </div>

        <div 
          ref="skillsGrid" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="skillGroup in cvStore.skillGroups.slice(0, 6)"
            :key="skillGroup.name"
            class="skill-item flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-0"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Icon :name="skillGroup.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">{{ skillGroup.name }}</h3>
                <p class="text-xs text-gray-600">{{ skillGroup.skills.length }} technologies</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 flex-1">{{ skillGroup.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="skill in skillGroup.skills.slice(0, 4)"
                :key="skill"
                class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium"
              >
                {{ skill }}
              </span>
              <span
                v-if="skillGroup.skills.length > 4"
                class="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded font-medium"
              >
                +{{ skillGroup.skills.length - 4 }} more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div class="container-custom text-center">
        <h2 
          ref="ctaTitle" 
          class="text-3xl md:text-4xl font-bold mb-6 opacity-0"
        >
          Ready to Work Together?
        </h2>
        <p 
          ref="ctaDescription" 
          class="text-xl mb-8 max-w-2xl mx-auto opacity-0"
        >
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.
        </p>
        <div 
          ref="ctaButtons" 
          class="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
        >
          <NuxtLink 
            to="/contact" 
            class="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
          </NuxtLink>
          <a 
            href="/cv/Nguyen-Huu-Tu-CV.pdf" 
            download 
            class="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Stores
const projectsStore = useProjectsStore()
const cvStore = useCvStore()

// Template refs
const heroName = ref<HTMLElement>()
const heroTitle = ref<HTMLElement>()
const heroDescription = ref<HTMLElement>()
const heroButtons = ref<HTMLElement>()
const heroStats = ref<HTMLElement>()
const heroImage = ref<HTMLElement>()
const featuredTitle = ref<HTMLElement>()
const featuredDescription = ref<HTMLElement>()
const featuredGrid = ref<HTMLElement>()
const viewAllButton = ref<HTMLElement>()
const skillsTitle = ref<HTMLElement>()
const skillsDescription = ref<HTMLElement>()
const skillsGrid = ref<HTMLElement>()
const ctaTitle = ref<HTMLElement>()
const ctaDescription = ref<HTMLElement>()
const ctaButtons = ref<HTMLElement>()

// SEO
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Nguyen Huu Tu - Full-Stack Developer specializing in Frontend, Backend, Mobile, and DevOps. View my portfolio and get in touch for opportunities.' },
    { property: 'og:title', content: 'Nguyen Huu Tu - Full-Stack Developer Portfolio' },
    { property: 'og:description', content: 'Passionate Full-Stack Developer with 5+ years of experience. Expert in React, Vue, Node.js, Flutter, and cloud technologies.' }
  ]
})

// Typewriter effect
const typewriterTexts = [
  'Full-Stack Developer',
  'Frontend Expert',
  'Mobile Developer',
  'Backend Engineer',
  'DevOps Specialist',
  'UI/UX Designer'
]

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Typewriter animation
    const typewriterElement = document.querySelector('.typewriter-text')
    if (typewriterElement) {
      let textIndex = 0
      let charIndex = 0
      let isDeleting = false
      
      function typeWriter() {
        const currentText = typewriterTexts[textIndex]
        
        if (isDeleting) {
          typewriterElement.textContent = currentText.substring(0, charIndex - 1)
          charIndex--
        } else {
          typewriterElement.textContent = currentText.substring(0, charIndex + 1)
          charIndex++
        }
        
        let typeSpeed = isDeleting ? 50 : 100
        
        if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 2000
          isDeleting = true
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % typewriterTexts.length
        }
        
        setTimeout(typeWriter, typeSpeed)
      }
      
      typeWriter()
    }

    // Hero animations
    const tl = gsap.timeline()
    
    tl.to(heroName.value, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      .to(heroTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to(heroDescription.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to(heroButtons.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to(heroStats.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to(heroImage.value, { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }, '-=0.8')

    // Featured projects animations
    gsap.set(featuredTitle.value, { opacity: 0, y: 50 })
    gsap.set(featuredDescription.value, { opacity: 0, y: 30 })
    gsap.set(viewAllButton.value, { opacity: 0, y: 30 })

    ScrollTrigger.create({
      trigger: featuredTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(featuredTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        gsap.to(featuredDescription.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 })
        
        // Animate project cards
        gsap.to('.project-card', {
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          delay: 0.4
        })
        
        gsap.to(viewAllButton.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 })
      }
    })

    // Skills animations
    ScrollTrigger.create({
      trigger: skillsTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(skillsTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        gsap.to(skillsDescription.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 })
        gsap.to('.skill-item', {
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          delay: 0.4
        })
      }
    })

    // CTA animations
    ScrollTrigger.create({
      trigger: ctaTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(ctaTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        gsap.to(ctaDescription.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 })
        gsap.to(ctaButtons.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.4 })
      }
    })
  }
})
</script>

<style scoped>
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.project-card {
  transform: translateY(30px);
}

.skill-item {
  transform: translateY(30px);
}
</style> 