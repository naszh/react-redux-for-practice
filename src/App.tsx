import { FC, useContext } from 'react';
import { Wrapper } from './App.styles';
import { ButtonElement } from './components/common/button/button';
import { Header } from './components/header/header';
import { SignInForm } from './components/signin/signin';
// import { People } from './components/people/people';
import { SignUpForm } from './components/signup/signup';
import { ThemeContext } from './components/theme/themeProvider';

const App: FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			<Header />
			<ButtonElement
				onClick={toggleTheme}
				text={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
			/>
			<>
				<Wrapper>
					<SignUpForm />
					{/* <People /> */}
					<SignInForm />
				</Wrapper>
			</>
		</>
	);
};

export default App;
