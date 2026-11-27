<script setup>
import { person } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="section contact">
    <div class="wrap">
      <p class="eyebrow">05 / Contact</p>
      <h2 v-reveal class="contact__title">Have a spatial question? Let’s map it.</h2>
      <p v-reveal class="section-intro">
        I am happy to talk about spatial modelling, web GIS builds and research collaborations.
      </p>

      <a v-reveal :href="`mailto:${person.email}`" class="contact__email">
        {{ person.email }} <span aria-hidden="true">↗</span>
      </a>

      <ul class="contact__links">
        <li v-for="link in person.links" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener" class="btn">
            {{ link.label }} <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>

    <footer class="wrap footer mono">
      <span>© {{ year }} {{ person.firstName }} {{ person.lastName }}</span>
      <span>County boundaries: geoBoundaries, CC BY 4.0</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  padding-bottom: 0;
  background:
    radial-gradient(ellipse 60% 70% at 85% 0%, rgba(62, 224, 180, 0.09), transparent 70%), var(--bg);
}

.contact__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(40px, 8vw, 112px);
  line-height: 0.96;
  letter-spacing: -0.04em;
  max-width: 13ch;
  text-wrap: balance;
}

.contact__email {
  display: inline-block;
  margin-top: clamp(32px, 5vw, 56px);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(19px, 3.400vw, 40px);
  letter-spacing: -0.02em;
  color: var(--teal);
  border-bottom: 1px solid var(--line-strong);
  padding-bottom: 8px;
  overflow-wrap: anywhere;
  transition: border-color 0.2s;
}

.contact__email:hover {
  border-color: var(--teal);
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 24px;
  margin-top: clamp(72px, 10vw, 128px);
  padding-top: 22px;
  padding-bottom: 26px;
  border-top: 1px solid var(--line);
  color: var(--dim);
  font-size: 11px;
}

.footer a:hover {
  color: var(--teal);
}
</style>
