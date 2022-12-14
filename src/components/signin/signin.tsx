import { useContext, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import {
	ButtonElement,
	CheckElement,
	InputText,
	InputAdornments,
} from '../common';
import { ThemeContext } from '../theme/themeProvider';

import { FormContainer, Header1, LinkStyled } from '../common';
import { AuthContext } from '../../private/';
import { PersonType } from '../people/person';

export const SignInForm = () => {
	const { theme } = useContext(ThemeContext);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checked, setChecked] = useState(false);

	const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(false);

	const navigate: NavigateFunction = useNavigate();
	const { signIn } = useContext(AuthContext);

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const handleClick = () => {
		signIn({} as PersonType, () => {
			navigate('/main', { replace: true });
		});
	};

	useEffect(() => {
		const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

		if (email) {
			emailValid ? setIsErrorEmail(false) : setIsErrorEmail(true);
		}

		emailValid && password.length > 3 ? setIsValid(true) : setIsValid(false);
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
				<ButtonElement
					size={'large'}
					text={'sign in'}
					disabled={!isValid}
					onClick={handleClick}
				/>
				<LinkStyled to='/'>Need an account? Sign Up</LinkStyled>
			</FormContainer>
		</form>
	);
};
