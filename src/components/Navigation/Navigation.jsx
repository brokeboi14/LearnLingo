import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import sprite from "../../assets/icons/sprite.svg"

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
          <div className={css.logoContainer}>
            <svg className={css.logoIcon} width={28} height={28}>
            <use href={`${sprite}#logo-icon`}></use>
            </svg>
            <p className={css.logoText}>LearnLingo</p>
          </div>
            <nav className={css.nav}>
              <NavLink className={css.navLink} to="/">
                Home
              </NavLink>
              <NavLink className={css.navLink} to="/teachers">
                Teachers
              </NavLink>
            </nav>
            <div className={css.authorizationContainer}>
                <button className={css.logInBtn}>
                    <svg className={css.logInIcon} width={20} height={20}>
                    <use href={`${sprite}#log-in-icon`}></use>
                    </svg>
                    <p className={css.logInText}>Log in</p>
                </button>
                <button className={css.registrationBtn}>
                    Registration
                </button>
            </div>
      </header>
    </>
  );
};

export default Navigation;