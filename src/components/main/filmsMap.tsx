import { useDispatch, useSelector } from 'react-redux';

import {
	removeFilm,
	toggleFilmInFav,
	launchCounter,
} from '../../redux/reducer/filmsSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { ButtonElement } from '../common';
import { HeartPlus, MainStyles } from './main.styles';

export interface Film {
	isFav: boolean;
	alternativeName: string | null;
	description: string | null;
	enName: string | null;
	externalId: { kpHD: string | null; imdb: string | null; _id: string | null };
	id: number;
	logo: { _id: string; url: string | null };
	movieLength: number | null;
	name: string | null;
	names: Array<{ name: string | null; _id: string | null }>;
	poster: {
		_id: string | null;
		url: string | null;
		previewUrl: string | null;
	} | null;
	rating: {
		_id: string | null;
		kp: number | null;
		imdb: number | null;
		filmCritics: number | null;
		russianFilmCritics: number | null;
		await: number | null;
	};
	releaseYears:
		| Array<{ _id: string | null; start: number | null; end: number | null }>
		| [];
	shortDescription: string | null;
	type: string | null;
	votes: {
		_id: string | null;
		kp: number | null;
		imdb: number | null;
		filmCritics: number | null;
		russianFilmCritics: number | null;
		await: number | null;
	};
	watchability: {
		_id: string;
		items: Array<{
			name: string | null;
			url: string | null;
			_id: string | null;
			logo: { url: string | null; _id: string | null };
		}> | null;
	};
	year: number;
}

export const FilmsList = (): JSX.Element => {
	const films = useSelector((state: RootState) => state.films.initArr);

	const dispatch = useDispatch<AppDispatch>();

	const HandleClickRemove = (id: number) => {
		dispatch(removeFilm(id));
	};

	const handleAddToFav = (id: number) => {
		dispatch(toggleFilmInFav(id));
		dispatch(launchCounter());
	};

	return (
		<>
			{films.map(
				(film: Film, i) =>
					film.poster?.url && (
						<div key={film.id} style={MainStyles.FilmItem}>
							<img
								src={film.poster?.url}
								alt={`poster of ${film.names[1]?.name || film.names[0]?.name}`}
								style={MainStyles.FilmPoster}
							/>
							<HeartPlus
								onClick={() => {
									handleAddToFav(film.id);
								}}
								style={{ fill: film.isFav ? 'red' : '' }}
							/>
							<div style={MainStyles.FilmInfo}>
								<p style={MainStyles.FilmName}>
									{film.names[1]?.name || film.names[0].name} | {film.type}
								</p>
								<p>Rating imdb: {film.rating.imdb}</p>
								<ButtonElement
									text={'viewed'}
									size={'small'}
									onClick={() => {
										HandleClickRemove(film.id);
									}}
								/>
							</div>
						</div>
					)
			)}
		</>
	);
};
