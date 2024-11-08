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
          const { name, quantity } = cartItem;
          return (
            <div key={}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
