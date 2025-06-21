import { defineStore } from 'pinia'

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  category: 'Frontend' | 'Mobile' | 'Backend' | 'Design' | 'DevOps' | 'Testing'
  technologies: string[]
  role: string
  achievements: string[]
  images: string[]
  liveDemo?: string
  githubRepo?: string
  featured: boolean
  completedDate: string
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
        shortDescription: 'Full-stack e-commerce solution with modern UI and payment integration',
        category: 'Frontend' as const,
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        role: 'Full-Stack Developer',
        achievements: ['10k+ active users', '99.9% uptime', 'Reduced page load time by 40%'],
        images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg', '/projects/ecommerce-3.jpg'],
        liveDemo: 'https://demo-ecommerce.com',
        githubRepo: 'https://github.com/username/ecommerce-platform',
        featured: true,
        completedDate: '2024-03-15'
      },
      {
        id: 'project-2',
        title: 'Mobile Task Manager',
        description: 'Cross-platform mobile application for task management built with Flutter. Features offline sync, push notifications, team collaboration, and advanced analytics.',
        shortDescription: 'Cross-platform task management app with offline capabilities',
        category: 'Mobile' as const,
        technologies: ['Flutter', 'Firebase', 'SQLite', 'Push Notifications'],
        role: 'Mobile Developer',
        achievements: ['50k+ downloads', '4.8 app store rating', 'Featured on Play Store'],
        images: ['/projects/taskmanager-1.jpg', '/projects/taskmanager-2.jpg'],
        liveDemo: 'https://play.google.com/store/apps/details?id=com.taskmanager',
        githubRepo: 'https://github.com/username/task-manager-flutter',
        featured: true,
        completedDate: '2024-02-20'
      },
      {
        id: 'project-3',
        title: 'API Gateway Service',
        description: 'Microservices API gateway built with Node.js and Express. Handles authentication, rate limiting, request routing, and monitoring for distributed systems.',
        shortDescription: 'High-performance API gateway for microservices architecture',
        category: 'Backend' as const,
        technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
        role: 'Backend Engineer',
        achievements: ['Handles 1M+ requests/day', 'Sub-50ms response time', '99.99% availability'],
        images: ['/projects/api-gateway-1.jpg', '/projects/api-gateway-2.jpg'],
        githubRepo: 'https://github.com/username/api-gateway',
        featured: false,
        completedDate: '2024-01-10'
      },
      {
        id: 'project-4',
        title: 'Design System Library',
        description: 'Comprehensive design system and component library created in Figma with React implementation. Includes 50+ components, design tokens, and documentation.',
        shortDescription: 'Complete design system with reusable components and documentation',
        category: 'Design' as const,
        technologies: ['Figma', 'React', 'Storybook', 'TypeScript'],
        role: 'UI/UX Designer & Developer',
        achievements: ['Used by 5+ development teams', '90% faster prototyping', 'Improved design consistency'],
        images: ['/projects/design-system-1.jpg', '/projects/design-system-2.jpg'],
        liveDemo: 'https://storybook-design-system.com',
        githubRepo: 'https://github.com/username/design-system',
        featured: true,
        completedDate: '2023-12-05'
      },
      {
        id: 'project-5',
        title: 'CI/CD Pipeline',
        description: 'Automated CI/CD pipeline using GitHub Actions, Docker, and AWS. Features automated testing, security scanning, deployment, and monitoring.',
        shortDescription: 'Automated deployment pipeline with comprehensive testing and monitoring',
        category: 'DevOps' as const,
        technologies: ['GitHub Actions', 'Docker', 'AWS', 'Terraform', 'Monitoring'],
        role: 'DevOps Engineer',
        achievements: ['Reduced deployment time by 80%', 'Zero-downtime deployments', 'Automated security scanning'],
        images: ['/projects/cicd-1.jpg', '/projects/cicd-2.jpg'],
        githubRepo: 'https://github.com/username/cicd-pipeline',
        featured: false,
        completedDate: '2023-11-20'
      },
      {
        id: 'project-6',
        title: 'Automated Testing Suite',
        description: 'Comprehensive automated testing framework using Selenium and Cypress. Includes unit tests, integration tests, and end-to-end testing with detailed reporting.',
        shortDescription: 'Complete automated testing solution with detailed reporting',
        category: 'Testing' as const,
        technologies: ['Selenium', 'Cypress', 'Jest', 'Playwright', 'Allure Reports'],
        role: 'QA Automation Engineer',
        achievements: ['95% test coverage', 'Reduced testing time by 70%', 'Improved bug detection rate'],
        images: ['/projects/testing-1.jpg', '/projects/testing-2.jpg'],
        githubRepo: 'https://github.com/username/automated-testing',
        featured: false,
        completedDate: '2023-10-15'
      }
    ] as Project[],
    selectedCategory: 'All' as 'All' | Project['category'],
    searchQuery: ''
  }),

  getters: {
    filteredProjects: (state) => {
      let filtered = state.projects

      // Filter by category
      if (state.selectedCategory !== 'All') {
        filtered = filtered.filter(project => project.category === state.selectedCategory)
      }

      // Filter by search query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase()
        filtered = filtered.filter(project =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => tech.toLowerCase().includes(query))
        )
      }

      return filtered
    },

    featuredProjects: (state) => {
      return state.projects.filter(project => project.featured)
    },

    projectsByCategory: (state) => {
      const categories = ['Frontend', 'Mobile', 'Backend', 'Design', 'DevOps', 'Testing'] as const
      return categories.reduce((acc, category) => {
        acc[category] = state.projects.filter(project => project.category === category)
        return acc
      }, {} as Record<Project['category'], Project[]>)
    },

    categories: (state) => {
      const categoryCounts = state.projects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1
        return acc
      }, {} as Record<Project['category'], number>)

      return Object.entries(categoryCounts).map(([category, count]) => ({
        name: category as Project['category'],
        count
      }))
    }
  },

  actions: {
    setCategory(category: 'All' | Project['category']) {
      this.selectedCategory = category
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    getProjectById(id: string): Project | undefined {
      return this.projects.find(project => project.id === id)
    },

    clearFilters() {
      this.selectedCategory = 'All'
      this.searchQuery = ''
    }
  }
}) 