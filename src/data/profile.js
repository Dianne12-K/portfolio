// All the words on the site live here. Edit this file to update the portfolio.

export const person = {
  firstName: 'Diana',
  lastName: 'Khayenzeli',
  roles: ['Geospatial Data Analyst', 'Full-Stack Geospatial Developer'],
  lede:
    'I build spatial models and the web GIS platforms that put them to work, for public health and agriculture.',
  base: { label: 'Nairobi, KE', lat: -1.2921, lon: 36.8219 },
  email: 'dianakhayenzeli111@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diana-khayenzeli-' },
    { label: 'GitHub', href: 'https://github.com/Dianne12-K' },
  ],
}

export const stats = [
  { value: 'First Class', label: 'BSc Geomatic Engineering & GIS' },
  { value: '47', label: 'counties in my national health-access model' },
  { value: '500+', label: 'sites mapped for county addressing' },
  { value: '100+', label: 'land parcels surveyed' },
]

export const about = {
  heading: 'Analyst and developer, in the same person.',
  paragraphs: [
    'I am a geospatial data analyst and full-stack geospatial developer based in Nairobi. I trained as a geomatic engineer, so I am as comfortable with a total station and a drone survey as I am with a database schema or a model comparison.',
    'Today I work in public health analytics, building ecological niche models of where disease vectors can live and turning the results into maps that programme teams can plan with. Before that I spent a year and a half as a geospatial developer, shipping web GIS tools from the map interface down to the data pipelines.',
    'I am also studying for an MSc in Artificial Intelligence, and bringing it into my spatial work: machine learning on earth observation data, and better ways to measure how far a model can be trusted.',
  ],
  pillars: [
    {
      title: 'Spatial modelling',
      text: 'Ecological niche modelling, travel-time and accessibility models, and disease and hazard risk mapping. I care about sampling bias and uncertainty as much as the headline map.',
    },
    {
      title: 'Full-stack geospatial development',
      text: 'Interactive web maps with Vue and MapLibre or OpenLayers, Flask APIs behind them, and PostgreSQL/PostGIS underneath. Drawing tools, layer managers, dashboards and exports.',
    },
    {
      title: 'GeoAI and remote sensing',
      text: 'Satellite, aerial and drone imagery through Google Earth Engine and Python: NDVI monitoring, land cover classification, yield prediction and anomaly detection.',
    },
    {
      title: 'Analysis and cartography',
      text: 'Spatial analysis for decisions: weighted overlays, zonal statistics, intervention maps and thematic mapping in QGIS and ArcGIS Pro, grounded in survey-grade fieldwork.',
    },
  ],
}

// `art` picks the generated illustration in ProjectArt.vue.
// To use a real screenshot instead, put the image in /public and set `image: '/your-file.png'`.
export const projects = [
  {
    id: 'smart-agriculture',
    title: 'Smart Agriculture GIS Platform',
    kind: 'Full-stack platform',
    year: '2025 – 2026',
    place: 'Kakamega County',
    art: 'fields',
    color: '#7fc563',
    summary:
      'A full-stack GIS platform for farms in Kakamega County. Operators draw and manage farm boundaries on the map, then open satellite-derived analytics for any field.',
    highlights: [
      'NDVI trends, stress hotspots and zonal statistics from Google Earth Engine',
      'XGBoost-based yield prediction and crop recommendations',
      'Flood, drought and fire risk scans, with soil, land cover and weather for each field',
    ],
    stack: ['Vue 3', 'MapLibre GL', 'Terra Draw', 'Flask', 'PostgreSQL / PostGIS', 'Google Earth Engine', 'XGBoost'],
    links: [
      { label: 'Live demo', href: 'https://smart-agriculture-farms.vercel.app' },
      { label: 'Frontend code', href: 'https://github.com/Dianne12-K/smart-agriculture-farms' },
      { label: 'Backend code', href: 'https://github.com/Dianne12-K/kakamega-backend-farmers' },
    ],
  },
  {
    id: 'health-access',
    title: 'GeoQuad Health Access',
    kind: 'Spatial model and platform',
    year: '2026',
    place: 'Kenya, national',
    art: 'travel',
    color: '#3ee0b4',
    summary:
      'Who in Kenya can reach a health facility, how long it takes them, and where a new facility would help most. A national travel-time model with a planning tool on top.',
    highlights: [
      'Raster cost-distance on a 1 km national grid, solved with multi-source Dijkstra, the approach WHO’s AccessMod uses',
      'Share of people within 30 minutes, 1 hour and 2 hours of care, ranked by county and constituency',
      'Scenario tool: place proposed facilities and measure how many more people they bring within reach',
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'Flask', 'Vue 3', 'MapLibre GL', 'WorldPop', 'Kenya Master Health Facility List'],
    // Add these once the repositories are public:
    // { label: 'Frontend code', href: 'https://github.com/Dianne12-K/health-tracker-kenya' },
    // { label: 'Backend and model', href: 'https://github.com/Dianne12-K/health-tracker' },
    links: [],
  },
  {
    id: 'vector-suitability',
    title: 'Vector Suitability Modelling',
    kind: 'Ecological niche modelling · professional work at AHADI',
    year: '2026 – present',
    place: 'Middle East and North Africa',
    art: 'suitability',
    color: '#fde725',
    summary:
      'Ecological niche modelling for vector-borne disease risk across the Middle East and North Africa, using species occurrence data and environmental covariates to map where vectors are likely to find suitable conditions.',
    highlights: [
      'Applied and refined established niche modelling workflows for multi-country vector datasets',
      'Investigated spatial and sampling uncertainty, including occurrence-data bias and model performance',
      'Built interactive web maps for exploring species distributions by administrative unit, time period and occurrence type',
    ],
    stack: ['Ecological niche modelling', 'MaxEnt', 'GLM', 'GAM', 'BRT', 'R', 'Python'],
    links: [],
  },
  {
    id: 'air-pollution',
    title: 'Air Pollution Exposure Mapping',
    kind: 'Exposure modelling',
    year: '2024 – 2025',
    place: 'Urban centres across Kenya',
    art: 'exposure',
    color: '#de4968',
    summary:
      'Modelled particulate matter exposure across Kenyan urban centres using Google Earth Engine and Python, producing spatial risk maps to support public health planning and targeted interventions.',
    highlights: [],
    stack: ['Google Earth Engine', 'Python', 'Remote sensing'],
    links: [],
  },
  {
    id: 'cholera-risk',
    title: 'Geospatial Cholera Risk Mapping',
    kind: 'Risk analysis',
    year: '2024',
    place: 'Nyanza region',
    art: 'overlay',
    color: '#f49a40',
    summary:
      'Integrated environmental, infrastructure and epidemiological datasets with weighted overlay analysis to identify cholera risk zones and support targeted public health interventions.',
    highlights: [
      'Risk factors mapped: water and sanitation infrastructure, contaminated water sources, flooding patterns and land use',
      'Output: high-risk transmission zones to guide interventions and resource allocation',
    ],
    stack: ['GIS', 'Remote sensing', 'Weighted overlay analysis'],
    links: [],
  },
  {
    id: 'land-cover',
    title: 'Land Use / Land Cover Analysis',
    kind: 'Remote sensing pipeline · in progress',
    year: '2026',
    place: 'Kenya',
    art: 'landcover',
    color: '#d9b44a',
    summary:
      'A Python pipeline for land use and land cover mapping. It loads a study-area boundary, pulls ESA WorldCover data and clips it to the area of interest. Classification and change detection are in progress.',
    highlights: [],
    stack: ['Python', 'ESA WorldCover'],
    links: [{ label: 'Code', href: 'https://github.com/Dianne12-K/land-use-land-cover' }],
  },
  {
    id: 'school-mapping',
    title: 'School Mapping for HPV Microplanning',
    kind: 'Mapathon',
    year: '2024',
    place: 'Kenya',
    art: 'sites',
    color: '#f4b740',
    summary:
      'Produced health infrastructure maps using QGIS and field data collection tools to support vaccination campaign microplanning and evidence-based health service delivery.',
    highlights: [],
    stack: ['QGIS', 'Field data collection'],
    links: [],
  },
]

// Places shown on the Kenya map. `counties` must match names in src/data/kenya.js.
export const places = {
  nairobi: { label: 'Nairobi', lat: -1.2921, lon: 36.8219, counties: ['Nairobi'], labelDx: 16, labelDy: 6 },
  vihiga: { label: 'Mbale, Vihiga', lat: 0.083, lon: 34.7228, counties: ['Vihiga'], labelDx: 16, labelDy: -30 },
  nyanza: {
    label: 'Nyanza region',
    lat: -0.62,
    lon: 34.52,
    counties: ['Kisumu', 'Siaya', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira'],
    labelDx: 16,
    labelDy: 44,
  },
}

export const experience = [
  {
    id: 'ahadi',
    org: 'Applied Health Analytics for Delivery and Innovation (AHADI)',
    role: 'Assistant Research and Technical Officer, Analytics',
    period: 'Aug 2026 – Present',
    location: 'Nairobi',
    places: ['nairobi'],
    points: [
      'Geospatial and spatial data analysis for public health, integrating environmental, epidemiological and geographic datasets for disease risk assessment and intervention planning.',
      'Ecological niche modelling of vector-borne disease risk across the Middle East and North Africa, including work on occurrence-data bias, model performance and reproducibility.',
      'Interactive web maps of multi-country vector occurrence data, and intervention maps for malaria-related programmes.',
    ],
  },
  {
    id: 'ramani-dev',
    org: 'Ramani Geosystems',
    role: 'Geospatial Developer',
    period: 'Nov 2025 – Jul 2026',
    location: 'Nairobi',
    places: ['nairobi'],
    points: [
      'Designed geospatial data pipelines integrating multi-source spatial datasets for real-time environmental monitoring in web mapping environments.',
      'Built a field track recording and monitoring tool with real-time route analysis and geotagged photo capture.',
      'Developed a layer and scrapbook manager with measurement tools, bulk editing and PDF, image and clipboard map export.',
    ],
  },
  {
    id: 'ramani-intern',
    org: 'Ramani Geosystems',
    role: 'Geospatial Developer, Intern',
    period: 'Feb 2025 – Oct 2025',
    location: 'Nairobi',
    places: ['nairobi'],
    points: [
      'Detected anomalies in sugarcane plantations from NDVI time series, giving evidence for agricultural compliance and resource management.',
      'Remote sensing with satellite, aerial and drone imagery and Google Earth Engine for land use classification, water body delineation and fraud detection.',
      'Developed and maintained a Land Information Management System in Vue 3, Pinia and PrimeVue, plus reusable geospatial plugins for web applications.',
    ],
  },
  {
    id: 'geodev',
    org: 'Geodev (K) Ltd',
    role: 'GIS and Remote Sensing Analyst, Attachee',
    period: 'Jan 2024 – Apr 2024',
    location: 'Nairobi, fieldwork in Nyanza',
    places: ['nairobi', 'nyanza'],
    points: [
      'Geospatial cholera risk analysis in Nyanza, mapping environmental risk factors to identify high-risk transmission zones.',
      'Geological and structural mapping with RTK-GPS and drone imagery for land development in semi-arid regions.',
      'Land use and land cover change analysis and water body delineation with Google Earth Engine and QGIS.',
    ],
  },
  {
    id: 'vihiga',
    org: 'Vihiga GTS Lab, County Government of Vihiga',
    role: 'Geospatial Analyst',
    period: 'Jan 2023 – Apr 2023',
    location: 'Mbale',
    places: ['vihiga'],
    points: [
      'Led the Google Plus Code addressing project, mapping over 500 sites to improve service delivery and water resource tracking.',
      'Took part in subdivision and cadastral surveys for over 100 land parcels, integrating survey data into spatial databases.',
      'Flood-risk mapping and drainage pattern analysis from satellite imagery and field data.',
    ],
  },
]

export const education = [
  {
    award: 'MSc Artificial Intelligence',
    school: 'Open University of Kenya',
    period: 'Sep 2026 – ongoing',
    note: '',
  },
  {
    award: 'BSc Geomatic Engineering and Geospatial Information Systems',
    school: 'Jomo Kenyatta University of Agriculture and Technology',
    period: 'Graduated June 2025',
    note: 'First Class Honours',
  },
]

export const skills = [
  {
    group: 'Ecological and environmental modelling',
    items: ['Ecological niche modelling', 'MaxEnt', 'GLM', 'GAM', 'BRT', 'Cross-validation', 'Uncertainty assessment'],
  },
  {
    group: 'Spatial and public health analytics',
    items: ['Disease and vector risk mapping', 'Spatial accessibility', 'Sampling-bias assessment', 'KDE analysis', 'Environmental covariates'],
  },
  {
    group: 'Data analytics and machine learning',
    items: ['Python', 'R', 'Random Forest', 'SVM', 'XGBoost', 'Classification and regression'],
  },
  {
    group: 'Web and geospatial development',
    items: ['Vue.js', 'JavaScript', 'Flask', 'REST APIs', 'MapLibre', 'OpenLayers', 'Leaflet', 'Dashboards'],
  },
  {
    group: 'Spatial databases',
    items: ['PostgreSQL', 'PostGIS', 'Relational design', 'Spatial SQL'],
  },
  {
    group: 'Remote sensing and survey',
    items: ['Google Earth Engine', 'NDVI', 'Land cover classification', 'Drone imagery', 'RTK-GPS', 'Total Station'],
  },
  {
    group: 'GIS and cartography',
    items: ['QGIS', 'ArcGIS Pro', 'ERDAS Imagine', 'AutoCAD', 'Thematic and intervention mapping'],
  },
]
