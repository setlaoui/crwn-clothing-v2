import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-containe">
      <img src={imageUrl} alt="name" />
      <div className="item-details">
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
