import React, { useContext, useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import { ThemeContext } from '../../theme/themeProvider';
import { InputStyleDark, InputStyleLight } from './input.styles';

interface InputAdornmentsProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	text: string;
	required?: boolean;
	error?: boolean;
}

export default function InputAdornments({
	value,
	onChange,
	label,
	text,
	required = true,
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
				sx={theme === 'light' ? InputStyleLight : InputStyleDark}
				required={required}
			>
				{text}
			</InputLabel>
			<OutlinedInput
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
				label={label}
				required={required}
				sx={theme === 'light' ? InputStyleLight : InputStyleDark}
			/>
		</FormControl>
	);
}
