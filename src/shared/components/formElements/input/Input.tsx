import React, { FC, FocusEvent, HTMLInputTypeAttribute, ChangeEvent } from 'react';
import classes from './Input.module.scss';
import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = props => {
  const [field, meta, { setValue, setTouched }] = useField({ name: props.name });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) {
      props?.onChange(event);
    }
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    if (props.onBlur) {
      props.onBlur(event);
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
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {meta.error && <p className={classes.error}>{meta?.error}</p>}
      </div>
    </div>
  );
};

export default Input;
