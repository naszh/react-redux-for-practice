import { FC, useContext } from 'react';
import { Wrapper } from './App.styles';
// import { People } from './components/people/people';
import { SignUpForm } from './components/signup/signup';
import { ThemeContext } from './components/theme/themeProvider';

const App: FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			<Wrapper>
				<SignUpForm />
				{/* <People /> */}
			</Wrapper>
			<button onClick={toggleTheme}>
				Switch to {theme === 'light' ? 'dark' : 'light'} mode
			</button>
		</>
	);
};

export default App;
