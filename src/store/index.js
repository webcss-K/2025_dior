import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from 'store/reducers';

export const store = configureStore({
  reducer: reducers
})