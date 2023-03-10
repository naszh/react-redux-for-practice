import { useContext, useEffect, useState } from 'react';

import {
  CheckElement,
  ButtonElement,
  InputAdornments,
  InputTel,
  InputText,
} from '../common';
import { ThemeContext } from '../theme/themeProvider';

import { FormContainer, Header1, Header2, LinkStyled } from '../common';

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

    if (password && minLetters) {
      minOneNum && minLetters.length >= 3
        ? setIsErrorPassword(false)
        : setIsErrorPassword(true);
    }
  }, [name, email, password]);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <form>
        <FormContainer>
          <Header1 style={{ fontWeight: theme === 'light' ? '100' : '700' }}>
            SIGN UP
          </Header1>
          <Header2 style={{ fontWeight: theme === 'light' ? '100' : '700' }}>
            It's free.
          </Header2>
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
            text={'Create password'}
            label={'Create password'}
            error={isErrorPassword}
            value={password}
            onChange={handleChangePassword}
          />
          <CheckElement
            label={'I accept all terms & conditions'}
            checked={checked}
            onChange={handleChangeChecked}
          />
          <LinkStyled to='/signin'>Already a member? Sign In</LinkStyled>
          <ButtonElement
            size={'large'}
            onClick={handleConfirm}
            disabled={!isValid}
            text={'sign up'}
          />
        </FormContainer>
      </form>
      <div>{state}</div>
    </>
  );
};
