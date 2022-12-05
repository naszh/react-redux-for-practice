import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themeProvider';
import {
	CheckboxStyleLight,
	CheckboxStyleDark,
	FormControlLabelStyle,
} from './checkbox.styles';

interface CheckElementProps {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckElement = ({ checked, onChange }: CheckElementProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox
						sx={theme === 'light' ? CheckboxStyleLight : CheckboxStyleDark}
						checked={checked}
						onChange={onChange}
					/>
				}
				label='I accept all terms & conditions'
				sx={FormControlLabelStyle}
			/>
		</FormGroup>
	);
};
