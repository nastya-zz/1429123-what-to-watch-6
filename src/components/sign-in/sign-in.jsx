import React, {useRef} from "react";
import Footer from "../common/footer/footer";
import LogoLink from '../common/logo/logo-link';
import {useDispatch} from "react-redux";
import {login} from "../../store/api-actions";
import SignInMessage from "./sign-in-message";
import {useState} from "react";


const SignIn = () => {
  const [textError, setTextError] = useState(``);
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const email = loginRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setTextError(`Please enter a valid email address and password`);
      return;
    }

    try {
      await dispatch(login({email, password}));
    } catch (e) {
      setTextError(`Please enter a valid email address`);
      loginRef.current.focus();
    }
  };

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <LogoLink linkClassNames={`logo__link`} />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form className="sign-in__form" onSubmit={handleSubmit}>
            {textError && <SignInMessage message={textError}/>}

            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>

    </>
  );
};

export default SignIn;
