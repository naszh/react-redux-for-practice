import { LinkStyled } from '../common';
import { Header } from '../header/header';
import { FilmsList } from './filmsMap';

import { Heart, MainStyles } from './main.styles';

export const FilmsPage = () => {
	return (
		<>
			<Header />
			<div style={MainStyles.FilmsHeaderContainer}>
				<h1 style={MainStyles.FilmsListHeader}>Movies from Kinopoisk</h1>
				<div style={MainStyles.LinkContainer}>
					<LinkStyled to='/favourites' style={MainStyles.LinkToFav}>
						<Heart />
						Favourites
					</LinkStyled>
				</div>
			</div>
			<div style={MainStyles.FilmsContainer}>
				<FilmsList />
			</div>
		</>
	);
};
