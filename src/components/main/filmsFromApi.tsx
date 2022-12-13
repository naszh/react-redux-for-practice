import { useEffect, useState } from 'react';
import { kinopoiskApi, token } from '../axios/api';
import { Header } from '../header/header';
import { MainStyles } from './main.styles';

interface FilmsType {
	id: number;
	names: Array<FilmsNamesType>;
	type: string;
	poster: {
		url: string;
	};
	rating: {
		imdb: number;
	};
}

interface FilmsNamesType {
	name: string;
	_id: string;
}

export const FilmsPage = () => {
	const [films, setFilms] = useState<Array<FilmsType>>([]);

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
			<h1 style={MainStyles.H}>Movies from Kinopoisk</h1>
			<div style={MainStyles.FilmsContainer}>
				{films.map(
					films =>
						films.poster?.url && (
							<div key={films.id} style={MainStyles.FilmItem}>
								<img
									src={films.poster?.url}
									alt={`poster of ${
										films.names[1]?.name || films.names[0]?.name
									}`}
									style={MainStyles.FilmPoster}
								/>
								<p>
									{films.names[1]?.name || films.names[0]?.name} | {films.type}
								</p>
								<p>Rating imdb: {films.rating.imdb}</p>
							</div>
						)
				)}
			</div>
		</>
	);
};
