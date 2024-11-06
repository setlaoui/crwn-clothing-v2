import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwLogo } from "../../../assets/crown.svg";

import './navigation.styles.scss';

const Navegation = () => {
  const {}=user
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navegation;
