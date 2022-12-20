import { LinkStyled } from '../../common';
import { Header } from '../../header/header';
import { ArrowBack, GoBack } from './filmsFav.styled';

export const MyFavouriteFilms = () => {
	return (
		<>
			<Header />
			<GoBack>
				<LinkStyled to='/main'>
					<ArrowBack /> Go back to films
				</LinkStyled>
			</GoBack>
		</>
	);
};
