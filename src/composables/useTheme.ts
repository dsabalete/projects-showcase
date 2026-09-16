import { ref, computed, onMounted } from 'vue'
import { THEME_STORAGE_KEY, type Theme } from '@/constants/site'

const THEME_CLASS_DARK = 'dark'
const THEME_CLASS_LIGHT = 'light'

function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (value === 'dark' || value === 'light') return value
  }
  catch {
    // localStorage unavailable (e.g. SSR, private mode)
  }
  return null
}

function getPreferredTheme(): Theme {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function applyTheme(theme: Theme): void {
  const html = document.documentElement
  html.classList.toggle(THEME_CLASS_DARK, theme === 'dark')
  html.classList.toggle(THEME_CLASS_LIGHT, theme === 'light')
}

function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }
  catch {
    // ignore write failures
  }
}

export function useTheme() {
  const theme = ref<Theme>(getStoredTheme() ?? getPreferredTheme())
  const isDark = computed(() => theme.value === 'dark')

  function setTheme(next: Theme): void {
    theme.value = next
    applyTheme(next)
    persistTheme(next)
  }

  function toggleTheme(): void {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  function initTheme(): void {
    applyTheme(theme.value)
  }

  onMounted(initTheme)

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme,
  }
}
