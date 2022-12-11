import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { ThemeContext } from '../../theme/themeProvider';
import { InputStyleDark, InputStyleLight } from './input.styles';

interface InputProps {
	type: string;
	label: string;
	id?: string;
	variant?: 'outlined' | 'standard' | 'filled' | undefined;
	required?: boolean;
	value?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
}

export const InputText = ({
	type,
	label,
	variant = 'outlined',
	required = true,
	value,
	onChange,
	error,
}: InputProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<TextField
			type={type}
			label={label}
			variant={variant}
			required={required}
			value={value}
			onChange={onChange}
			error={error}
			sx={theme === 'light' ? InputStyleLight : InputStyleDark}
		/>
	);
};

interface InputTelProps {
	value: string;
	onChange: (value: string) => void;
	label?: string;
	required?: boolean;
}

export const InputTel = ({
	value,
	onChange,
	label = 'Enter your phone number',
	required = true,
}: InputTelProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<MuiTelInput
			value={value}
			onChange={onChange}
			label={label}
			required={required}
			sx={theme === 'light' ? InputStyleLight : InputStyleDark}
		/>
	);
};
