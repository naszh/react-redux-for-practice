import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

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
						sx={{
							color: 'rgba(25, 118, 210, 0.6)',
							'&.Mui-checked': {
								color: 'rgba(25, 118, 210, 0.8)',
							},
						}}
						checked={checked}
						onChange={onChange}
					/>
				}
				label='I accept all terms & conditions'
				sx={{ opacity: '.75' }}
			/>
		</FormGroup>
	);
};
