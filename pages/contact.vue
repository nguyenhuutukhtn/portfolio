<template>
  <div class="min-h-screen pt-24">
    <!-- Page Header -->
    <section class="section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get In Touch
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a question or just want to say hello, I'd love to hear from you!
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <div class="card p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    v-model="form.subject"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary w-full"
                  :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                </button>
              </form>

              <div v-if="submitStatus === 'success'" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-green-700 font-medium">Message sent successfully!</p>
                <p class="text-green-600 text-sm mt-1">I'll get back to you as soon as possible.</p>
              </div>

              <div v-if="submitStatus === 'error'" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-700 font-medium">Failed to send message</p>
                <p class="text-red-600 text-sm mt-1">Please try again or contact me directly via email.</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div>
            <div class="space-y-8">
              <div class="card p-8">
                <h3 class="text-xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                
                <div class="space-y-4">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      📧
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Email</p>
                      <a 
                        :href="`mailto:${cvStore.personalInfo.email}`" 
                        class="text-blue-600 hover:text-blue-700"
                      >
                        {{ cvStore.personalInfo.email }}
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      📱
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Phone</p>
                      <a 
                        :href="`tel:${cvStore.personalInfo.phone}`" 
                        class="text-green-600 hover:text-green-700"
                      >
                        {{ cvStore.personalInfo.phone }}
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      📍
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Location</p>
                      <p class="text-gray-600">{{ cvStore.personalInfo.location }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Current Availability</h3>
                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span class="font-medium text-green-700">Available for new projects</span>
                </div>
                <p class="text-gray-600 text-sm">
                  I'm currently available for freelance projects, full-time opportunities, 
                  and consulting work. Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Store
const cvStore = useCvStore()

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

// SEO
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch with Nguyen Huu Tu. Available for freelance projects, full-time opportunities, and consulting work.' }
  ]
})

// Form submission
async function submitForm() {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })

  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
  }
}
</script> 