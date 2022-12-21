import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { kinopoiskApi, token } from '../../../axios/api';
import { Film } from '../../../components/main/filmsMap';

interface InitialStateType {
	initArr: Array<Film>;
	error: null | string;
}

type AddFilmsType = {
	filmsArr: Array<Film>;
};

export const fetchFilms: any = createAsyncThunk(
	'films/fetchFilms',
	async () => {
		const response = await kinopoiskApi.get(
			`/movie?field=year&search=2021-2022&limit=25&token=${token}`
		);
		return response.data.docs;
	}
);

const initialState: InitialStateType = {
	initArr: [],
	error: null,
};

const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		addFilms: (state, { payload }: PayloadAction<AddFilmsType>) => {
			state.initArr = payload.filmsArr;
		},
		removeFilm: (state, action: PayloadAction<number>) => {
			const filmId: number = action.payload;
			state.initArr = state.initArr.filter((film: Film) => film.id !== filmId);
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchFilms.fulfilled, (state, action) => {
			state.initArr = action.payload;
		});
		builder.addCase(fetchFilms.rejected, (state, action) => {
			state.error = action.error.message;
		});
	},
});

export const { addFilms, removeFilm } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
