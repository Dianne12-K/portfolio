<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ContourCanvas from './ContourCanvas.vue'
import { person, stats } from '../data/profile'

const clock = ref('')
let timer

function fmtCoord(value, pos, neg) {
  return `${Math.abs(value).toFixed(4)}° ${value >= 0 ? pos : neg}`
}

const coords = `${fmtCoord(person.base.lat, 'N', 'S')}, ${fmtCoord(person.base.lon, 'E', 'W')}`

function tick() {
  clock.value = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Nairobi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date())
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="top" class="hero">
    <ContourCanvas />
    <div class="hero__shade" aria-hidden="true"></div>

    <div class="wrap hero__body">
      <p class="hero__roles">
        <template v-for="(role, i) in person.roles" :key="role">
          <span v-if="i" class="hero__sep" aria-hidden="true">+</span>
          <span>{{ role }}</span>
        </template>
      </p>

      <h1 class="hero__name">
        <span>{{ person.firstName }}</span>
        <span class="hero__name-last">{{ person.lastName }}</span>
      </h1>

      <p class="hero__lede">{{ person.lede }}</p>

      <div class="hero__cta">
        <a href="#projects" class="btn btn--solid">See the work <span aria-hidden="true">↓</span></a>
        <a href="#contact" class="btn">Get in touch</a>
      </div>

      <ul class="hero__stats">
        <li v-for="stat in stats" :key="stat.label">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </li>
      </ul>
    </div>

    <div class="hero__status">
      <div class="wrap hero__status-inner mono">
        <span><i class="hero__dot" aria-hidden="true"></i>{{ person.base.label }}</span>
        <span>{{ coords }}</span>
        <span class="hero__status-wide">EAT {{ clock }}</span>
        <span class="hero__status-wide">EPSG:4326</span>
        <span class="hero__scale" aria-hidden="true"><i></i>move the cursor to raise the terrain</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--nav-h) + 40px) 0 96px;
  overflow: hidden;
  isolation: isolate;
}

.hero__shade {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 60% at 22% 48%, rgba(8, 13, 15, 0.92), rgba(8, 13, 15, 0.35) 70%, transparent),
    linear-gradient(to bottom, rgba(8, 13, 15, 0.5), transparent 25%, transparent 70%, var(--bg));
  pointer-events: none;
}

.hero__body {
  position: relative;
  z-index: 1;
}

.hero__roles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 14px;
  font-family: var(--font-mono);
  font-size: clamp(11px, 1.300vw, 14px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: clamp(18px, 3vw, 28px);
}

.hero__sep {
  color: var(--amber);
}

.hero__name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(32px, min(11.500vw, 17vh), 176px);
  line-height: 0.86;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

.hero__name span {
  display: block;
}

.hero__name-last {
  /* Filled with the background and stroked, so overlapping glyph contours stay hidden. */
  color: var(--bg);
  -webkit-text-stroke: 3px var(--text);
  paint-order: stroke fill;
}

.hero__lede {
  margin-top: clamp(24px, 3.500vw, 40px);
  max-width: 34ch;
  font-size: clamp(18px, 2.200vw, 26px);
  line-height: 1.35;
  color: var(--text);
  text-wrap: balance;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin-top: clamp(32px, 4.500vw, 56px);
  border-top: 1px solid var(--line-strong);
  max-width: 980px;
}

.hero__stats li {
  padding: 18px 20px 0 0;
}

.hero__stats strong {
  display: block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(24px, 3vw, 38px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--amber);
}

.hero__stats span {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted);
  max-width: 22ch;
}

.hero__status {
  position: absolute;
  inset: auto 0 0 0;
  z-index: 1;
  border-top: 1px solid var(--line);
  background: rgba(8, 13, 15, 0.72);
  backdrop-filter: blur(6px);
}

.hero__status-inner {
  display: flex;
  align-items: center;
  gap: clamp(14px, 3vw, 36px);
  height: 44px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
}

.hero__dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 9px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 0 0 rgba(62, 224, 180, 0.6);
  animation: ping 2.400s ease-out infinite;
}

.hero__scale {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--dim);
}

.hero__scale i {
  width: 56px;
  height: 6px;
  border: 1px solid var(--dim);
  border-top: 0;
}

@keyframes ping {
  0% {
    box-shadow: 0 0 0 0 rgba(62, 224, 180, 0.6);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(62, 224, 180, 0);
  }
}

@media (max-width: 900px) {
  .hero__scale {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero__stats li {
    padding-bottom: 6px;
  }

  .hero__status-wide {
    display: none;
  }

  .hero__name-last {
    -webkit-text-stroke-width: 2px;
  }
}
</style>
