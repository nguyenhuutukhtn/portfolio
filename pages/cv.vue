<template>
  <div class="min-h-screen pt-24">
    <!-- Page Header -->
    <section class="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div class="container-custom text-center">
        <h1 
          ref="pageTitle" 
          class="text-4xl md:text-5xl font-bold mb-6 opacity-0"
        >
          Curriculum Vitae
        </h1>
        <p 
          ref="pageSubtitle" 
          class="text-xl mb-8 max-w-2xl mx-auto opacity-0"
        >
          {{ cvStore.personalInfo.title }}
        </p>
        <div 
          ref="downloadButton" 
          class="opacity-0"
        >
          <a 
            href="/cv/Nguyen-Huu-Tu-CV.pdf" 
            download 
            class="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
            Download PDF CV
          </a>
        </div>
      </div>
    </section>

    <!-- Personal Info Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Personal Details -->
          <div class="lg:col-span-1">
            <div 
              ref="personalCard" 
              class="card p-8 text-center lg:text-left opacity-0"
            >
              <!-- Profile Image -->
              <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto lg:mx-0 mb-6">
                {{ cvStore.personalInfo.name.split(' ').map(n => n[0]).join('') }}
              </div>
              
              <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ cvStore.personalInfo.name }}</h2>
              <p class="text-blue-600 font-medium mb-6">{{ cvStore.personalInfo.title }}</p>
              
              <!-- Contact Info -->
              <div class="space-y-3 text-sm">
                <div class="flex items-center justify-center lg:justify-start">
                  <Icon name="heroicons:envelope" class="w-4 h-4 text-gray-400 mr-3" />
                  <a :href="`mailto:${cvStore.personalInfo.email}`" class="text-gray-600 hover:text-blue-600">
                    {{ cvStore.personalInfo.email }}
                  </a>
                </div>
                <div class="flex items-center justify-center lg:justify-start">
                  <Icon name="heroicons:phone" class="w-4 h-4 text-gray-400 mr-3" />
                  <span class="text-gray-600">{{ cvStore.personalInfo.phone }}</span>
                </div>
                <div class="flex items-center justify-center lg:justify-start">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 text-gray-400 mr-3" />
                  <span class="text-gray-600">{{ cvStore.personalInfo.location }}</span>
                </div>
              </div>

              <!-- Social Links -->
              <div class="flex justify-center lg:justify-start space-x-4 mt-6">
                <a :href="cvStore.personalInfo.linkedin" target="_blank" class="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors">
                  <Icon name="mdi:linkedin" class="w-5 h-5 text-blue-600" />
                </a>
                <a :href="cvStore.personalInfo.github" target="_blank" class="p-2 bg-gray-100 hover:bg-gray-800 rounded-lg transition-colors">
                  <Icon name="mdi:github" class="w-5 h-5 text-gray-800" />
                </a>
              </div>
            </div>
          </div>

          <!-- Summary -->
          <div class="lg:col-span-2">
            <div 
              ref="summarySection" 
              class="opacity-0"
            >
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                {{ cvStore.personalInfo.summary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 
          ref="skillsTitle" 
          class="text-3xl font-bold text-gray-900 mb-12 text-center opacity-0"
        >
          Technical Skills
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="skillGroup in cvStore.skillGroups"
            :key="skillGroup.name"
            ref="skillGroups"
            class="skill-group-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 opacity-0"
            :class="skillGroup.name === 'Open Source' ? 'md:col-span-2 lg:col-span-3' : ''"
          >
            <!-- Group Header -->
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Icon :name="skillGroup.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ skillGroup.name }}</h3>
                <p class="text-sm text-gray-600">{{ skillGroup.description }}</p>
              </div>
            </div>

            <!-- Skills Badges -->
            <div class="flex flex-wrap gap-2">
              <template v-if="skillGroup.name === 'Open Source'">
                <!-- Special handling for Open Source contributions with links -->
                <a
                  v-for="skill in skillGroup.skills"
                  :key="skill"
                  :href="getOpenSourceLink(skill)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="skill-badge px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg font-medium text-sm hover:from-blue-100 hover:to-purple-100 hover:text-blue-800 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                  :aria-label="`View ${skill} on ${getOpenSourceType(skill)}`"
                >
                  <Icon :name="getOpenSourceIcon(skill)" class="w-4 h-4 mr-1 inline" />
                  {{ skill }}
                  <Icon name="heroicons:external-link" class="w-3 h-3 ml-1 inline opacity-60" />
                </a>
              </template>
              <template v-else>
                <!-- Regular skill badges -->
                <span
                  v-for="skill in skillGroup.skills"
                  :key="skill"
                  class="skill-badge px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 transform hover:scale-105"
                >
                  {{ skill }}
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 
          ref="experienceTitle" 
          class="text-3xl font-bold text-gray-900 mb-12 text-center opacity-0"
        >
          Professional Experience
        </h2>
        
        <div class="space-y-8">
          <div
            v-for="(experience, index) in cvStore.experiences"
            :key="experience.id"
            ref="experienceItems"
            class="card p-8 opacity-0"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ experience.position }}</h3>
                <p class="text-blue-600 font-medium">{{ experience.company }}</p>
                <p class="text-sm text-gray-500">{{ experience.location }}</p>
              </div>
              <div class="text-sm text-gray-500 mt-2 md:mt-0">
                {{ formatDate(experience.startDate) }} - {{ experience.current ? 'Present' : formatDate(experience.endDate!) }}
              </div>
            </div>
            
            <p class="text-gray-600 mb-4">{{ experience.description }}</p>
            
            <!-- Achievements -->
            <div class="mb-4">
              <h4 class="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
              <ul class="space-y-1">
                <li 
                  v-for="achievement in experience.achievements"
                  :key="achievement"
                  class="flex items-start text-sm"
                >
                  <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in experience.technologies"
                :key="tech"
                class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Certifications -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Education -->
          <div>
            <h2 
              ref="educationTitle" 
              class="text-2xl font-bold text-gray-900 mb-8 opacity-0"
            >
              Education
            </h2>
            <div
              v-for="edu in cvStore.education"
              :key="edu.id"
              ref="educationItems"
              class="card p-6 mb-6 opacity-0"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ edu.degree }}</h3>
              <p class="text-blue-600 font-medium mb-1">{{ edu.institution }}</p>
              <p class="text-gray-600 text-sm mb-3">{{ edu.field }} | {{ formatDate(edu.startDate) }} - {{ formatDate(edu.endDate) }}</p>
              <p v-if="edu.gpa" class="text-sm text-gray-600 mb-3">GPA: {{ edu.gpa }}</p>
              <p v-if="edu.description" class="text-gray-700">{{ edu.description }}</p>
            </div>
          </div>

          <!-- Certifications -->
          <div>
            <h2 
              ref="certificationsTitle" 
              class="text-2xl font-bold text-gray-900 mb-8 opacity-0"
            >
              Certifications
            </h2>
            <div
              v-for="cert in cvStore.activeCertifications"
              :key="cert.id"
              ref="certificationItems"
              class="card p-6 mb-6 opacity-0"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ cert.name }}</h3>
              <p class="text-blue-600 font-medium mb-1">{{ cert.issuer }}</p>
              <p class="text-gray-600 text-sm mb-3">
                Issued: {{ formatDate(cert.issueDate) }}
                <span v-if="cert.expiryDate"> | Expires: {{ formatDate(cert.expiryDate) }}</span>
              </p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500">{{ cert.credentialId }}</span>
                <a
                  v-if="cert.verificationUrl"
                  :href="cert.verificationUrl"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Verify →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Store
const cvStore = useCvStore()

// Template refs
const pageTitle = ref<HTMLElement>()
const pageSubtitle = ref<HTMLElement>()
const downloadButton = ref<HTMLElement>()
const personalCard = ref<HTMLElement>()
const summarySection = ref<HTMLElement>()
const skillsTitle = ref<HTMLElement>()
const skillGroups = ref<HTMLElement[]>([])
const experienceTitle = ref<HTMLElement>()
const experienceItems = ref<HTMLElement[]>([])
const educationTitle = ref<HTMLElement>()
const educationItems = ref<HTMLElement[]>([])
const certificationsTitle = ref<HTMLElement>()
const certificationItems = ref<HTMLElement[]>([])

// SEO
useHead({
  title: 'CV',
  meta: [
    { name: 'description', content: 'Nguyen Huu Tu\'s professional CV and resume. Full-Stack Developer with expertise in frontend, backend, mobile, and DevOps technologies.' },
    { property: 'og:title', content: 'CV - Nguyen Huu Tu Portfolio' },
    { property: 'og:description', content: 'Comprehensive CV showcasing professional experience, skills, education, and certifications in software development.' }
  ]
})

// Utility functions
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  })
}

function getCategoryIcon(category: string) {
  const icons = {
    Frontend: 'heroicons:computer-desktop',
    Mobile: 'heroicons:device-phone-mobile',
    Backend: 'heroicons:server',
    Design: 'heroicons:paint-brush',
    Testing: 'heroicons:bug-ant',
    DevOps: 'heroicons:cloud',
    Others: 'heroicons:cog-6-tooth'
  }
  return icons[category as keyof typeof icons] || 'heroicons:code-bracket'
}

// Open source utility functions
function getOpenSourceLink(packageName: string): string {
  const openSourceItem = cvStore.openSourceContributions.find(item => item.name === packageName)
  return openSourceItem?.url || '#'
}

function getOpenSourceType(packageName: string): string {
  const openSourceItem = cvStore.openSourceContributions.find(item => item.name === packageName)
  return openSourceItem?.type === 'npm' ? 'npm' : 'GitHub'
}

function getOpenSourceIcon(packageName: string): string {
  const openSourceItem = cvStore.openSourceContributions.find(item => item.name === packageName)
  return openSourceItem?.type === 'npm' ? 'mdi:npm' : 'mdi:github'
}

// Animations
onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Header animations
    const headerTL = gsap.timeline()
    headerTL
      .to(pageTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(pageSubtitle.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(downloadButton.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')

    // Personal info animations
    ScrollTrigger.create({
      trigger: personalCard.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to([personalCard.value, summarySection.value], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        })
      }
    })

    // Skills animations
    ScrollTrigger.create({
      trigger: skillsTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(skillsTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        gsap.to(skillGroups.value, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.3
        })
        
        // Animate skill badges with stagger effect after the cards appear
        setTimeout(() => {
          gsap.fromTo('.skill-badge', 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.02, ease: 'back.out(1.7)' }
          )
        }, 800)
      }
    })

    // Experience animations
    ScrollTrigger.create({
      trigger: experienceTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(experienceTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        gsap.to(experienceItems.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.3
        })
      }
    })

    // Education & Certifications
    ScrollTrigger.create({
      trigger: educationTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to([educationTitle.value, certificationsTitle.value], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out'
        })
        gsap.to([...educationItems.value, ...certificationItems.value], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3
        })
      }
    })
  }
})
</script> 