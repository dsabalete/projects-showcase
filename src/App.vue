<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppHero from '@/components/AppHero.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import { useTheme } from '@/composables/useTheme'
import { projects } from '@/data/projects'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <main id="app">
    <AppHero
      title="Projects"
      description="A selection of work I've built — from full-stack web apps to AI-powered tools"
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
    />

    <ProjectGrid :projects="projects" />

    <AppFooter />
  </main>
</template>
