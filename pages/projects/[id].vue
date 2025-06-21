<template>
  <div v-if="project" class="min-h-screen pt-24">
    <!-- Breadcrumb -->
    <section class="py-8 bg-gray-50">
      <div class="container-custom">
        <nav class="flex items-center space-x-2 text-sm">
          <NuxtLink to="/" class="text-gray-500 hover:text-blue-600">Home</NuxtLink>
          <Icon name="heroicons:chevron-right" class="w-4 h-4 text-gray-400" />
          <NuxtLink to="/projects" class="text-gray-500 hover:text-blue-600">Projects</NuxtLink>
          <Icon name="heroicons:chevron-right" class="w-4 h-4 text-gray-400" />
          <span class="text-gray-900">{{ project.title }}</span>
        </nav>
      </div>
    </section>

    <!-- Project Header -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Project Info -->
          <div>
            <div class="mb-6">
              <div class="flex items-center gap-4 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {{ project.category }}
                </span>
                <span v-if="project.featured" class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full flex items-center">
                  <Icon name="heroicons:star-solid" class="w-3 h-3 mr-1" />
                  Featured
                </span>
              </div>
              
              <h1 
                ref="projectTitle" 
                class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 opacity-0"
              >
                {{ project.title }}
              </h1>
              
              <p 
                ref="projectRole" 
                class="text-lg text-gray-600 mb-6 opacity-0"
              >
                {{ project.role }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div 
              ref="projectActions" 
              class="flex flex-wrap gap-4 mb-8 opacity-0"
            >
              <a
                v-if="project.liveDemo"
                :href="project.liveDemo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
              >
                <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
                Live Demo
              </a>
              <a
                v-if="project.githubRepo"
                :href="project.githubRepo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
              >
                <Icon name="mdi:github" class="w-5 h-5 mr-2" />
                View Code
              </a>
              <button
                @click="goBack"
                class="btn-secondary"
              >
                <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
                Back to Projects
              </button>
            </div>

            <!-- Technologies -->
            <div 
              ref="projectTechnologies" 
              class="mb-8 opacity-0"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Achievements -->
            <div 
              ref="projectAchievements" 
              class="opacity-0"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h3>
              <ul class="space-y-3">
                <li
                  v-for="achievement in project.achievements"
                  :key="achievement"
                  class="flex items-start"
                >
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Project Images/Carousel -->
          <div>
            <div 
              ref="projectCarousel" 
              class="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl opacity-0"
            >
              <!-- Carousel Container -->
              <div class="relative h-96 md:h-[500px]">
                <div
                  v-for="(image, index) in project.images"
                  :key="index"
                  class="absolute inset-0 transition-opacity duration-500"
                  :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
                >
                  <!-- Placeholder for project images -->
                  <div class="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                    <div class="text-center">
                      <Icon 
                        :name="getProjectIcon(project.category)" 
                        class="w-24 h-24 text-blue-500 mx-auto mb-4" 
                      />
                      <p class="text-gray-600 font-medium">{{ project.title }}</p>
                      <p class="text-sm text-gray-500 mt-1">Image {{ index + 1 }} of {{ project.images.length }}</p>
                    </div>
                  </div>
                </div>

                <!-- Navigation Arrows -->
                <button
                  v-if="project.images.length > 1"
                  @click="previousImage"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <Icon name="heroicons:chevron-left" class="w-6 h-6 text-gray-800" />
                </button>
                <button
                  v-if="project.images.length > 1"
                  @click="nextImage"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <Icon name="heroicons:chevron-right" class="w-6 h-6 text-gray-800" />
                </button>
              </div>

              <!-- Carousel Indicators -->
              <div v-if="project.images.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  v-for="(image, index) in project.images"
                  :key="index"
                  @click="currentImageIndex = index"
                  class="w-3 h-3 rounded-full transition-all duration-200"
                  :class="{
                    'bg-white': currentImageIndex === index,
                    'bg-white/50': currentImageIndex !== index
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Description -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 
            ref="descriptionTitle" 
            class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 opacity-0"
          >
            Project Overview
          </h2>
          <div 
            ref="descriptionContent" 
            class="prose prose-lg max-w-none text-gray-700 opacity-0"
          >
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 
          ref="relatedTitle" 
          class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center opacity-0"
        >
          Related Projects
        </h2>
        <div 
          ref="relatedGrid" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProjectCard
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.id"
            :project="relatedProject"
            class="related-project opacity-0"
          />
        </div>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen pt-24 flex items-center justify-center">
    <div class="text-center">
      <Icon name="heroicons:exclamation-triangle" class="w-24 h-24 text-gray-400 mx-auto mb-6" />
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
      <p class="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
      <NuxtLink to="/projects" class="btn-primary">
        <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
        Back to Projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Get route parameter
const route = useRoute()
const projectId = route.params.id as string

// Store
const projectsStore = useProjectsStore()

// Get project data
const project = computed(() => projectsStore.getProjectById(projectId))

// Related projects (same category, excluding current project)
const relatedProjects = computed(() => {
  if (!project.value) return []
  return projectsStore.projects
    .filter(p => p.category === project.value!.category && p.id !== project.value!.id)
    .slice(0, 3)
})

// Carousel state
const currentImageIndex = ref(0)

// Carousel functions
function nextImage() {
  if (project.value && project.value.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % project.value.images.length
  }
}

function previousImage() {
  if (project.value && project.value.images.length > 0) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? project.value.images.length - 1 
      : currentImageIndex.value - 1
  }
}

// Navigation
function goBack() {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/projects')
  }
}

// Get project icon
function getProjectIcon(category: string) {
  const icons = {
    Frontend: 'heroicons:computer-desktop',
    Mobile: 'heroicons:device-phone-mobile',
    Backend: 'heroicons:server',
    Design: 'heroicons:paint-brush',
    DevOps: 'heroicons:cloud',
    Testing: 'heroicons:bug-ant'
  }
  return icons[category as keyof typeof icons] || 'heroicons:code-bracket'
}

// Template refs
const projectTitle = ref<HTMLElement>()
const projectRole = ref<HTMLElement>()
const projectActions = ref<HTMLElement>()
const projectTechnologies = ref<HTMLElement>()
const projectAchievements = ref<HTMLElement>()
const projectCarousel = ref<HTMLElement>()
const descriptionTitle = ref<HTMLElement>()
const descriptionContent = ref<HTMLElement>()
const relatedTitle = ref<HTMLElement>()
const relatedGrid = ref<HTMLElement>()

// SEO
useHead(() => ({
  title: project.value ? project.value.title : 'Project Not Found',
  meta: project.value ? [
    { name: 'description', content: project.value.description },
    { property: 'og:title', content: `${project.value.title} - Nguyen Huu Tu Portfolio` },
    { property: 'og:description', content: project.value.shortDescription },
    { name: 'keywords', content: project.value.technologies.join(', ') }
  ] : [
    { name: 'description', content: 'Project not found' }
  ]
}))

// Auto-play carousel
onMounted(() => {
  if (process.client && project.value && project.value.images.length > 1) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Auto-play carousel every 5 seconds
    const interval = setInterval(() => {
      nextImage()
    }, 5000)

    // Animations
    const tl = gsap.timeline()
    tl.to(projectTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(projectRole.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to(projectActions.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(projectTechnologies.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(projectAchievements.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(projectCarousel.value, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6')

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: descriptionTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to([descriptionTitle.value, descriptionContent.value], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        })
      }
    })

    ScrollTrigger.create({
      trigger: relatedTitle.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(relatedTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        gsap.to('.related-project', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3
        })
      }
    })

    onUnmounted(() => {
      clearInterval(interval)
    })
  }
})

// 404 handling
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}
</script>

<style scoped>
.related-project {
  transform: translateY(30px);
}
</style> 