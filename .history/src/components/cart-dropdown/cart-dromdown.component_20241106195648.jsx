import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        [].map(item => <CartItem cartItem/>)
      </div>
      <Button> Go To CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
