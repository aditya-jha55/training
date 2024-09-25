import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 
import { PersistGate } from 'redux-persist/integration/react';
const config = {
  onUpdate: (registration: ServiceWorkerRegistration) => {
    // You can define what to do when a new service worker is available
    console.log('New service worker available', registration);
  },
  onSuccess: (registration: ServiceWorkerRegistration) => {
    // When service worker is successfully registered
    console.log('Service worker registered', registration);
  }
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  
  </React.StrictMode>
);
serviceWorkerRegistration.register(config); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
