<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="isDark"
    @click="$emit('toggle')"
  >
    <span class="theme-toggle__icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 2v1.5M12 20.5V22M4.93 4.93l1.06 1.06M17.01 17.01l1.06 1.06M2 12h1.5M20.5 12H22M4.93 19.07l1.06-1.06M17.01 6.94l1.06-1.06"
        />
      </svg>
    </span>
    <span class="theme-toggle__icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
      </svg>
    </span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: absolute;
  top: 48px;
  right: 48px;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  cursor: pointer;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.theme-toggle:hover {
  border-color: var(--accent-border);
  box-shadow: var(--shadow);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.theme-toggle__icon {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--text);
  opacity: 0.38;
  transition:
    opacity 0.2s,
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;

  svg {
    width: 15px;
    height: 15px;
    display: block;
  }
}

.theme-toggle__icon:first-child {
  opacity: 1;
  color: var(--text-h);
  background: var(--bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

:global(.dark) .theme-toggle__icon:first-child {
  opacity: 0.38;
  background: transparent;
  box-shadow: none;
  color: var(--text);
}

:global(.dark) .theme-toggle__icon:last-child {
  opacity: 1;
  color: var(--text-h);
  background: var(--bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
}
</style>
