import React, { MouseEventHandler, ReactElement, useState } from 'react';
type Theme = 'light' | 'dark';
type ThemeContextType = {
	theme: Theme;
	toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ThemeContext = React.createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: undefined,
});

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
	const fontFamily = theme === 'light' ? 'cursive' : 'monospace';

	document.body.style.color = color;
	document.body.style.backgroundColor = backgroundColor;
	document.body.style.fontFamily = fontFamily;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
