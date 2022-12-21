import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../../components/main/filmsMap';

interface InitialStateType {
	initArr: Array<Film>;
	counter: number;
}

const initialState: InitialStateType = {
	initArr: [],
	counter: 0,
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFilmToFav: (state, action: PayloadAction<Film>) => {
			const tempFilm = action.payload;
			let isIn = false;
			state.initArr.forEach(el => {
				if (el.id === tempFilm.id) isIn = true;
			});
			if (!isIn) state.initArr.push(tempFilm);
		},
		removeFilmFromFav: (state, action: PayloadAction<number>) => {
			const filmId: number = action.payload;
			state.initArr = state.initArr.filter((film: Film) => film.id !== filmId);
		},
		incrementCounter: state => {
			state.counter = state.initArr.length;
		},
	},
});

export const { addFilmToFav, removeFilmFromFav, incrementCounter } =
	favouritesSlice.actions;
export const favReducer = favouritesSlice.reducer;
