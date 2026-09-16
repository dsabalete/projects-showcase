<script setup lang="ts">
import { SITE_URL } from '@/constants/site'
</script>

<template>
  <footer id="footer">
    <p>
      Built by David Sabalete — see more at
      <a :href="SITE_URL" rel="noopener noreferrer">{{ SITE_URL.replace('https://', '') }}</a>
    </p>
  </footer>
</template>

<style scoped>
#footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  text-align: center;
  font-size: 14px;
  color: var(--text);

  a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    padding: 24px;
  }
}
</style>
