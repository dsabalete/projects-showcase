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
        <span class="theme-toggle__icon">☀️</span>
        <span class="theme-toggle__icon">🌙</span>
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
