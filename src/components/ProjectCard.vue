<script setup lang="ts">
import type { Project } from '@/types/project'

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

<style scoped>
.project-card {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}

.project-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.project-card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg);
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__body {
  padding: 24px;
}

.project-card__name {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 8px;
  letter-spacing: -0.2px;
}

.project-card__description {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text);
  margin: 0 0 16px;
}

.project-card__tags {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-card__tag {
  font-size: 12px;
  font-family: var(--mono);
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent-bg);
  color: var(--accent);
  border: 1px solid var(--accent-border);
}

.project-card__links {
  display: flex;
  gap: 12px;
}

.project-card__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  padding: 6px 16px;
  border-radius: 6px;
  background: var(--accent-bg);
  transition: box-shadow 0.3s;
}

.project-card__link:hover {
  box-shadow: var(--shadow);
}

.project-card__link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.project-card__link--repo {
  color: var(--text-h);
  background: var(--social-bg);
}
</style>
