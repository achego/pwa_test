// Self refers to a global scope example in the index file, self and windows refers to the same thing, but in th e service worker file, they dont



self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
})

self.addEventListener('activate', (event)=> {
    console.log('Service worker activated');
})
