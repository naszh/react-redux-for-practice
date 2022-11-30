import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { CheckboxStyle } from './checkbox.styles';

interface CheckElementProps {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckElement = ({ checked, onChange }: CheckElementProps) => {
	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox
						sx={CheckboxStyle.Checkbox}
						checked={checked}
						onChange={onChange}
					/>
				}
				label='I accept all terms & conditions'
				sx={CheckboxStyle.FormControlLabel}
			/>
		</FormGroup>
	);
};
