import { FC, useContext } from 'react';
import { Wrapper } from './App.styles';
import { ButtonElement } from './components/common/button/button';
import { SignInForm } from './components/signin/signin';
import { SignUpForm } from './components/signup/signup';
import { ThemeContext } from './components/theme/themeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { People } from './components/people/people';

const App: FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<Router>
			<Routes>
				<Route path='/main' element={<People />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<ButtonElement
				onClick={toggleTheme}
				text={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
				size={'small'}
			/>
			<Wrapper>
				<Routes>
					<Route path='/' element={<SignUpForm />} />
					<Route path='/signin' element={<SignInForm />} />
				</Routes>
			</Wrapper>
		</Router>
	);
};

export default App;
