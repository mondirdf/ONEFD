export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=80';

export const imageMap = {
  hero: [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
  ],
  registration: [
    'https://images.unsplash.com/photo-1584697964190-7383c3a9f5c0?auto=format&fit=crop&w=1200&q=80',
  ],
  tracking: [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  ],
  download: [
    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80',
  ],
  bac: [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  ],
  students: [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  ],
  classroom: [
    'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
  ],
  support: [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  ],
  virtualLearning: [
    'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1400&q=80',
  ],
  examPrep: [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
  ],
  guidance: [
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  ],
  news: [
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
  ],
};

export const getImage = (key) => {
  const list = imageMap[key];

  if (!Array.isArray(list) || list.length === 0) {
    return DEFAULT_IMAGE;
  }

  return list[Math.floor(Math.random() * list.length)];
};

export const IMAGE_FALLBACKS = Object.values(imageMap)
  .flat()
  .filter((url, index, list) => list.indexOf(url) === index);
