import { FormStyles } from './signup.styles';
import { InputTel, InputText } from '../common/input';
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
				<InputTel />
				<InputAdornments />
				<CheckElement />
				<ButtonElement />
			</div>
		</form>
	);
};
