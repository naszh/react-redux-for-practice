import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export const CheckElement = () => {
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
					/>
				}
				label='I accept all terms & conditions'
				sx={{ opacity: '.75' }}
			/>
		</FormGroup>
	);
};
