import ICON_DATA_URI from './icon-data.js';

const ICON_DEFINITIONS = [
  { rel: 'icon', type: 'image/png', sizes: '192x192' },
  { rel: 'icon', type: 'image/png', sizes: '512x512' },
  { rel: 'shortcut icon', type: 'image/png', sizes: '512x512' },
  { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180' },
];

function upsertLink({ rel, sizes, type }) {
  const selectorParts = [`link[rel='${rel}']`];
  if (sizes) {
    selectorParts.push(`[sizes='${sizes}']`);
  }
  const selector = selectorParts.join('');
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (sizes) {
      link.sizes = sizes;
    }
    document.head.append(link);
  }
  if (type) {
    link.type = type;
  }
  link.href = ICON_DATA_URI;
}

ICON_DEFINITIONS.forEach(upsertLink);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch((error) => {
      console.error('Service worker registration failed', error);
    });
  });
}
