import { FC, useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Outlet,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
	ThemeContext,
	Home,
	About,
	FilmsPage,
	Oops,
	SignInForm,
	SignUpForm,
	MaterialUISwitch,
	MyFavouriteFilms,
} from './components';
import { AuthProvider, RequireAuth } from './private';
import { kinopoiskApi, token } from './axios/api';
import { AppDispatch } from './redux/store';
import { addFilms } from './redux/reducer/filmsSlice';

import { Wrapper } from './App.styles';

const App: FC = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const dispatch = useDispatch<AppDispatch>();

	const getFilms = async () => {
		try {
			const response = await kinopoiskApi.get(
				`/movie?field=year&search=2021-2022&limit=25&token=${token}`
			);
			dispatch(addFilms({ filmsArr: response.data.docs }));
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getFilms();
	}, []);

	const WrapperState = () => (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);

	return (
		<AuthProvider>
			<MaterialUISwitch onClick={toggleTheme} />
			<Router>
				<Routes>
					<Route path='/main' element={<FilmsPage />} />
					<Route path='/favourites' element={<MyFavouriteFilms />} />
					{/* <Route
						path='/main/:id/edit'
						element={
							<RequireAuth>
								<PersonEditPage />
							</RequireAuth>
						}
					/> */}
					<Route path='/home' element={<Home />} />
					<Route
						path='/about'
						element={
							<RequireAuth>
								<About />
							</RequireAuth>
						}
					/>
					<Route element={<WrapperState />}>
						<Route path='/' element={<SignUpForm />} />
						<Route path='/signin' element={<SignInForm />} />
						<Route path='/signup' element={<Navigate to='/' />} />
					</Route>
					<Route path='*' element={<Oops />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
