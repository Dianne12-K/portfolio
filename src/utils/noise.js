// Small seeded random and value-noise helpers used by the hero contours and project art.

export function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function makeNoise(seed = 1) {
  const rand = rng(seed)
  const vals = new Float32Array(256)
  const perm = new Uint8Array(512)
  const p = []
  for (let i = 0; i < 256; i++) {
    vals[i] = rand()
    p.push(i)
  }
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[p[i], p[j]] = [p[j], p[i]]
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]

  const at = (x, y) => vals[perm[(perm[x & 255] + y) & 255]]

  function n2(x, y) {
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const xf = x - xi
    const yf = y - yi
    const u = xf * xf * (3 - 2 * xf)
    const v = yf * yf * (3 - 2 * yf)
    const a = at(xi, yi)
    const b = at(xi + 1, yi)
    const c = at(xi, yi + 1)
    const d = at(xi + 1, yi + 1)
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v
  }

  function fbm(x, y, octaves = 3) {
    let sum = 0
    let amp = 0.5
    let norm = 0
    for (let o = 0; o < octaves; o++) {
      sum += amp * n2(x, y)
      norm += amp
      x *= 2.03
      y *= 2.03
      amp *= 0.5
    }
    return sum / norm
  }

  return { n2, fbm }
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

// Continuous colour ramp from a list of hex stops; t is 0..1.
export function ramp(stops) {
  const rgb = stops.map(hexToRgb)
  return (t) => {
    const c = Math.max(0, Math.min(0.9999, t)) * (rgb.length - 1)
    const i = Math.floor(c)
    const f = c - i
    const a = rgb[i]
    const b = rgb[i + 1]
    return `rgb(${Math.round(a[0] + (b[0] - a[0]) * f)},${Math.round(a[1] + (b[1] - a[1]) * f)},${Math.round(a[2] + (b[2] - a[2]) * f)})`
  }
}
