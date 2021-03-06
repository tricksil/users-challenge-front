import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'users-challenge',
      storage,
      whitelist: ['auth', 'user', 'event'],
    },
    reducers
  );

  return persistedReducer;
};
