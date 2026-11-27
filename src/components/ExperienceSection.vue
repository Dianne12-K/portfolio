<script setup>
import { computed, ref } from 'vue'
import KenyaMap from './KenyaMap.vue'
import { experience } from '../data/profile'

const activeId = ref(experience[0].id)
const active = computed(() => experience.find((e) => e.id === activeId.value))
</script>

<template>
  <section id="experience" class="section">
    <div class="wrap">
      <p class="eyebrow">03 / Experience</p>
      <h2 v-reveal class="section-title">Where I have worked.</h2>
      <p v-reveal class="section-intro">
        Hover or tap a role to see it on the map. County boundaries are real data, simplified from
        geoBoundaries.
      </p>

      <div class="exp">
        <div class="exp__map">
          <KenyaMap :active="active.places" />
        </div>

        <ol class="exp__list">
          <li
            v-for="job in experience"
            :key="job.id"
            v-reveal
            class="job"
            :class="{ 'is-active': job.id === activeId }"
            tabindex="0"
            @pointerenter="activeId = job.id"
            @focus="activeId = job.id"
            @click="activeId = job.id"
          >
            <p class="mono job__period">{{ job.period }} · {{ job.location }}</p>
            <h3>{{ job.role }}</h3>
            <p class="job__org">{{ job.org }}</p>
            <ul>
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(28px, 5vw, 72px);
  margin-top: clamp(36px, 5vw, 64px);
  align-items: start;
}

.exp__map {
  position: sticky;
  top: calc(var(--nav-h) + 24px);
}

.job {
  position: relative;
  padding: 26px 0 28px 28px;
  border-left: 1px solid var(--line-strong);
  cursor: default;
  transition: border-color 0.3s;
}

.job::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 32px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--line-strong);
  transition:
    background 0.3s,
    border-color 0.3s;
}

.job.is-active {
  border-left-color: var(--amber);
}

.job.is-active::before {
  background: var(--amber);
  border-color: var(--amber);
}

.job__period {
  color: var(--dim);
  line-height: 1.6;
}

.job.is-active .job__period {
  color: var(--amber);
}

.job h3 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(21px, 2.300vw, 27px);
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin-top: 8px;
}

.job__org {
  color: var(--teal);
  margin-top: 4px;
}

.job ul {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}

.job ul li {
  color: var(--muted);
  font-size: 15px;
  padding-left: 18px;
  position: relative;
}

.job ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.720em;
  width: 8px;
  height: 1px;
  background: var(--dim);
}

@media (max-width: 900px) {
  .exp {
    grid-template-columns: minmax(0, 1fr);
  }

  .exp__map {
    position: static;
    max-width: 440px;
  }
}
</style>
