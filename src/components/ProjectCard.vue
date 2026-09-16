<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__image">
      <img :src="project.image" :alt="project.name" loading="lazy" />
    </div>
    <div class="project-card__body">
      <h3 class="project-card__name">{{ project.name }}</h3>
      <p class="project-card__description">{{ project.description }}</p>
      <ul class="project-card__tags">
        <li v-for="tag in project.tags" :key="tag" class="project-card__tag">{{ tag }}</li>
      </ul>
      <div class="project-card__links">
        <a v-if="project.liveUrl" :href="project.liveUrl" class="project-card__link" target="_blank" rel="noopener noreferrer">
          View Live
        </a>
        <a v-if="project.repoUrl" :href="project.repoUrl" class="project-card__link project-card__link--repo" target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
      </div>
    </div>
  </article>
</template>
