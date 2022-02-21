import Input from '@shared/components/formElements/input/Input';
import { Auth } from '@shared/services/auth/auth.model';
import React, { FC, MutableRefObject, useRef } from 'react';

interface Props {
  onLogin: (user: Auth) => void;
}

const LoginForm: FC<Props> = props => {
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;

  const loginFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordRef.current?.value && emailRef.current?.value) {
      const loginObject: Auth = {
        password: passwordRef.current?.value,
        email: emailRef.current?.value,
      };
      props.onLogin(loginObject);
    }
  };
  return (
    <form onSubmit={loginFormSubmitHandler}>
      {/* TODO: Add better way to handle forms, validation (Formik etc) */}
      <Input
        label='Email'
        ref={emailRef}
        input={{
          id: 'email',
          placeholder: 'Email',
          type: 'email',
        }}
      />

      <Input
        label='Password'
        ref={passwordRef}
        input={{
          id: 'password',
          placeholder: 'Password',
          type: 'password',
        }}
      />

      <button type='submit'>Add</button>
    </form>
  );
};

export default LoginForm;
