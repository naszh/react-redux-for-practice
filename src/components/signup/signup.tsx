import { InputTel, InputText } from '../common/input';
import InputAdornments from '../common/password';
import { CheckElement } from '../common/checkbox/checkbox';
import { ButtonElement } from '../common/button/button';
import { useEffect, useState } from 'react';
import { FormStyles } from './signup.styles';

export const SignUpForm = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checked, setChecked] = useState(false);

	const [isValid, setIsValid] = useState<boolean>(false);

	const [isErrorName, setIsErrorName] = useState<boolean>(false);
	const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
	const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleChangePhone = (newPhone: React.SetStateAction<string>) => {
		setPhone(newPhone);
	};

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const [state, setState] = useState(<></>);

	const handleConfirm = () => {
		console.log(name);
		setState(
			<>
				{state}
				<div>
					{name} {email} {phone} {password} {checked.toString()}
				</div>
			</>
		);
	};

	useEffect(() => {
		const minLengthName = name.length > 3;
		const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		const minOneNum = password.match(/\d{1,}/);
		const minLetters = password.match(/[a-zA-Z]/gi);

		minLengthName && emailValid && minOneNum && minLetters!.length >= 3
			? setIsValid(true)
			: setIsValid(false);

		if (name) {
			minLengthName ? setIsErrorName(false) : setIsErrorName(true);
		}

		if (email) {
			emailValid ? setIsErrorEmail(false) : setIsErrorEmail(true);
		}

		if (password) {
			minOneNum && minLetters!.length >= 3
				? setIsErrorPassword(false)
				: setIsErrorPassword(true);
		}
	}, [name, email, password]);

	return (
		<>
			<form>
				<div style={FormStyles.FormContainer}>
					<h1 style={FormStyles.Headers}>SIGN UP</h1>
					<h2 style={FormStyles.Headers}>It's free.</h2>
					<InputText
						error={isErrorName}
						type={'text'}
						label={'Enter your name'}
						value={name}
						onChange={handleChangeName}
					/>
					<InputText
						error={isErrorEmail}
						type={'email'}
						label={'Enter your email'}
						value={email}
						onChange={handleChangeEmail}
					/>
					<InputTel value={phone} onChange={handleChangePhone} />
					<InputAdornments
						error={isErrorPassword}
						value={password}
						onChange={handleChangePassword}
					/>
					<CheckElement checked={checked} onChange={handleChangeChecked} />
					<ButtonElement onClick={handleConfirm} disabled={!isValid} />
				</div>
			</form>
			<div>{state}</div>
		</>
	);
};