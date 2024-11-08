import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./sheckout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>I am a checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span></span>
              <span
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
