import React, { useState } from "react";
import IconX from "../assets/x-icon.svg";
import IconEye from "../assets/hide-icon.svg";
import IconGoogle from "../assets/google.svg";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const changePasswordShow = () => {
    setPasswordShow((password) => !password);
  };

  return (
    <form className="auth-form">
      <h2 className="auth-form__title">NFT Access</h2>
      <p className="auth-form__desc">
        Please fill your detail to access your account.
      </p>
      <label className="auth-form__email">
        <span className="auth-form__type">Email</span>
        <div className="input-container">
          <input
            className="auth-form__input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <span className="auth-form__icon" onClick={() => setEmail("")}>
            <img src={IconX} alt="X" />
          </span>
        </div>
      </label>
      <label className="auth-form__password">
        <span className="auth-form__type">Password</span>
        <div className="input-container">
          <input
            className="auth-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={passwordShow ? "text" : "password"}
          />
          <span className="auth-form__icon" onClick={changePasswordShow}>
            <img src={IconEye} alt="Eye" />
          </span>
        </div>
      </label>
      <div className="auth-form__element">
        <label className="auth-form__checkbox-container">
          <input className="auth-form__checkbox" type="checkbox" />
          <span className="auth-form__remember">Remember me</span>
        </label>
        <a href="/" className="auth-form__forget">
          Forgot Password?
        </a>
      </div>
      <button  className="btn auth-form__btn">Sign in</button>
      <a href="/" className="btn auth-form__google">
        <img src={IconGoogle} alt="Google" />
        Sign in with Google
      </a>
      <h5 className="auth-form__account">
        Don’t have an account?{" "}
        <a href="/" class="auth-form__sign">
          Sign up
        </a>
      </h5>
    </form>
  );
};
