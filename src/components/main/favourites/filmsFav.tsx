import { useDispatch, useSelector } from 'react-redux';
import {
	toggleFillHeart,
	launchCounter,
	removeFilmFromFav,
} from '../../../redux/reducer/favReducer/favouritesSlice';
import { AppDispatch, RootState } from '../../../redux/store';
import { LinkStyled } from '../../common';
import { Header } from '../../header/header';
import { Film } from '../filmsMap';
import {
	ArrowBack,
	DislikeHeart,
	FavFilmBlock,
	GoBack,
} from './filmsFav.styled';

export const MyFavouriteFilms = () => {
	const dispatch = useDispatch<AppDispatch>();

	const favourites: Array<Film> = useSelector(
		(state: RootState) => state.favourites.initArr
	);

	const HandleClickRemove = (id: number) => {
		dispatch(removeFilmFromFav(id));
		dispatch(launchCounter());
		dispatch(toggleFillHeart({ style: { fill: 'none' } }));
	};

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
								{el.alternativeName} | {el.movieLength} minutes | {el.year}{' '}
								<DislikeHeart
									onClick={() => {
										HandleClickRemove(el.id);
									}}
								/>
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
