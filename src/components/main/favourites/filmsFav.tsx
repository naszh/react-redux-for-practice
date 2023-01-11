import { useDispatch, useSelector } from 'react-redux';
import { launchCounter } from '../../../redux/reducer/filmsSlice';
import { toggleFilmInFav } from '../../../redux/reducer/filmsSlice';

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

  const favourites: Array<Film> = useSelector((state: RootState) =>
    state.films.initArr.filter((film: Film) => film.isFav === true)
  );

  const HandleClickRemove = (id: number) => {
    dispatch(toggleFilmInFav(id));
    dispatch(launchCounter());
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
          {favourites.map((film: Film, i) => (
            <FavFilmBlock key={i}>
              <div>
                {film.alternativeName} | {film.movieLength} minutes |{' '}
                {film.year}
                <DislikeHeart
                  onClick={() => {
                    HandleClickRemove(film.id);
                  }}
                />
              </div>
              <div>
                {film.description || film.shortDescription || 'no description'}
              </div>
            </FavFilmBlock>
          ))}
        </div>
      )}
    </>
  );
};
