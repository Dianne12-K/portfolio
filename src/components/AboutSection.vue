<script setup>
import { about, education } from '../data/profile'
</script>

<template>
  <section id="about" class="section">
    <div class="wrap">
      <p class="eyebrow">01 / About</p>
      <div class="about__top">
        <h2 v-reveal class="section-title">{{ about.heading }}</h2>
        <div v-reveal class="about__text">
          <p v-for="p in about.paragraphs" :key="p">{{ p }}</p>
        </div>
      </div>

      <ol class="about__pillars">
        <li v-for="(pillar, i) in about.pillars" :key="pillar.title" v-reveal>
          <span class="mono about__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.text }}</p>
        </li>
      </ol>

      <div class="about__edu">
        <p class="mono about__edu-label">Education</p>
        <ul>
          <li v-for="item in education" :key="item.award" v-reveal>
            <h3>{{ item.award }}</h3>
            <p>{{ item.school }}</p>
            <p class="mono about__edu-meta">
              {{ item.period }}<template v-if="item.note"> · <b>{{ item.note }}</b></template>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(28px, 6vw, 88px);
  align-items: start;
}

.about__text {
  display: grid;
  gap: 18px;
  color: var(--muted);
  font-size: 17px;
}

.about__text p:first-child {
  color: var(--text);
  font-size: 19px;
  line-height: 1.55;
}

.about__pillars {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: clamp(48px, 7vw, 88px);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.about__pillars li {
  padding: 28px 24px 32px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: linear-gradient(to bottom, var(--surface), transparent);
  transition: background 0.3s;
}

.about__pillars li:hover {
  background: var(--surface-2);
}

.about__num {
  color: var(--amber);
}

.about__pillars h3 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 21px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 14px 0 12px;
}

.about__pillars p {
  color: var(--muted);
  font-size: 15px;
}

.about__edu {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 24px;
  margin-top: clamp(40px, 6vw, 72px);
}

.about__edu-label {
  color: var(--teal);
  padding-top: 4px;
}

.about__edu ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 40px;
}

.about__edu h3 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 19px;
  line-height: 1.25;
}

.about__edu li p {
  color: var(--muted);
  margin-top: 4px;
}

.about__edu-meta {
  color: var(--dim) !important;
  margin-top: 8px !important;
}

.about__edu-meta b {
  color: var(--amber);
  font-weight: 500;
}

@media (max-width: 980px) {
  .about__pillars {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .about__top,
  .about__edu,
  .about__edu ul {
    grid-template-columns: minmax(0, 1fr);
  }

  .about__edu {
    gap: 14px;
  }
}

@media (max-width: 520px) {
  .about__pillars {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
