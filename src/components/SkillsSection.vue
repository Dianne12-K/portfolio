<script setup>
import { skills } from '../data/profile'
</script>

<template>
  <section id="skills" class="section">
    <div class="wrap">
      <p class="eyebrow">04 / Skills</p>
      <h2 v-reveal class="section-title">The legend.</h2>
      <p v-reveal class="section-intro">The methods and tools I use, grouped the way I use them.</p>

      <dl class="skills">
        <div v-for="(group, i) in skills" :key="group.group" v-reveal class="skills__row">
          <dt>
            <span class="mono skills__num">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ group.group }}
          </dt>
          <dd>
            <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.skills {
  margin: clamp(36px, 5vw, 64px) 0 0;
  border-top: 1px solid var(--line);
}

.skills__row {
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
  gap: 16px 32px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}

dt {
  display: flex;
  gap: 16px;
  align-items: baseline;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 19px;
  line-height: 1.3;
}

.skills__num {
  color: var(--amber);
  flex: 0 0 auto;
}

dd {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skills__row:hover .chip {
  border-color: var(--teal);
  color: var(--text);
}

.chip {
  transition:
    border-color 0.25s,
    color 0.25s;
}

@media (max-width: 760px) {
  .skills__row {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
