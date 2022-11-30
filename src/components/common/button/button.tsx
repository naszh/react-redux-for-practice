import { Button } from '@mui/material';
import { ButtonStyle } from './button.styles';

interface ButtonElementProps {
	onClick: () => void;
	disabled: boolean;
}

export const ButtonElement = ({ onClick, disabled }: ButtonElementProps) => {
	return (
		<Button
			variant='outlined'
			size='large'
			sx={ButtonStyle}
			onClick={onClick}
			disabled={disabled}
		>
			SIGN UP
		</Button>
	);
};
