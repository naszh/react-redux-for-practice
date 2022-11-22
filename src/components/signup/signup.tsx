import { FormStyles } from './signup.styles';
import { InputText } from '../common/inputText';
import InputAdornments from '../common/password';
import { CheckElement } from '../common/checkbox';
import { ButtonElement } from '../common/button';

export const SignUpForm = () => {
	return (
		<form>
			<div style={FormStyles.FormContainer}>
				<h1 style={FormStyles.Headers}>SIGN UP</h1>
				<h2 style={FormStyles.Headers}>It's free.</h2>

				<InputText type={'text'} label={'Enter your name'} />
				<InputText type={'email'} label={'Enter your email'} />
				<InputText type={'phone'} label={'Enter your phone number'} />
				<InputAdornments />
				<CheckElement />
				<ButtonElement />
			</div>
		</form>
	);
};
