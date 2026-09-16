export interface Project {
  name: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  image: string
}

export const projects: Project[] = [
  {
    name: 'Stock Watcher',
    description: 'A web application for tracking stock prices, built with Nuxt 4, Vue 3, TailwindCSS, and powered by the EODHD market data API',
    tags: ['nuxt', 'tailwind', 'api'],
    liveUrl: 'https://stock-watcher.davidsabalete.com',
    repoUrl: 'https://github.com/dsabalete/stock-watcher',
    image: '/stock-watcher.webp'
  },
  {
    name: 'AI Portfolio Assistant',
    description: 'An AI chatbot assistant built into this portfolio that answers questions about my experience, skills, projects and availability in multiple languages, with topic matching and analytics',
    tags: ['nuxt', 'vue', 'ai', 'typescript'],
    repoUrl: 'https://github.com/dsabalete/chatbot',
    image: '/chatbot.webp'
  },
  {
    name: 'Alex Sabalete Portfolio',
    description: 'A personal portfolio website built with React, TypeScript, and Vite for "Alex", featuring navigation between Home, About, and Contact pages with analytics tracking and a clean React 19 + TypeScript setup',
    tags: ['react', 'video'],
    liveUrl: 'https://alexsabalete.site/',
    image: '/alex-sabalete.webp'
  },
  {
    name: 'Foto Uploader',
    description: 'A web application for uploading photos to cloud storage, built with Vanilla JS, CSS and Netlify functions',
    tags: ['javascript', 'netlify'],
    liveUrl: 'https://foto-uploader.netlify.app/',
    repoUrl: 'https://github.com/dsabalete/foto-uploader',
    image: '/foto-uploader.webp'
  },
  {
    name: 'Gym Tracker',
    description: 'A modern web application for tracking gym workouts, built with Nuxt 4, Vue 3, TailwindCSS, and Firebase',
    tags: ['nuxt', 'tailwind', 'firebase'],
    liveUrl: 'https://gym.davidsabalete.com/login/index.html',
    repoUrl: 'https://github.com/dsabalete/gym-app',
    image: '/gym_tracker.webp'
  },
  {
    name: 'Tercer Espai',
    description: 'A web built with Nuxt.js, Tailwind and Supabase. It allows users to know about events organized by the organization Tercer Espai, get in touch with the organization, and get the latest news',
    tags: ['nuxt', 'tailwind', 'supabase'],
    liveUrl: 'https://tercerespai.org/',
    image: '/tercerespai.webp'
  }
]
