import { configureStore } from '@reduxjs/toolkit';
import { guestReducer } from './guestSlice';
import { persistReducer } from 'redux-persist';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};

const guestsReducer = persistReducer(persistConfig, guestReducer);

export const store = configureStore({
  reducer: {
    guest: guestsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
