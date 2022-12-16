import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { kinopoiskApi, token } from '../../axios/api';
import { addFilms } from '../../redux/reducer/filmsSlice';
import { Header } from '../header/header';
import { FilmsList } from './filmsMap';

import { MainStyles } from './main.styles';

export const FilmsPage = () => {
	const dispatch = useDispatch();

	const getFilms = async () => {
		try {
			const response = await kinopoiskApi.get(
				`/movie?field=year&search=2021-2022&limit=25&token=${token}`
			);
			dispatch(addFilms({ filmsArr: response.data.docs }));
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getFilms();
	}, []);

	return (
		<>
			<Header />
			<h1 style={MainStyles.FilmsListHeader}>Movies from Kinopoisk</h1>
			<div style={MainStyles.FilmsContainer}>
				<FilmsList />
			</div>
		</>
	);
};
