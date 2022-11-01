import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';
import { App } from './components/App';
import { GlobalStyles } from './styles/globalStyles';
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

// fhjhfvbjfhvb


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/gh-user-search">
      <GlobalStyles />
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
