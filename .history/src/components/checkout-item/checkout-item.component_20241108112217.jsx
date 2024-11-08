import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity"> {quantity} </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={console.log("clic")}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
