import { Button } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themeProvider';
import { ButtonStyleLight, ButtonStyleDark } from './button.styles';

interface ButtonElementProps {
	text: string;
	onClick?: () => void;
	disabled?: boolean;
}

export const ButtonElement = ({
	text,
	onClick,
	disabled,
}: ButtonElementProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Button
			variant='outlined'
			size='large'
			sx={theme === 'light' ? ButtonStyleLight : ButtonStyleDark}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</Button>
	);
};
