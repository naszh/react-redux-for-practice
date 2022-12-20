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

	const deleteDuplicate = () => {
		const uniqFavourites = favourites.reduce((acc: Array<Film>, curr: Film) => {
			if (!acc.find((el: Film) => el.id == curr.id)) {
				acc.push(curr);
			}
			return acc;
		}, []);
		return uniqFavourites;
	};

	const arrFavourites = deleteDuplicate();

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
					{arrFavourites.map((el: Film) => (
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
