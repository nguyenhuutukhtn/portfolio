import { defineStore } from 'pinia'

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  location: string
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Mobile' | 'Backend' | 'Design' | 'Testing' | 'DevOps' | 'Others'
  proficiency: number // 0-100
  years: number
}

export interface SkillGroup {
  name: string
  description: string
  icon: string
  skills: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  description?: string
  location: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  verificationUrl?: string
}

export interface OpenSourceContribution {
  id: string
  name: string
  description: string
  type: 'npm' | 'github' | 'library'
  url: string
  stars?: number
  downloads?: string
  technologies: string[]
}

export const useCvStore = defineStore('cv', {
  state: () => ({
    personalInfo: {
      name: 'Nguyen Huu Tu',
      title: 'Full-Stack Developer | Frontend, Backend, Mobile, DevOps Expert',
      email: 'nguyenhuutu@example.com',
      phone: '+84 123 456 789',
      location: 'Ho Chi Minh City, Vietnam',
      website: 'https://nguyenhuutu.dev',
      linkedin: 'https://linkedin.com/in/nguyenhuutu',
      github: 'https://github.com/nguyenhuutu',
      summary: 'Passionate Full-Stack Developer with 5+ years of experience building scalable web applications, mobile apps, and cloud infrastructure. Expert in modern JavaScript frameworks, cloud platforms, and DevOps practices. Proven track record of delivering high-quality solutions for startups and enterprise clients.'
    },

    experiences: [
      {
        id: 'exp-1',
        company: 'Tech Innovations Ltd',
        position: 'Senior Full-Stack Developer',
        startDate: '2022-01',
        endDate: undefined,
        current: true,
        description: 'Lead development of enterprise web applications and mobile solutions serving 100k+ users. Architect scalable systems and mentor junior developers.',
        achievements: [
          'Led development of customer portal that increased user engagement by 150%',
          'Reduced application load time by 60% through performance optimization',
          'Mentored 5 junior developers and established coding best practices',
          'Implemented CI/CD pipeline reducing deployment time by 80%'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
        location: 'Ho Chi Minh City, Vietnam'
      },
      {
        id: 'exp-2',
        company: 'Digital Solutions Co',
        position: 'Frontend Developer',
        startDate: '2020-06',
        endDate: '2021-12',
        current: false,
        description: 'Developed responsive web applications and mobile-first interfaces for various client projects using modern frontend technologies.',
        achievements: [
          'Built 15+ responsive web applications with 99%+ uptime',
          'Improved mobile performance scores by 40% across all projects',
          'Collaborated with design team to implement pixel-perfect UIs',
          'Introduced automated testing increasing code coverage to 90%'
        ],
        technologies: ['Vue.js', 'React', 'Tailwind CSS', 'Jest', 'Cypress'],
        location: 'Ho Chi Minh City, Vietnam'
      },
      {
        id: 'exp-3',
        company: 'StartupX',
        position: 'Full-Stack Developer',
        startDate: '2019-03',
        endDate: '2020-05',
        current: false,
        description: 'Full-stack development for early-stage startup. Built MVP from scratch and scaled to support growing user base.',
        achievements: [
          'Developed MVP that secured $500K seed funding',
          'Built backend API handling 10k+ daily active users',
          'Implemented real-time features using WebSocket technology',
          'Set up monitoring and alerting system'
        ],
        technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'AWS'],
        location: 'Ho Chi Minh City, Vietnam'
      }
    ] as Experience[],

    // Legacy skills data - kept for compatibility but not used in new design
    skills: [
      // Frontend
      { name: 'React', category: 'Frontend', proficiency: 95, years: 4 },
      { name: 'Vue.js', category: 'Frontend', proficiency: 90, years: 3 },
      { name: 'TypeScript', category: 'Frontend', proficiency: 88, years: 3 },
      { name: 'JavaScript', category: 'Frontend', proficiency: 95, years: 5 },
      { name: 'HTML/CSS', category: 'Frontend', proficiency: 92, years: 5 },
      { name: 'Tailwind CSS', category: 'Frontend', proficiency: 85, years: 2 },
      { name: 'Next.js', category: 'Frontend', proficiency: 82, years: 2 },
      { name: 'Nuxt.js', category: 'Frontend', proficiency: 80, years: 1 },

      // Mobile
      { name: 'Flutter', category: 'Mobile', proficiency: 85, years: 2 },
      { name: 'React Native', category: 'Mobile', proficiency: 78, years: 2 },
      { name: 'Android (Java/Kotlin)', category: 'Mobile', proficiency: 75, years: 2 },
      { name: 'iOS (Swift)', category: 'Mobile', proficiency: 70, years: 1 },

      // Backend
      { name: 'Node.js', category: 'Backend', proficiency: 90, years: 4 },
      { name: 'Python', category: 'Backend', proficiency: 85, years: 3 },
      { name: 'Express.js', category: 'Backend', proficiency: 88, years: 4 },
      { name: 'NestJS', category: 'Backend', proficiency: 82, years: 2 },
      { name: 'PostgreSQL', category: 'Backend', proficiency: 85, years: 3 },
      { name: 'MongoDB', category: 'Backend', proficiency: 80, years: 3 },
      { name: 'Redis', category: 'Backend', proficiency: 78, years: 2 },

      // DevOps
      { name: 'AWS', category: 'DevOps', proficiency: 80, years: 3 },
      { name: 'Docker', category: 'DevOps', proficiency: 85, years: 3 },
      { name: 'Kubernetes', category: 'DevOps', proficiency: 75, years: 2 },
      { name: 'GitHub Actions', category: 'DevOps', proficiency: 82, years: 2 },
      { name: 'Terraform', category: 'DevOps', proficiency: 70, years: 1 },

      // Design
      { name: 'Figma', category: 'Design', proficiency: 75, years: 2 },
      { name: 'Adobe XD', category: 'Design', proficiency: 70, years: 2 },
      { name: 'UI/UX Design', category: 'Design', proficiency: 78, years: 3 },

      // Testing
      { name: 'Jest', category: 'Testing', proficiency: 85, years: 3 },
      { name: 'Cypress', category: 'Testing', proficiency: 80, years: 2 },
      { name: 'Selenium', category: 'Testing', proficiency: 75, years: 2 },
      { name: 'Playwright', category: 'Testing', proficiency: 70, years: 1 },

      // Others
      { name: 'Git', category: 'Others', proficiency: 95, years: 5 },
      { name: 'Agile/Scrum', category: 'Others', proficiency: 85, years: 4 },
      { name: 'GraphQL', category: 'Others', proficiency: 78, years: 2 },
      { name: 'REST APIs', category: 'Others', proficiency: 92, years: 4 }
    ] as Skill[],

    // New organized skill groups for clean UI display
    skillGroups: [
      {
        name: 'Frontend',
        description: 'Expertise in building responsive and interactive web interfaces',
        icon: 'heroicons:computer-desktop',
        skills: ['React', 'Preact', 'Vue.js', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Nuxt.js']
      },
      {
        name: 'Mobile',
        description: 'Cross-platform mobile app development and native solutions',
        icon: 'heroicons:device-phone-mobile',
        skills: ['Flutter', 'Android', 'iOS', 'React Native']
      },
      {
        name: 'Backend',
        description: 'Server-side development and database management',
        icon: 'heroicons:server',
        skills: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'GraphQL']
      },
      {
        name: 'Design',
        description: 'UI/UX design and prototyping tools for creating user-centered experiences',
        icon: 'heroicons:paint-brush',
        skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping']
      },
      {
        name: 'Testing',
        description: 'Automated testing and quality assurance practices',
        icon: 'heroicons:bug-ant',
        skills: ['Selenium', 'Cypress', 'Jest', 'Playwright', 'E2E Testing']
      },
      {
        name: 'DevOps',
        description: 'Cloud infrastructure, deployment, and continuous integration',
        icon: 'heroicons:cloud',
        skills: ['AWS', 'Render.com', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD']
      },
      {
        name: 'Open Source',
        description: 'Published npm packages and contributions to the developer community',
        icon: 'heroicons:code-bracket',
        skills: ['vue-dynamic-forms', 'react-table-toolkit', 'node-api-boilerplate']
      }
    ] as SkillGroup[],

    education: [
      {
        id: 'edu-1',
        institution: 'University of Technology',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2015-09',
        endDate: '2019-06',
        gpa: '3.8/4.0',
        description: 'Specialized in Software Engineering and Web Development. Active member of Programming Club and Google Developer Student Club.',
        location: 'Ho Chi Minh City, Vietnam'
      }
    ] as Education[],

    certifications: [
      {
        id: 'cert-1',
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        issueDate: '2023-03',
        expiryDate: '2026-03',
        credentialId: 'AWS-SA-123456',
        verificationUrl: 'https://aws.amazon.com/verification'
      },
      {
        id: 'cert-2',
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        issueDate: '2022-08',
        expiryDate: '2025-08',
        credentialId: 'GCP-PD-789012'
      },
      {
        id: 'cert-3',
        name: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        issueDate: '2023-01',
        expiryDate: '2025-01',
        credentialId: 'CKA-345678'
      }
    ] as Certification[],

    openSourceContributions: [
      {
        id: 'os-1',
        name: 'vue-dynamic-forms',
        description: 'A Vue.js library for creating dynamic, reactive forms with validation',
        type: 'npm',
        url: 'https://www.npmjs.com/package/vue-dynamic-forms',
        downloads: '10k+ weekly',
        technologies: ['Vue.js', 'TypeScript', 'Vite']
      },
      {
        id: 'os-2',
        name: 'react-table-toolkit',
        description: 'Lightweight React table component with sorting, filtering, and pagination',
        type: 'github',
        url: 'https://github.com/username/react-table-toolkit',
        stars: 250,
        technologies: ['React', 'TypeScript', 'Styled Components']
      },
      {
        id: 'os-3',
        name: 'node-api-boilerplate',
        description: 'Production-ready Node.js API boilerplate with authentication and testing',
        type: 'github',
        url: 'https://github.com/username/node-api-boilerplate',
        stars: 180,
        technologies: ['Node.js', 'Express', 'JWT', 'Jest']
      }
    ] as OpenSourceContribution[]
  }),

  getters: {
    skillsByCategory: (state) => {
      return state.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = []
        }
        acc[skill.category].push(skill)
        return acc
      }, {} as Record<Skill['category'], Skill[]>)
    },

    topSkills: (state) => {
      return state.skills
        .sort((a, b) => b.proficiency - a.proficiency)
        .slice(0, 8)
    },

    currentExperience: (state) => {
      return state.experiences.find(exp => exp.current)
    },

    totalExperience: (state) => {
      const startDate = new Date(state.experiences[state.experiences.length - 1]?.startDate || '2019-01-01')
      const endDate = new Date()
      const years = (endDate.getTime() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
      return Math.floor(years)
    },

    activeCertifications: (state) => {
      const now = new Date()
      return state.certifications.filter(cert => {
        if (!cert.expiryDate) return true
        return new Date(cert.expiryDate) > now
      })
    }
  },

  actions: {
    getSkillProficiency(skillName: string): number {
      const skill = this.skills.find(s => s.name === skillName)
      return skill?.proficiency || 0
    },

    getSkillsByCategory(category: Skill['category']): Skill[] {
      return this.skills.filter(skill => skill.category === category)
    },

    addExperience(experience: Experience) {
      this.experiences.unshift(experience)
    },

    updateExperience(id: string, updates: Partial<Experience>) {
      const index = this.experiences.findIndex(exp => exp.id === id)
      if (index !== -1) {
        this.experiences[index] = { ...this.experiences[index], ...updates }
      }
    }
  }
}) 