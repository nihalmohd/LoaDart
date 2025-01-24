import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default localStorage
import transporterReducer from './TransporterSlice/TranporterSlice';

// Combine reducers
const rootReducer = combineReducers({
  transporter: transporterReducer, // Include your slice
  // Add other slices here if needed
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['transporter'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
});

// Export persistor
export const persistor = persistStore(store);
