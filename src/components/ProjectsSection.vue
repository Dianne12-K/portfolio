<script setup>
import { computed, ref } from 'vue'
import ProjectArt from './ProjectArt.vue'
import { projects } from '../data/profile'

const activeId = ref(projects[0].id)
const active = computed(() => projects.find((p) => p.id === activeId.value))
const detail = ref(null)

function select(id) {
  activeId.value = id
  // On narrow screens the detail sits below the list, so bring it into view.
  if (window.matchMedia('(max-width: 900px)').matches && detail.value) {
    detail.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <p class="eyebrow">02 / Projects</p>
      <h2 v-reveal class="section-title">Selected work, as layers.</h2>
      <p v-reveal class="section-intro">
        Pick a layer to see what it is, how it works and what it is built with.
      </p>

      <div v-reveal class="projects">
        <div class="projects__panel">
          <p class="mono projects__panel-head">
            <span>Layers</span><span>{{ projects.length }}</span>
          </p>
          <ul role="tablist" aria-label="Projects">
            <li v-for="(project, i) in projects" :key="project.id">
              <button
                role="tab"
                :aria-selected="project.id === activeId"
                class="layer"
                :class="{ 'is-active': project.id === activeId }"
                :style="{ '--swatch': project.color }"
                @click="select(project.id)"
              >
                <span class="layer__check" aria-hidden="true"></span>
                <span class="layer__swatch" aria-hidden="true"></span>
                <span class="layer__name">{{ project.title }}</span>
                <span class="mono layer__idx">{{ String(i + 1).padStart(2, '0') }}</span>
              </button>
            </li>
          </ul>
        </div>

        <article ref="detail" class="projects__detail" role="tabpanel" :style="{ '--swatch': active.color }">
          <figure class="projects__figure">
            <img v-if="active.image" :src="active.image" :alt="`${active.title} screenshot`" />
            <ProjectArt v-else :kind="active.art" />
            <figcaption class="mono">
              <span>{{ active.place }}</span>
              <span v-if="!active.image">Generated illustration</span>
            </figcaption>
          </figure>

          <div class="projects__body">
            <p class="mono projects__meta">{{ active.kind }} · {{ active.year }}</p>
            <h3>{{ active.title }}</h3>
            <p class="projects__summary">{{ active.summary }}</p>

            <ul v-if="active.highlights.length" class="projects__points">
              <li v-for="point in active.highlights" :key="point">{{ point }}</li>
            </ul>

            <ul class="projects__stack">
              <li v-for="tool in active.stack" :key="tool" class="chip">{{ tool }}</li>
            </ul>

            <div v-if="active.links.length" class="projects__links">
              <a
                v-for="(link, i) in active.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="btn"
                :class="{ 'btn--solid': i === 0 }"
              >
                {{ link.label }} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
  gap: 0;
  margin-top: clamp(36px, 5vw, 64px);
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface);
}

.projects__panel {
  border-right: 1px solid var(--line);
  background: var(--bg);
}

.projects__panel-head {
  display: flex;
  justify-content: space-between;
  padding: 16px 18px;
  color: var(--dim);
  border-bottom: 1px solid var(--line);
}

.layer {
  width: 100%;
  display: grid;
  grid-template-columns: 16px 10px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  text-align: left;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  transition:
    background 0.2s,
    color 0.2s;
}

.layer:hover {
  background: var(--surface);
  color: var(--text);
}

.layer.is-active {
  background: var(--surface-2);
  color: var(--text);
  box-shadow: inset 3px 0 0 var(--swatch);
}

.layer__check {
  width: 16px;
  height: 16px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  position: relative;
}

.layer.is-active .layer__check {
  border-color: var(--swatch);
  background: var(--swatch);
}

.layer.is-active .layer__check::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid var(--bg);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.layer__swatch {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: var(--swatch);
}

.layer__name {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
}

.layer__idx {
  color: var(--dim);
}

.projects__detail {
  min-width: 0;
  scroll-margin-top: calc(var(--nav-h) + 12px);
}

.projects__figure {
  position: relative;
  border-bottom: 1px solid var(--line);
}

.projects__figure img {
  display: block;
  width: 100%;
  aspect-ratio: 2.3 / 1;
  object-fit: cover;
}

.projects__figure figcaption {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  font-size: 11px;
  color: var(--text);
  background: linear-gradient(to top, rgba(8, 13, 15, 0.9), rgba(8, 13, 15, 0));
}

.projects__figure figcaption span:last-child:not(:first-child) {
  color: var(--muted);
}

.projects__body {
  padding: clamp(22px, 3.200vw, 40px);
}

.projects__meta {
  color: var(--swatch);
  line-height: 1.6;
}

.projects__body h3 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(26px, 3.200vw, 40px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  margin: 10px 0 16px;
  text-wrap: balance;
}

.projects__summary {
  font-size: 17px;
  color: var(--text);
  max-width: 62ch;
}

.projects__points {
  margin-top: 20px;
  display: grid;
  gap: 10px;
  max-width: 62ch;
}

.projects__points li {
  position: relative;
  padding-left: 22px;
  color: var(--muted);
}

.projects__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.700em;
  width: 10px;
  height: 1px;
  background: var(--swatch);
}

.projects__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.projects__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

@media (max-width: 900px) {
  .projects {
    grid-template-columns: minmax(0, 1fr);
  }

  .projects__panel {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .layer {
    padding: 13px 16px;
  }
}
</style>
