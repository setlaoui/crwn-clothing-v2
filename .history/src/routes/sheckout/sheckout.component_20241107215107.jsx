import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./sheckout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

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
              <br/>
              <span onClick={() => addItemToCart(cartItem)}>increase</span>
              <br/>
              <span>decrease</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
