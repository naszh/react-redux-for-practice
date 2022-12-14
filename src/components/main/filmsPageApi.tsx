import { useEffect, useState } from 'react';
import { kinopoiskApi, token } from '../axios/api';
import { Header } from '../header/header';
import { FilmsList, FilmsResponseType } from './filmsMap';
import { MainStyles } from './main.styles';

export const FilmsPage = () => {
	const [films, setFilms] = useState<Array<FilmsResponseType>>([]);

	const getFilms = async () => {
		try {
			const response = await kinopoiskApi.get(
				`/movie?field=year&search=2021-2022&limit=25&token=${token}`
			);
			setFilms(response.data.docs);
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
				<FilmsList films={films} />
			</div>
		</>
	);
};
