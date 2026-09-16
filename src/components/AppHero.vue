<script setup lang="ts">
import { SITE_HOST, SITE_URL } from '@/constants/site'
import ThemeToggle from '@/components/ThemeToggle.vue'

defineProps<{
  title: string
  description: string
  isDark: boolean
}>()

defineEmits<{
  toggleTheme: []
}>()
</script>

<template>
  <section id="hero">
    <a class="site-link" :href="SITE_URL" aria-label="Back to main site">← {{ SITE_HOST }}</a>

    <h1>{{ title }}</h1>
    <p>{{ description }}</p>

    <ThemeToggle :is-dark="isDark" @toggle="$emit('toggleTheme')" />
  </section>
</template>

<style scoped>
#hero {
  position: relative;
  padding: 80px 48px 48px;
  text-align: center;
  border-bottom: 1px solid var(--border);

  h1 {
    font-size: 72px;
    letter-spacing: -2px;
    margin: 8px 0 32px;
    @media (max-width: 1024px) {
      font-size: 48px;
      margin-bottom: 24px;
    }
  }

  p {
    font-size: 20px;
    max-width: 600px;
    margin: 0 auto;
    color: var(--text);
  }

  @media (max-width: 1024px) {
    padding: 72px 24px 32px;
  }
}

.site-link {
  position: absolute;
  top: 48px;
  left: 48px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--code-bg);
  transition:
    box-shadow 0.3s,
    color 0.2s,
    border-color 0.2s;

  @media (max-width: 1024px) {
    top: 20px;
    left: 24px;
    font-size: 13px;
    padding: 6px 10px;
  }
}

.site-link:hover {
  color: var(--accent);
  border-color: var(--accent-border);
  box-shadow: var(--shadow);
}

.site-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
