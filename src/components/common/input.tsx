import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';

interface InputProps {
	type: string;
	label: string;
	id?: string;
	variant?: 'outlined' | 'standard' | 'filled' | undefined;
	required?: boolean;
}

export const InputText = ({
	type,
	label,
	variant = 'outlined',
	required = true,
}: InputProps) => {
	return (
		<TextField
			type={type}
			label={label}
			variant={variant}
			required={required}
		/>
	);
};

export const InputTel = () => {
	const [phone, setPhone] = React.useState('');

	const handleChange = (newPhone: React.SetStateAction<string>) => {
		setPhone(newPhone);
	};

	return (
		<MuiTelInput
			value={phone}
			onChange={handleChange}
			label='Enter your phone number'
			required
		/>
	);
};
