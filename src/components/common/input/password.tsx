import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../theme/themeProvider';
import { InputStyleDark, InputStyleLight } from './input.styles';

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

	const { theme } = useContext(ThemeContext);

	return (
		<FormControl variant='outlined'>
			<InputLabel
				htmlFor='outlined-adornment-password'
				sx={theme === 'light' ? InputStyleLight : InputStyleDark}
			>
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
							sx={theme === 'light' ? InputStyleLight : InputStyleDark}
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label='Create password'
				sx={theme === 'light' ? InputStyleLight : InputStyleDark}
			/>
		</FormControl>
	);
}
