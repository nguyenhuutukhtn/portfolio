<template>
  <div class="card p-6 group cursor-pointer h-full flex flex-col">
    <!-- Project Image -->
    <div class="relative overflow-hidden rounded-lg mb-4 h-48">
      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <!-- Placeholder for project image -->
        <div class="text-6xl text-gray-400">
          <Icon 
            :name="getProjectIcon(project.category)" 
            class="w-16 h-16 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" 
          />
        </div>
      </div>
      
      <!-- Category Badge -->
      <div class="absolute top-3 left-3">
        <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
          {{ project.category }}
        </span>
      </div>

      <!-- Featured Badge -->
      <div v-if="project.featured" class="absolute top-3 right-3">
        <span class="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-medium rounded-full flex items-center">
          <Icon name="heroicons:star-solid" class="w-3 h-3 mr-1" />
          Featured
        </span>
      </div>

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div class="p-4 text-white">
          <div class="flex space-x-2">
            <a
              v-if="project.liveDemo"
              :href="project.liveDemo"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
              @click.stop
            >
              <Icon name="heroicons:eye" class="w-4 h-4" />
            </a>
            <a
              v-if="project.githubRepo"
              :href="project.githubRepo"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
              @click.stop
            >
              <Icon name="mdi:github" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="flex-1 flex flex-col">
      <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
        {{ project.shortDescription }}
      </p>

      <!-- Technologies -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies.slice(0, 3)"
            :key="tech"
            class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
          >
            {{ tech }}
          </span>
          <span
            v-if="project.technologies.length > 3"
            class="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium"
          >
            +{{ project.technologies.length - 3 }} more
          </span>
        </div>
      </div>

      <!-- Achievements -->
      <div v-if="project.achievements.length > 0" class="mb-4">
        <div class="flex items-center text-green-600 text-sm">
          <Icon name="heroicons:check-circle" class="w-4 h-4 mr-1" />
          <span class="font-medium">{{ project.achievements[0] }}</span>
        </div>
      </div>

      <!-- View Details Button -->
      <div class="mt-auto">
        <NuxtLink 
          :to="`/projects/${project.id}`"
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline transition-colors duration-300"
        >
          View Details
          <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/stores/projects'

// Props
interface Props {
  project: Project
}

const props = defineProps<Props>()

// Get appropriate icon for project category
function getProjectIcon(category: Project['category']) {
  const icons = {
    Frontend: 'heroicons:computer-desktop',
    Mobile: 'heroicons:device-phone-mobile',
    Backend: 'heroicons:server',
    Design: 'heroicons:paint-brush',
    DevOps: 'heroicons:cloud',
    Testing: 'heroicons:bug-ant'
  }
  
  return icons[category] || 'heroicons:code-bracket'
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 