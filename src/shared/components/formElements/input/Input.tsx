import React from 'react';
import classes from './Input.module.scss';

interface InputElement {
  id: string;
  placeholder: string;
  type: string;
}

interface Props {
  input: InputElement;
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
