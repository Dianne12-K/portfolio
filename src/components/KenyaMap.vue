<script setup>
import { computed, ref } from 'vue'
import { counties, projection } from '../data/kenya'
import { places } from '../data/profile'

const props = defineProps({
  // ids from `places` to highlight
  active: { type: Array, default: () => [] },
})

const svg = ref(null)
const readout = ref(null)
const hovered = ref('')

const x = (lon) => (lon - projection.minLon) * projection.scale
const y = (lat) => (projection.maxLat - lat) * projection.scale

const pins = computed(() =>
  Object.entries(places).map(([id, place]) => ({
    id,
    ...place,
    x: x(place.lon),
    y: y(place.lat),
    on: props.active.includes(id),
  })),
)

const litCounties = computed(() => {
  const set = new Set()
  for (const id of props.active) for (const name of places[id]?.counties || []) set.add(name)
  return set
})

function fmt(value, pos, neg) {
  return `${Math.abs(value).toFixed(3)}° ${value >= 0 ? pos : neg}`
}

function onMove(e) {
  const rect = svg.value.getBoundingClientRect()
  const px = ((e.clientX - rect.left) / rect.width) * projection.width
  const py = ((e.clientY - rect.top) / rect.height) * projection.height
  const lon = projection.minLon + px / projection.scale
  const lat = projection.maxLat - py / projection.scale
  readout.value = `${fmt(lat, 'N', 'S')}  ${fmt(lon, 'E', 'W')}`
}
</script>

<template>
  <figure class="map">
    <svg
      ref="svg"
      :viewBox="`0 0 ${projection.width} ${projection.height}`"
      role="img"
      aria-label="Map of Kenya's 47 counties showing where Diana has worked"
      @pointermove="onMove"
      @pointerleave="readout = null; hovered = ''"
    >
      <g class="map__counties">
        <path
          v-for="county in counties"
          :key="county.name"
          :d="county.d"
          :class="{ 'is-lit': litCounties.has(county.name) }"
          @pointerenter="hovered = county.name"
        />
      </g>

      <g v-for="pin in pins" :key="pin.id" class="map__pin" :class="{ 'is-on': pin.on }">
        <circle v-if="pin.on" class="map__pulse" :cx="pin.x" :cy="pin.y" r="10" />
        <circle :cx="pin.x" :cy="pin.y" r="9" />
        <line :x1="pin.x + 9" :y1="pin.y" :x2="pin.x + pin.labelDx + 22" :y2="pin.y + pin.labelDy - 8" />
        <text :x="pin.x + pin.labelDx + 28" :y="pin.y + pin.labelDy">{{ pin.label }}</text>
      </g>
    </svg>

    <figcaption class="mono">
      <span>{{ readout || 'Hover the map for coordinates' }}</span>
      <span>{{ hovered ? `${hovered} County` : 'WGS 84' }}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.map {
  border: 1px solid var(--line);
  border-radius: 14px;
  background:
    linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 100% 12.500%,
    linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 16.666% 100%,
    var(--surface);
  overflow: hidden;
}

svg {
  display: block;
  width: 100%;
  height: auto;
  padding: 18px;
  touch-action: pan-y;
}

.map__counties path {
  fill: #121c20;
  stroke: var(--line-strong);
  stroke-width: 1.500;
  stroke-linejoin: round;
  transition: fill 0.3s;
}

.map__counties path:hover {
  fill: #1b2a2f;
}

.map__counties path.is-lit {
  fill: rgba(62, 224, 180, 0.28);
  stroke: var(--teal);
}

.map__pin circle {
  fill: var(--dim);
  stroke: var(--bg);
  stroke-width: 4;
  transition: fill 0.3s;
}

.map__pin line {
  stroke: var(--dim);
  stroke-width: 1.500;
}

.map__pin text {
  font-family: var(--font-mono);
  font-size: 23px;
  fill: var(--muted);
  paint-order: stroke;
  stroke: var(--surface);
  stroke-width: 6px;
  stroke-linejoin: round;
  transition: fill 0.3s;
}

.map__pin.is-on circle {
  fill: var(--amber);
}

.map__pin.is-on line {
  stroke: var(--amber);
}

.map__pin.is-on text {
  fill: var(--text);
}

.map__pin .map__pulse {
  fill: none;
  stroke: var(--amber);
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  animation: pulse 2.200s ease-out infinite;
}

@keyframes pulse {
  from {
    transform: scale(1);
    opacity: 0.9;
  }
  to {
    transform: scale(3.600);
    opacity: 0;
  }
}

figcaption {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-top: 1px solid var(--line);
  background: var(--bg);
  color: var(--muted);
  font-size: 11px;
  white-space: pre;
  overflow: hidden;
}
</style>
