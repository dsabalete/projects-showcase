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
    liveUrl: 'https://www.davidsabalete.com',
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
    repoUrl: 'https://github.com/dsabalete/gym_app',
    image: '/gym_tracker.webp'
  },
  {
    name: 'Tercer Espai',
    description: 'A web built with Nuxt.js, Tailwind and Supabase. It allows users to know about events organized by the organization Tercer Espai, get in touch with the organization, and get the latest news',
    tags: ['nuxt', 'tailwind', 'supabase'],
    liveUrl: 'https://tercerespai.org/',
    image: '/tercerespai.webp'
  },
  {
    name: 'System Monitor',
    description: 'System Monitor is a web application for monitoring system resources, built with Node, Express and vanilla javascript.',
    tags: ['node', 'express', 'vanillajs'],
    repoUrl: 'https://github.com/dsabalete/system-monitor',
    image: '/system-monitor.webp'
  },
  {
    name: 'Goat Notes taking app with AI',
    description: 'GOAT Notes is a modern note-taking application built with Next.js, Supabase, and Prisma. It allows users to create, edit, delete, and search notes, with additional features like AI-powered insights and a responsive design.',
    tags: ['next', 'supabase', 'prisma'],
    liveUrl: 'https://fcc-goat-notes.vercel.app/',
    repoUrl: 'https://github.com/dsabalete/fcc-goat-notes',
    image: '/goat-notes.webp'
  },
  {
    name: 'QR Code Generator',
    description: 'Webapp tool for generating QR Codes from valid URLs. Static Astro website with Cloudfare Worker to generate the image.',
    tags: ['astro', 'cloudflare'],
    liveUrl: 'https://qr-code-e3h.pages.dev/',
    repoUrl: 'https://github.com/dsabalete/qr-code',
    image: '/qrcode.webp'
  },
  {
    name: 'Space tourism',
    description: 'A website for a space tourism company. It is a static website with responsive design, plain CSS and a bit of vanilla javascript.',
    tags: ['html', 'css', 'javascript'],
    liveUrl: 'https://space.davidsabalete.com',
    repoUrl: 'https://github.com/dsabalete/space-tourism',
    image: '/space-tourism.webp'
  },
  {
    name: 'Creu Alta website',
    description: 'Creu Alta Sabadell Basket website. It is running on Drupal as CMS an it has a VueJS app to register players during summer and christmas campus.',
    tags: ['drupal', 'vue'],
    liveUrl: 'https://www.creualtabasquet.cat',
    image: '/creualta.webp'
  },
  {
    name: 'Kiloday calculator',
    description: 'Alternative birthday calculator app made with Vue, Vite and Pinia',
    tags: ['vue', 'vite', 'pinia'],
    liveUrl: 'https://kiloday.davidsabalete.com',
    repoUrl: 'https://github.com/dsabalete/kiloday',
    image: '/kiloday.webp'
  },
  {
    name: 'My 1 RM website',
    description: 'App that calculates the 1RM of any training session. Made with Vuejs and hosted in Netlify.',
    tags: ['nuxt', 'netlify'],
    liveUrl: 'https://1rm.davidsabalete.com/',
    repoUrl: 'https://github.com/dsabalete/my-1-rm',
    image: '/1rm.webp'
  }
]
