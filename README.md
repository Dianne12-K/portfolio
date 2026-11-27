# Diana Khayenzeli — portfolio

Personal portfolio site. Vue 3 + Vite, no other runtime dependencies.

## Run it

```powershell
npm install
npm run dev
```

The site opens at http://localhost:5420.

## Edit the content

All text lives in `src/data/profile.js`: the intro, stats, projects, experience, education, skills and contact links. Change it there and the page updates.

- **Add a project screenshot:** put the image in `public/` and add `image: '/your-file.png'` to that project. It replaces the generated illustration.
- **Add a project link:** add `{ label: 'Code', href: '...' }` to that project's `links`.

## Rebuild the Kenya map

The experience map is drawn from geoBoundaries KEN ADM1 (CC BY 4.0), simplified into `src/data/kenya.js`:

```powershell
node scripts/build-kenya.mjs "C:/path/to/ken_ADM1.geojson"
```

## Deploy

```powershell
npm run build
```

The output is in `dist/`. On Vercel, import the repository and keep the defaults (framework: Vite).
