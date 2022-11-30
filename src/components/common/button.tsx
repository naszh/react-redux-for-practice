import { Button } from '@mui/material';

interface ButtonElementProps {
	onClick: () => void;
	disabled: boolean;
}

export const ButtonElement = ({ onClick, disabled }: ButtonElementProps) => {
	return (
		<Button
			variant='outlined'
			size='large'
			sx={{
				fontWeight: '700',
				color: 'rgba(25, 118, 210, 0.8)',
				border: '1px solid rgba(25, 118, 210, 0.6)',
			}}
			onClick={onClick}
			disabled={disabled}
		>
			SIGN UP
		</Button>
	);
};
