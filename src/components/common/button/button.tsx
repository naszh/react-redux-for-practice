import { MouseEventHandler, useContext } from 'react';
import { Button } from '@mui/material';

import { ThemeContext } from '../../theme/themeProvider';

import { ButtonStyleLight, ButtonStyleDark } from './button.styles';

interface ButtonElementProps {
	text: string;
	size: 'small' | 'medium' | 'large';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

export const ButtonElement = ({
	text,
	size,
	onClick,
	disabled,
}: ButtonElementProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Button
			variant='outlined'
			size={size}
			sx={theme === 'light' ? ButtonStyleLight : ButtonStyleDark}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</Button>
	);
};
