import React from "react";
import Buttons from "../buttons";
import Input from "../input";
import Styles from "./inputs.module.scss";

interface Props {}

const Inputs = () => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <form onSubmit={handleSubmit} className={Styles.inputs}>
      <Input
        label='ENTER PASSWORD (AT LEAST 8 CHARACTERS)'
        value=''
        onChange={handlePasswordChange}
        type='text'
      />

      <Input
        label='CONFIRM PASSWORD'
        value=''
        onChange={handlePasswordChange}
        type='text'
      />
      <Buttons
        backLink='/'
        forwardLink='/passwords/recovery/generate'
        backText='Go Back'
        forwardText='Create Wallet'
      />
    </form>
  );
};

export default Inputs;
