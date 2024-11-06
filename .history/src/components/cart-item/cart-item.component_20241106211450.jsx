import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-containe">
      <img src={imageUrl} alt="name"/>
      <div className="item-details"></div>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
