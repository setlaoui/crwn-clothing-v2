import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const totalItems = () => {
    cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems && 0}</span>
    </div>
  );
};

export default CartIcon;
