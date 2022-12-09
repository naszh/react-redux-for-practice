import { FC, useContext } from 'react';
import { Wrapper } from './App.styles';
import { SignInForm } from './components/signin/signin';
import { SignUpForm } from './components/signup/signup';
import { ThemeContext } from './components/theme/themeProvider';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Outlet,
} from 'react-router-dom';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { People } from './components/people/people';
import { MaterialUISwitch } from './components/switch/switch';
import { Oops } from './components/notFound/notFound';

const App: FC = () => {
	const { toggleTheme } = useContext(ThemeContext);

	const WrapperState = () => (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);

	return (
		<>
			<MaterialUISwitch onClick={toggleTheme} />
			<Router>
				<Routes>
					<Route path='/main' element={<People />} />
					<Route path='/home' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route element={<WrapperState />}>
						<Route path='/' element={<SignUpForm />} />
						<Route path='/signin' element={<SignInForm />} />
						<Route path='/signup' element={<Navigate to='/' />} />
					</Route>
					<Route path='*' element={<Oops />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
