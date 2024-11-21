import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwLogo } from "../../../assets/crown.svg";

import { useSelector } from "react-redux";
import CartDropdown from "../../../components/cart-dropdown/cart-dromdown.component";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { signOutUser } from "../../../utils/firebase/firebase.util";
import "./navigation.styles.scss";

const Navegation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navegation;
