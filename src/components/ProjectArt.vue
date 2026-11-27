<script setup>
// Generated raster illustrations, one style per project. They are drawn from
// seeded noise, not from project data, and are labelled as illustrations.
import { onMounted, ref, watch } from 'vue'
import { makeNoise, ramp, rng } from '../utils/noise'

const props = defineProps({
  kind: { type: String, required: true },
})

const canvas = ref(null)
const W = 960
const H = 540
const CELL = 12
const COLS = W / CELL
const ROWS = H / CELL

const ramps = {
  ndvi: ramp(['#a63d2f', '#e0a53b', '#e8d86a', '#7fc563', '#2f8f4e']),
  viridis: ramp(['#2a1e5c', '#3b528b', '#21918c', '#5ec962', '#fde725']),
  magma: ramp(['#0b0924', '#3b0f70', '#8c2981', '#de4968', '#fe9f6d', '#fcfdbf']),
}

const painters = {
  fields(ctx) {
    const n = makeNoise(11)
    const parcel = (i, j) => {
      const u = Math.floor((i + 5 * n.n2(i * 0.07, j * 0.07)) / 9)
      const v = Math.floor((j + 5 * n.n2(i * 0.07 + 40, j * 0.07 + 40)) / 7)
      return u * 131 + v
    }
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        const id = parcel(i, j)
        const edge = id !== parcel(i + 1, j) || id !== parcel(i, j + 1)
        const base = rng(id + 999)()
        const v = 0.15 + base * 0.7 + (n.fbm(i * 0.2, j * 0.2, 2) - 0.5) * 0.25
        ctx.fillStyle = edge ? '#0e1518' : ramps.ndvi(v)
        ctx.fillRect(i * CELL, j * CELL, CELL, CELL)
      }
    }
  },

  travel(ctx) {
    const n = makeNoise(23)
    const rand = rng(5)
    const sites = Array.from({ length: 6 }, () => [8 + rand() * (COLS - 16), 5 + rand() * (ROWS - 10)])
    const bands = ['#3ee0b4', '#8fd66b', '#f4d040', '#f49a40', '#ef6a5b', '#7a2f3a']
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        let d = Infinity
        for (const [sx, sy] of sites) d = Math.min(d, Math.hypot(i - sx, j - sy))
        const cost = d * (0.55 + 1.1 * n.fbm(i * 0.09, j * 0.09, 3))
        ctx.fillStyle = bands[Math.min(bands.length - 1, Math.floor(cost / 4.2))]
        ctx.fillRect(i * CELL, j * CELL, CELL, CELL)
      }
    }
    ctx.strokeStyle = '#080d0f'
    ctx.lineWidth = 7
    ctx.lineCap = 'square'
    for (const [sx, sy] of sites) {
      const x = sx * CELL
      const y = sy * CELL
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(x - 15, y - 15, 30, 30)
      ctx.beginPath()
      ctx.moveTo(x - 8, y)
      ctx.lineTo(x + 8, y)
      ctx.moveTo(x, y - 8)
      ctx.lineTo(x, y + 8)
      ctx.stroke()
    }
  },

  suitability(ctx) {
    const n = makeNoise(31)
    const rand = rng(77)
    const value = (i, j) => n.fbm(i * 0.045, j * 0.055, 3) * 1.5 - 0.25
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        ctx.fillStyle = ramps.viridis(value(i, j))
        ctx.fillRect(i * CELL, j * CELL, CELL, CELL)
      }
    }
    ctx.lineWidth = 3
    ctx.strokeStyle = '#080d0f'
    ctx.fillStyle = '#ffffff'
    let placed = 0
    for (let k = 0; k < 900 && placed < 46; k++) {
      const i = rand() * COLS
      const j = rand() * ROWS
      if (rand() > value(i, j) * 1.1 - 0.25) continue
      ctx.beginPath()
      ctx.arc(i * CELL, j * CELL, 7, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      placed++
    }
  },

  exposure(ctx) {
    const n = makeNoise(41)
    const rand = rng(13)
    const cities = Array.from({ length: 7 }, () => [rand() * COLS, rand() * ROWS, 5 + rand() * 9])
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        let v = 0.08 + 0.2 * n.fbm(i * 0.06, j * 0.06, 2)
        for (const [cx, cy, r] of cities) {
          v += 0.75 * Math.exp(-((i - cx) ** 2 + (j - cy) ** 2) / (2 * r * r))
        }
        ctx.fillStyle = ramps.magma(v)
        ctx.fillRect(i * CELL, j * CELL, CELL, CELL)
      }
    }
  },

  overlay(ctx) {
    const a = makeNoise(51)
    const b = makeNoise(52)
    const c = makeNoise(53)
    const classes = ['#1d3f49', '#3f8f7a', '#e8d86a', '#f49a40', '#ef6a5b']
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        const w =
          0.5 * a.fbm(i * 0.05, j * 0.05, 3) + 0.3 * b.fbm(i * 0.11, j * 0.11, 2) + 0.2 * c.n2(i * 0.3, j * 0.3)
        const k = Math.max(0, Math.min(4, Math.floor((w - 0.28) / 0.09)))
        ctx.fillStyle = classes[k]
        ctx.fillRect(i * CELL, j * CELL, CELL, CELL)
      }
    }
  },

  landcover(ctx) {
    const elev = makeNoise(61)
    const wet = makeNoise(62)
    const rand = rng(3)
    const towns = Array.from({ length: 4 }, () => [rand() * COLS, rand() * ROWS, 2 + rand() * 3.5])
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        const e = elev.fbm(i * 0.05, j * 0.05, 3)
        const m = wet.fbm(i * 0.08, j * 0.08, 2)
        let color = '#8fbf6a' // grassland
        if (e < 0.36) color = '#2b6cb0' // water
        else if (e > 0.62) color = '#1f7a4c' // forest
        else if (m > 0.52) color = '#d9b44a' // cropland
        else if (m < 0.36) color = '#b79f7a' // bare
        for (const [tx, ty, r] of towns) {
          if (e >= 0.36 && Math.hypot(i - tx, j - ty) < r + elev.n2(i * 0.6, j * 0.6) * 2) color = '#c05a4e'
        }
        ctx.fillStyle = color
        ctx.fillRect(i * CELL, j * CELL, CELL, CELL)
      }
    }
  },

  sites(ctx) {
    const n = makeNoise(71)
    const rand = rng(21)
    ctx.fillStyle = '#0e1518'
    ctx.fillRect(0, 0, W, H)
    ctx.strokeStyle = '#1f2d32'
    ctx.lineWidth = 2
    for (let x = 0; x <= W; x += 60) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, H)
      ctx.stroke()
    }
    for (let y = 0; y <= H; y += 60) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(W, y)
      ctx.stroke()
    }
    ctx.strokeStyle = '#2d4047'
    ctx.lineWidth = 6
    for (let r = 0; r < 5; r++) {
      ctx.beginPath()
      const horizontal = r % 2 === 0
      const offset = 60 + rand() * (horizontal ? H - 120 : W - 120)
      for (let s = 0; s <= 40; s++) {
        const along = (s / 40) * (horizontal ? W : H)
        const wobble = (n.fbm(s * 0.12, r * 9.7, 2) - 0.5) * 220
        const x = horizontal ? along : offset + wobble
        const y = horizontal ? offset + wobble : along
        if (s === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
    for (let k = 0; k < 44; k++) {
      const x = 30 + rand() * (W - 60)
      const y = 30 + rand() * (H - 60)
      const done = rand() > 0.3
      ctx.fillStyle = done ? '#f4b740' : '#0e1518'
      ctx.strokeStyle = done ? '#080d0f' : '#3ee0b4'
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.arc(x, y, 11, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    }
  },
}

function paint() {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  ctx.clearRect(0, 0, W, H)
  ;(painters[props.kind] || painters.overlay)(ctx)
}

onMounted(paint)
watch(() => props.kind, paint)
</script>

<template>
  <canvas ref="canvas" class="art" :width="W" :height="H" role="img" aria-label="Generated illustration"></canvas>
</template>

<style scoped>
.art {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 2.3 / 1;
  object-fit: cover;
  image-rendering: pixelated;
  background: var(--surface);
}
</style>
