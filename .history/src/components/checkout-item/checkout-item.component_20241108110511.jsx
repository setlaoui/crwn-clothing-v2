import './checkout-item.styles.scss';

const CheckoutItem =({cartItem})=>{
    const {name, imageUrl, price, quantity}=cartItem;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <im
            </div>
        </div>
    )
}

export default CheckoutItem;