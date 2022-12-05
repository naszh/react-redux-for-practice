import { Button } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themeProvider';
import { ButtonStyleLight, ButtonStyleDark } from './button.styles';

interface ButtonElementProps {
	onClick: () => void;
	disabled: boolean;
}

export const ButtonElement = ({ onClick, disabled }: ButtonElementProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Button
			variant='outlined'
			size='large'
			sx={theme === 'light' ? ButtonStyleLight : ButtonStyleDark}
			onClick={onClick}
			disabled={disabled}
		>
			SIGN UP
		</Button>
	);
};
