<script setup lang="ts">
import type { Project } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'

defineProps<{
  projects: readonly Project[]
}>()
</script>

<template>
  <section id="showcase">
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </section>
</template>

<style scoped>
#showcase {
  flex-grow: 1;
  padding: 48px;

  @media (max-width: 1024px) {
    padding: 32px 24px;
  }
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
