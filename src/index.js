import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';
import { App } from './components/App';
import './index.css';

// window.addEventListener('load', async () => {
//   try {
//     if ('serviceWorker' in navigator) {
//       await navigator.serviceWorker.register('/sw.js');

//       console.log('[SW]: registration success');
//     }
//   } catch (error) {
//     console.log('[SW]: registration failed');
//   }
// });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/gh-user-search">
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
