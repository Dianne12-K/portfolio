<script setup>
// Animated topographic contours. A drifting noise field is traced with marching
// squares; the terrain rises slightly under the pointer.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { makeNoise } from '../utils/noise'

const canvas = ref(null)
const noise = makeNoise(7)

const LEVELS = 13
const CELL = 16
const reduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let ctx
let width = 0
let height = 0
let cols = 0
let rows = 0
let field = new Float32Array(0)
let raf = 0
let visible = true
let observer
let last = 0
const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 }

function resize() {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = rect.width
  height = rect.height
  el.width = Math.round(width * dpr)
  el.height = Math.round(height * dpr)
  ctx = el.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  cols = Math.ceil(width / CELL) + 1
  rows = Math.ceil(height / CELL) + 1
  field = new Float32Array(cols * rows)
  draw(performance.now())
}

function compute(t) {
  const s = 0.0042
  const dx = t * 0.000012
  const dy = t * 0.000008
  const sigma2 = 2 * 170 * 170
  for (let j = 0; j < rows; j++) {
    const y = j * CELL
    for (let i = 0; i < cols; i++) {
      const x = i * CELL
      let v = noise.fbm(x * s + dx, y * s - dy, 3)
      const px = x - pointer.x
      const py = y - pointer.y
      v += 0.16 * Math.exp(-(px * px + py * py) / sigma2)
      field[j * cols + i] = v
    }
  }
}

function trace(level) {
  ctx.beginPath()
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const a = field[j * cols + i]
      const b = field[j * cols + i + 1]
      const c = field[(j + 1) * cols + i + 1]
      const d = field[(j + 1) * cols + i]
      const idx = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0)
      if (idx === 0 || idx === 15) continue
      const x = i * CELL
      const y = j * CELL
      // Edge crossings: top, right, bottom, left
      const tx = x + (CELL * (level - a)) / (b - a)
      const ry = y + (CELL * (level - b)) / (c - b)
      const bx = x + (CELL * (level - d)) / (c - d)
      const ly = y + (CELL * (level - a)) / (d - a)
      const seg = (x1, y1, x2, y2) => {
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
      }
      switch (idx) {
        case 1:
        case 14:
          seg(x, ly, bx, y + CELL)
          break
        case 2:
        case 13:
          seg(bx, y + CELL, x + CELL, ry)
          break
        case 3:
        case 12:
          seg(x, ly, x + CELL, ry)
          break
        case 4:
        case 11:
          seg(tx, y, x + CELL, ry)
          break
        case 6:
        case 9:
          seg(tx, y, bx, y + CELL)
          break
        case 7:
        case 8:
          seg(x, ly, tx, y)
          break
        case 5:
          seg(x, ly, tx, y)
          seg(bx, y + CELL, x + CELL, ry)
          break
        case 10:
          seg(x, ly, bx, y + CELL)
          seg(tx, y, x + CELL, ry)
          break
      }
    }
  }
  ctx.stroke()
}

function draw(t) {
  if (!ctx) return
  pointer.x += (pointer.tx - pointer.x) * 0.08
  pointer.y += (pointer.ty - pointer.y) * 0.08
  compute(t)
  ctx.clearRect(0, 0, width, height)
  ctx.lineWidth = 1
  for (let l = 0; l < LEVELS; l++) {
    const level = 0.22 + (l / (LEVELS - 1)) * 0.62
    const index = l % 4 === 0
    ctx.strokeStyle = index ? 'rgba(62, 224, 180, 0.42)' : 'rgba(62, 224, 180, 0.15)'
    trace(level)
  }
}

function loop(t) {
  raf = requestAnimationFrame(loop)
  if (!visible || t - last < 33) return
  last = t
  draw(t)
}

function onPointer(e) {
  const rect = canvas.value.getBoundingClientRect()
  pointer.tx = e.clientX - rect.left
  pointer.ty = e.clientY - rect.top
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  if (reduced) return
  window.addEventListener('pointermove', onPointer, { passive: true })
  observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
  })
  observer.observe(canvas.value)
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', onPointer)
  if (observer) observer.disconnect()
})
</script>

<template>
  <canvas ref="canvas" class="contours" aria-hidden="true"></canvas>
</template>

<style scoped>
.contours {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}
</style>
