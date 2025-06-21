<template>
  <div id="app" class="min-h-screen">
    <!-- Navigation -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// SEO and Head Management
useHead({
  titleTemplate: '%s | Nguyen Huu Tu - Portfolio',
  meta: [
    { name: 'author', content: 'Nguyen Huu Tu' },
    { name: 'theme-color', content: '#3B82F6' }
  ]
})

// Initialize GSAP ScrollTrigger for page animations
onMounted(() => {
  if (process.client) {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      import('gsap').then(({ gsap }) => {
        gsap.registerPlugin(ScrollTrigger)
      })
    })
  }
})
</script>

<style scoped>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
