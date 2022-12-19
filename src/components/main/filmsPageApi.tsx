import { Header } from '../header/header';
import { FilmsList } from './filmsMap';

import { MainStyles } from './main.styles';

export const FilmsPage = () => {
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
