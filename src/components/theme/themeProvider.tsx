import React, { ReactElement, useState } from 'react';
type Theme = 'light' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
	{} as ThemeContext
);

type ThemeProviderProps = {
	children: ReactElement;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>('light');
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const color = theme === 'light' ? 'darkslategray' : 'mintcream';
	const backgroundColor = theme === 'light' ? 'mintcream' : 'darkslategray';

	document.body.style.color = color;
	document.body.style.backgroundColor = backgroundColor;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
