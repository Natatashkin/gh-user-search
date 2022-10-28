/* eslint-disable no-restricted-globals */
const staticCacheName = 'static-cache-v1';
const dynamicCacheName = 'dynamic-cache-v2';

const appStaticFiles = ['/', '/index.html'];

self.addEventListener('install', async e => {
  console.log('sw: install');

  const cahe = await caches.open(staticCacheName);
  await cahe.addAll(appStaticFiles);
});

self.addEventListener('activate', () => {
  console.log('activate');
  self.skipWaiting();
});

const fetchRequest = async req => {
  const dynamicCache = await caches.open(dynamicCacheName);
  try {
    const response = await fetch(req);
    await dynamicCache.put(req, response.clone());
    localStorage.setItem('items', response.clone());
    return response;
  } catch (error) {
    // console.log(error);
    // console.log(req);
    const chachedData = await caches.match(req);
    return chachedData;
  }
};

self.addEventListener('fetch', e => {
  e.respondWith(fetchRequest(e.request));
});
