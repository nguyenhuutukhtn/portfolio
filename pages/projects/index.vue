<template>
  <div class="min-h-screen pt-24">
    <!-- Page Header -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h1 
            ref="pageTitle" 
            class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 opacity-0"
          >
            My Projects
          </h1>
          <p 
            ref="pageDescription" 
            class="text-lg text-gray-600 max-w-3xl mx-auto opacity-0"
          >
            Explore my diverse portfolio of projects spanning frontend, mobile, backend, design, testing, and DevOps. 
            Each project represents a unique challenge and solution I've developed.
          </p>
        </div>
      </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="pb-8">
      <div class="container-custom">
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
          <!-- Search Bar -->
          <div class="mb-6">
            <div class="relative">
              <Icon name="heroicons:magnifying-glass" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                v-model="projectsStore.searchQuery"
                type="text"
                placeholder="Search projects by title, description, or technology..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap gap-3">
            <button
              @click="projectsStore.setCategory('All')"
              class="filter-btn"
              :class="{ active: projectsStore.selectedCategory === 'All' }"
            >
              All Projects
              <span class="ml-2 text-sm">({{ projectsStore.projects.length }})</span>
            </button>
            <button
              v-for="category in projectsStore.categories"
              :key="category.name"
              @click="projectsStore.setCategory(category.name)"
              class="filter-btn"
              :class="{ active: projectsStore.selectedCategory === category.name }"
            >
              {{ category.name }}
              <span class="ml-2 text-sm">({{ category.count }})</span>
            </button>
          </div>

          <!-- Clear Filters -->
          <div v-if="projectsStore.selectedCategory !== 'All' || projectsStore.searchQuery" class="mt-4 pt-4 border-t">
            <button
              @click="projectsStore.clearFilters"
              class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
            >
              <Icon name="heroicons:x-mark" class="w-4 h-4 mr-1" />
              Clear all filters
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding pt-0">
      <div class="container-custom">
        <!-- Results Info -->
        <div class="mb-8">
          <p class="text-gray-600">
            Showing {{ projectsStore.filteredProjects.length }} of {{ projectsStore.projects.length }} projects
            <span v-if="projectsStore.selectedCategory !== 'All' || projectsStore.searchQuery">
              for "{{ projectsStore.searchQuery || projectsStore.selectedCategory }}"
            </span>
          </p>
        </div>

        <!-- Projects Grid -->
        <div 
          ref="projectsGrid"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProjectCard
            v-for="project in projectsStore.filteredProjects"
            :key="project.id"
            :project="project"
            class="project-card opacity-0 transform translate-y-8"
          />
        </div>

        <!-- Empty State -->
        <div v-if="projectsStore.filteredProjects.length === 0" class="text-center py-16">
          <div class="text-gray-400 mb-4">
            <Icon name="heroicons:folder-open" class="w-16 h-16 mx-auto" />
          </div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
          <p class="text-gray-500 mb-6">
            Try adjusting your search terms or selected category to find what you're looking for.
          </p>
          <button
            @click="projectsStore.clearFilters"
            class="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Interested in Working Together?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects. 
          Let's connect and see how we can collaborate.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary">
            <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
            Get In Touch
          </NuxtLink>
          <NuxtLink to="/cv" class="btn-secondary">
            <Icon name="heroicons:document-text" class="w-5 h-5 mr-2" />
            View My CV
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Store
const projectsStore = useProjectsStore()

// Template refs
const pageTitle = ref<HTMLElement>()
const pageDescription = ref<HTMLElement>()
const projectsGrid = ref<HTMLElement>()

// SEO
useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Explore Nguyen Huu Tu\'s diverse portfolio of projects including frontend, mobile, backend, design, testing, and DevOps solutions.' },
    { property: 'og:title', content: 'Projects - Nguyen Huu Tu Portfolio' },
    { property: 'og:description', content: 'Discover innovative projects across multiple technologies and domains. From web applications to mobile apps and cloud solutions.' },
    { name: 'keywords', content: 'projects, portfolio, web development, mobile apps, frontend, backend, DevOps, React, Vue, Flutter, Node.js' }
  ]
})

// Watch for filter changes and animate grid
watch(
  () => projectsStore.filteredProjects,
  () => {
    if (process.client) {
      // Reset and animate project cards
      gsap.set('.project-card', { opacity: 0, y: 30 })
      gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      })
    }
  },
  { flush: 'post' }
)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Page header animations
    const headerTL = gsap.timeline()
    headerTL
      .to(pageTitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(pageDescription.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')

    // Initial project cards animation
    gsap.to('.project-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.3
    })

    // Scroll-triggered animations for project cards
    ScrollTrigger.create({
      trigger: projectsGrid.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to('.project-card', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out'
        })
      }
    })
  }
})
</script>

<style scoped>
.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: 1px solid #d1d5db;
  color: #374151;
  background-color: white;
  cursor: pointer;
}

.filter-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.filter-btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.filter-btn.active {
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
}

.filter-btn.active:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

.project-card {
  transition: all 0.3s ease;
}
</style> 