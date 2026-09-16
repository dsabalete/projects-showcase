<script setup lang="ts">
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard.vue'

function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle('dark')
  const isDark = html.classList.contains('dark')
  html.classList.toggle('light', !isDark)
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}
</script>

<template>
  <main id="app">
    <section id="hero">
      <a class="site-link" href="https://www.davidsabalete.com" aria-label="Back to main site">← davidsabalete.com</a>
      <h1>Projects</h1>
      <p>A selection of work I've built — from full-stack web apps to AI-powered tools</p>
      <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
        <span class="theme-toggle__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v1.5M12 20.5V22M4.93 4.93l1.06 1.06M17.01 17.01l1.06 1.06M2 12h1.5M20.5 12H22M4.93 19.07l1.06-1.06M17.01 6.94l1.06-1.06" />
          </svg>
        </span>
        <span class="theme-toggle__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        </span>
      </button>
    </section>
    <section id="showcase">
      <div class="project-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </section>
    <footer id="footer">
      <p>
        Built by David Sabalete — see more at
        <a href="https://www.davidsabalete.com" rel="noopener noreferrer">www.davidsabalete.com</a>
      </p>
    </footer>
  </main>
</template>
