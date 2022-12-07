import { useContext, useEffect, useState } from 'react';
import { ButtonElement } from '../common/button/button';
import { CheckElement } from '../common/checkbox/checkbox';
import { InputText } from '../common/input/input';
import InputAdornments from '../common/input/password';
import { FormContainer, Header1 } from '../common/sign/sign.styles';
import { ThemeContext } from '../theme/themeProvider';

export const SignInForm = () => {
	const { theme } = useContext(ThemeContext);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checked, setChecked] = useState(false);

	const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(false);

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

		if (email) {
			emailValid ? setIsErrorEmail(false) : setIsErrorEmail(true);
		}

		emailValid && password ? setIsValid(true) : setIsValid(false);
	}, [email, password]);

	return (
		<form>
			<FormContainer>
				<Header1 style={{ fontWeight: theme === 'light' ? '100' : '700' }}>
					SIGN IN
				</Header1>
				<InputText
					error={isErrorEmail}
					type={'email'}
					label={'Enter email'}
					value={email}
					onChange={handleChangeEmail}
				/>
				<InputAdornments
					text={'Enter password'}
					label={'Enter password'}
					value={password}
					onChange={handleChangePassword}
				/>
				<CheckElement
					label={'Remember me'}
					checked={checked}
					onChange={handleChangeChecked}
				/>
				<ButtonElement text={'sign in'} disabled={!isValid} />
			</FormContainer>
		</form>
	);
};
