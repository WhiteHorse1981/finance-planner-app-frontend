import React, { useState } from 'react';
import css from './Modals.module.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { saveCredentials } from 'redux/auth/auth-slice';

export const ModalRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    console.log(credentials);
    dispatch(authOperations.register(credentials))
      .unwrap()
      .then(_ => {
        setIsSendEmail(prev => !prev);
        dispatch(saveCredentials(credentials));
      })
      .catch(error => console.error(error));

    // setName('');
    // setEmail('');
    // setPassword('');
  };

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return !isSendEmail ? (
    <div className={css.box}>
      <p className={css.title}>Registration</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <span className={css.label}>Name:</span>
          <input
            className={css.input}
            placeholder="Enter your name"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          <span className={css.label}>Email:</span>
          <input
            className={css.input}
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Password:</span>
          <input
            placeholder="Create password"
            className={css.input}
            type={typeInput ? 'password' : 'text'}
            name="password"
            onChange={handleChange}
            value={password}
          />
          <span className={css.eye} onClick={handleToggleEye}>
            {isLookPwd ? <BsEye /> : <BsEyeSlashFill />}
          </span>
        </label>
        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  ) : (
    <div className={css.box}>
      <p className={css.wasSendTitle}>
        Verification link was send to email {email}
      </p>
      <p className={css.wasSendTitle}>Check in to continue registration...</p>
    </div>
  );
};