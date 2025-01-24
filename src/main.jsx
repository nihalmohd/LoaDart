import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n';
import { Provider } from 'react-redux';
import { store, persistor } from './assets/Redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);
