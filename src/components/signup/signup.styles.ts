interface FormStylesTypes {
	FormContainer: { [key: string]: string };
	Headers: { [key: string]: string };
}

export const FormStyles: FormStylesTypes = {
	FormContainer: {
		display: 'flex',
		flexDirection: 'column',
		margin: '0 auto',
		alignItems: 'stretch',
		gap: '15px',
		backgroundColor: 'rgba(25, 118, 210, 0.05)',
		padding: '40px',
		borderRadius: '20px',
	},
	Headers: {
		margin: '0 auto',
		color: '#545454',
	},
};
