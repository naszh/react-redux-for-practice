import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import React, { useState } from 'react';

interface InputAdornmentsProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error: boolean;
}

export default function InputAdornments({
	value,
	onChange,
	error,
}: InputAdornmentsProps) {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<FormControl variant='outlined'>
			<InputLabel htmlFor='outlined-adornment-password'>
				Create password
			</InputLabel>
			<OutlinedInput
				id='outlined-adornment-password'
				type={showPassword ? 'text' : 'password'}
				error={error}
				value={value}
				onChange={onChange}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label='Create password'
			/>
		</FormControl>
	);
}
