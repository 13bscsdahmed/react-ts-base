import i18next from 'i18next';
import Input from '@shared/components/formElements/input/Input';
import { Auth } from '@shared/services/auth/auth.model';
import { Formik, Form, FormikProps } from 'formik';
import React, { FC } from 'react';
import { object, string } from 'yup';
import classes from './LoginForm.module.css';

interface Props {
  onLogin: (user: Auth) => void;
}

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginForm: FC<Props> = props => {
  const initialLoginFormValues: LoginFormProps = {
    email: '',
    password: '',
  };
  const loginFormValidationSchema = object({
    email: string()
      .required(i18next.t('formValidations.fieldRequired'))
      .email(i18next.t('formValidations.valid', { fieldName: 'Email' })),
    password: string()
      .required(i18next.t('formValidations.fieldRequired'))
      .min(6, i18next.t('formValidations.fieldLength', { fieldName: 'Password', length: 6 })),
  });

  const loginFormSubmitHandler = (values: LoginFormProps) => {
    const loginObject: Auth = {
      password: values.password,
      email: values.email,
    };
    props.onLogin(loginObject);
  };
  return (
    <Formik
      initialValues={initialLoginFormValues}
      validationSchema={loginFormValidationSchema}
      validateOnChange={false}
      onSubmit={loginFormSubmitHandler}
    >
      {(props: FormikProps<LoginFormProps>) => (
        <Form className={classes.form}>
          <Input label='Email' type='text' name='email' placeholder='Email' />
          <Input label='Password' type='password' name='password' placeholder='Password' />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
