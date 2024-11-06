import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity } = cartItem;
  return (
    <div className="cart-item-containe">
        <img src={imageUrl}/>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
