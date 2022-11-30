import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';

interface InputProps {
	type: string;
	label: string;
	id?: string;
	variant?: 'outlined' | 'standard' | 'filled' | undefined;
	required?: boolean;
	value?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
	type,
	label,
	variant = 'outlined',
	required = true,
	value,
	onChange,
}: InputProps) => {
	return (
		<TextField
			type={type}
			label={label}
			variant={variant}
			required={required}
			value={value}
			onChange={onChange}
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
	return (
		<MuiTelInput
			value={value}
			onChange={onChange}
			label={label}
			required={required}
		/>
	);
};
