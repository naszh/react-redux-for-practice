import { FC, useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Outlet,
} from 'react-router-dom';

import { SignInForm } from './components/signin/signin';
import { SignUpForm } from './components/signup/signup';
import { ThemeContext } from './components/theme/themeProvider';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { MaterialUISwitch } from './components/switch/switch';
import { Oops } from './components/notFound/notFound';
import { PersonEditPage } from './components/people/personEdit';

import { Wrapper } from './App.styles';
import { AuthProvider } from './private/authProvider';
import { RequireAuth } from './private/requireAuth';
import { FilmsPage } from './components/main/filmsPageApi';

const App: FC = () => {
	const { toggleTheme } = useContext(ThemeContext);

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
					<Route
						path='/main/:id/edit'
						element={
							<RequireAuth>
								<PersonEditPage />
							</RequireAuth>
						}
					/>
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
