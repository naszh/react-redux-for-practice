import { TextField } from '@mui/material';

interface InputProps {
	type: string;
	label: string;
	id?: string;
	variant?: string;
}

export const InputText = ({
	type,
	label,
	id = 'outlined-basic',
	variant = 'outlined',
}: InputProps) => {
	return <TextField type={type} label={label} />;
};
