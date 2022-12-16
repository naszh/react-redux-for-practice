import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../components/main/filmsMap';

interface InitialStateType {
	initArr: Array<Film>;
}

type AddFilmsType = {
	filmsArr: Array<Film>;
};

const initialState: InitialStateType = {
	initArr: [],
};

const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		addFilms: (state, { payload }: PayloadAction<AddFilmsType>) => {
			state.initArr = payload.filmsArr;
		},
	},
});

export const { addFilms } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
