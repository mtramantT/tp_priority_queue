import { configureStore } from '@reduxjs/toolkit';
import ItemsSlice from '../Items/Items.slice';
import {apiSlice} from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    items: ItemsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
