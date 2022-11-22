import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import React from 'react';

interface State {
	password: string;
	showPassword: boolean;
}

export default function InputAdornments() {
	const [values, setValues] = React.useState<State>({
		password: '',
		showPassword: false,
	});

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
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
				type={values.showPassword ? 'text' : 'password'}
				value={values.password}
				onChange={handleChange('password')}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'
						>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label='Create password'
			/>
		</FormControl>
	);
}
