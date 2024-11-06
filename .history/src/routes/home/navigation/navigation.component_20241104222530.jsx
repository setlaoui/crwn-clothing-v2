import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwLogo } from "../../../assets/crown.svg";

import { UserContext } from "../../../context/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../../utils/firebase/firebase.util";

const Navegation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async ()=>{
    const res = await signOutUser();
  }

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navegation;
