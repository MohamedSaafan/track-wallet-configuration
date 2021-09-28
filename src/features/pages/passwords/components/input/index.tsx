import React from "react";
import Styles from "./input.module.scss";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const Input: React.FC<Props> = ({ label, type, value, onChange }) => {
  const id = Math.random() + label;
  return (
    <div className={Styles.inputWrapper}>
      <label htmlFor={id} className={Styles.input__label}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={Styles.input}
      />
    </div>
  );
};

export default Input;
