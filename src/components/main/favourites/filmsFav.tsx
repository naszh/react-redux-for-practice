import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { LinkStyled } from '../../common';
import { Header } from '../../header/header';
import { Film } from '../filmsMap';
import { ArrowBack, FavFilmBlock, GoBack } from './filmsFav.styled';

export const MyFavouriteFilms = () => {
	const favourites: Array<Film> = useSelector(
		(state: RootState) => state.favourites.initArr
	);

	return (
		<>
			<Header />
			<GoBack>
				<LinkStyled to='/main'>
					<ArrowBack /> Go back to films
				</LinkStyled>
			</GoBack>
			{favourites.length === 0 ? (
				<p>You haven't added any movies to your favourites</p>
			) : (
				<div>
					{favourites.map((el: Film) => (
						<FavFilmBlock key={el.id}>
							<div>
								{el.alternativeName} | {el.movieLength} minutes | {el.year}
							</div>
							<div>
								{el.description || el.shortDescription || 'no description'}
							</div>
						</FavFilmBlock>
					))}
				</div>
			)}
		</>
	);
};
