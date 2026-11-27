<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { person } from '../data/profile'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const active = ref('')
let observer

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  for (const link of links) {
    const el = document.getElementById(link.id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (observer) observer.disconnect()
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled || open }">
    <div class="wrap nav__inner">
      <a href="#top" class="nav__brand" @click="open = false">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M12 2.500c-4 0-7.200 3.100-7.200 7 0 5.300 7.200 12 7.200 12s7.200-6.700 7.200-12c0-3.900-3.200-7-7.200-7z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.600"
          />
          <circle cx="12" cy="9.500" r="2.300" fill="var(--amber)" />
        </svg>
        <span>{{ person.firstName }} {{ person.lastName }}</span>
      </a>

      <nav class="nav__links" :class="{ 'is-open': open }" aria-label="Sections">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ 'is-active': active === link.id }"
          @click="open = false"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--nav-h);
  border-bottom: 1px solid transparent;
  transition:
    background 0.25s,
    border-color 0.25s;
}

.nav--scrolled {
  background: rgba(8, 13, 15, 0.86);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--line);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--teal);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.nav__brand span {
  color: var(--text);
}

.nav__links {
  display: flex;
  gap: clamp(16px, 2.6vw, 34px);
}

.nav__links a {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 8px 0;
  transition: color 0.2s;
}

.nav__links a:hover,
.nav__links a.is-active {
  color: var(--teal);
}

.nav__toggle {
  display: none;
  width: 40px;
  height: 40px;
  position: relative;
}

.nav__toggle span {
  position: absolute;
  left: 9px;
  right: 9px;
  height: 1.500px;
  background: var(--text);
  transition: transform 0.2s;
}

.nav__toggle span:first-child {
  top: 15px;
}

.nav__toggle span:last-child {
  top: 24px;
}

.nav__toggle[aria-expanded='true'] span:first-child {
  transform: translateY(4.500px) rotate(45deg);
}

.nav__toggle[aria-expanded='true'] span:last-child {
  transform: translateY(-4.500px) rotate(-45deg);
}

@media (max-width: 760px) {
  .nav__toggle {
    display: block;
  }

  .nav__links {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px var(--gutter) 20px;
    background: rgba(8, 13, 15, 0.97);
    border-bottom: 1px solid var(--line);
    display: none;
  }

  .nav__links.is-open {
    display: flex;
  }

  .nav__links a {
    padding: 14px 0;
    font-size: 13px;
    border-bottom: 1px solid var(--line);
  }
}
</style>
