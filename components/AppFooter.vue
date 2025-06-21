<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom">
      <div class="section-padding">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- About Section -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                NT
              </div>
              <span class="font-semibold text-xl">Nguyen Huu Tu</span>
            </div>
            <p class="text-gray-300 mb-6 max-w-md">
              Full-Stack Developer passionate about creating innovative web applications, mobile apps, and cloud solutions. 
              Always eager to learn new technologies and tackle challenging problems.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://github.com/nguyenhuutu"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                aria-label="GitHub"
              >
                <Icon name="mdi:github" class="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nguyenhuutu"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Icon name="mdi:linkedin" class="w-5 h-5" />
              </a>
              <a
                href="mailto:nguyenhuutu@example.com"
                class="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                aria-label="Email"
              >
                <Icon name="mdi:email" class="w-5 h-5" />
              </a>
              <a
                href="tel:+84123456789"
                class="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                aria-label="Phone"
              >
                <Icon name="mdi:phone" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/projects" class="text-gray-300 hover:text-white transition-colors duration-300">
                  Projects
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cv" class="text-gray-300 hover:text-white transition-colors duration-300">
                  CV
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Skills -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Core Skills</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Frontend Development</li>
              <li>Mobile Development</li>
              <li>Backend Development</li>
              <li>DevOps & Cloud</li>
              <li>UI/UX Design</li>
              <li>Testing & QA</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 sm:mb-0">
            © {{ currentYear }} Nguyen Huu Tu. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm text-gray-400">
            <span>Built with Nuxt.js & Tailwind CSS</span>
            <span>•</span>
            <span>Hosted on Vercel</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Current year for copyright
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Add any custom footer styles here */
</style> 