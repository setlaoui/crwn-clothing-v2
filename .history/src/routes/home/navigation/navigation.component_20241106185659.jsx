import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwLogo } from "../../../assets/crown.svg";

import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.util";
import "./navigation.styles.scss";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../../components/cart-dropdown/cart-dromdown.component";

const Navegation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} =

  const signOutHandler = async () => {
    await signOutUser();
  };

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
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown/>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navegation;
