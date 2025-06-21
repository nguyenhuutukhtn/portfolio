<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
            NT
          </div>
          <span class="hidden sm:block font-semibold text-gray-900 text-lg">Nguyen Huu Tu</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="nav-link relative px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            :class="{ 'text-blue-600': $route.path === item.path }"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 origin-left"
              :class="{ 'scale-x-100': $route.path === item.path }"
            ></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
          <div class="px-4 py-4 space-y-2">
            <NuxtLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              @click="closeMobileMenu"
              class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === item.path }"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'CV', path: '/cv' },
  { name: 'Contact', path: '/contact' }
]

// Mobile menu state
const mobileMenuOpen = ref(false)

// Mobile menu functions
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

// Close mobile menu on click outside
onMounted(() => {
  if (process.client) {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (!target.closest('header') && mobileMenuOpen.value) {
        closeMobileMenu()
      }
    })
  }
})

// Header scroll effect
onMounted(() => {
  if (process.client) {
    const header = document.querySelector('header')
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (header) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          header.style.transform = 'translateY(-100%)'
        } else {
          // Scrolling up - show header
          header.style.transform = 'translateY(0)'
        }
        lastScrollY = currentScrollY
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }
})
</script>

<style scoped>
.nav-link:hover span {
  transform: scaleX(1);
}

header {
  transition: transform 0.3s ease-in-out;
}
</style> 