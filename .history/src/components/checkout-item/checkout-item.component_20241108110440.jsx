import './checkout-item.styles.scss';

const CheckoutItem =({cartItem})=>{
    const {name, imageUrl, price, quantity}=cartItem;
    return (
        <div className='checkout-item-container'>
            <h2>Checkout Item</h2>
        </div>
    )
}

export default CheckoutItem;