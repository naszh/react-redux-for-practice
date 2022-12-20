import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../../components/main/filmsMap';

interface InitialStateType {
	initArr: Array<Film>;
}

const initialState: InitialStateType = {
	initArr: [],
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFilmToFav: (state, action: PayloadAction<Film>) => {
			const tempFilm = { ...action.payload };
			state.initArr.push(tempFilm);
		},
	},
});

export const { addFilmToFav } = favouritesSlice.actions;
export const favReducer = favouritesSlice.reducer;
