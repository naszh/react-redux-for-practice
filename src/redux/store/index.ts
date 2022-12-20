import { configureStore } from '@reduxjs/toolkit';
import { favReducer } from '../reducer/favReducer/favouritesSlice';
import { filmsReducer } from '../reducer/filmsReducer/filmsSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		favourites: favReducer,
	},
});
