import React from "react";
import Footer from "../common/footer/footer";
import LogoLink from '../common/logo/logo-link';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../store/api-actions";
import {useHistory} from "react-router-dom";


const SignIn = () => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const email = loginRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return;
    }

    dispatch(login({email, password}));
    history.push(`/`);
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
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={loginRef} required className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={passwordRef} required className="sign-in__input" type="password" placeholder="Password" name="user-password"
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
