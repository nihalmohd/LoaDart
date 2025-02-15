import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import transporterReducer from './Slice/TranporterSlice';

// ✅ Combine reducers correctly
const rootReducer = combineReducers({
  transporter: transporterReducer, // Ensure it's inside an object
});

// ✅ Persist configuration
const persistConfig = {
  key: 'root', // Must match how Redux Persist stores data
  storage,
};

// ✅ Wrap the whole reducer in persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure store (Fix Redux Persist Error)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Prevent Redux Persist serialization error
    }),
});

// ✅ Persistor
export const persistor = persistStore(store);
