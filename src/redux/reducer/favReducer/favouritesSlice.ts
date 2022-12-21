import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../../components/main/filmsMap';

interface FillType {
	style: { fill: string };
}

interface InitialStateType {
	initArr: Array<Film>;
	counter: number;
	fill: FillType;
}

const initialState: InitialStateType = {
	initArr: [],
	counter: 0,
	fill: { style: { fill: 'none' } },
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
		launchCounter: state => {
			state.counter = state.initArr.length;
		},
		toggleFillHeart: (state, action: PayloadAction<FillType>) => {
			state.fill = action.payload;
		},
	},
});

export const {
	addFilmToFav,
	removeFilmFromFav,
	launchCounter,
	toggleFillHeart,
} = favouritesSlice.actions;
export const favReducer = favouritesSlice.reducer;
