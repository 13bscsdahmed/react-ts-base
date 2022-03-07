import React, { FC, HTMLInputTypeAttribute } from 'react';
import classes from './Input.module.scss';
import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange?: (event: React.ChangeEvent<any>) => void;
}

export const Input: FC<Props> = props => {
  const [field, meta, { setValue }] = useField({ name: props.name });
  const changeHandler = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
    if (props.onChange) {
      props?.onChange(event);
    }
  };
  return (
    <div className={classes.input}>
      <label htmlFor={props.name}>{props.label}</label>
      <div>
        <input
          {...field}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={changeHandler}
        />
        {meta.error && <p className={classes.error}>{meta?.error}</p>}
      </div>
    </div>
  );
};

export default Input;
