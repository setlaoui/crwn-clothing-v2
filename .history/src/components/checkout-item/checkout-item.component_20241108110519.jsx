import './checkout-item.styles.scss';

const CheckoutItem =({cartItem})=>{
    const {name, imageUrl, price, quantity}=cartItem;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={image}
            </div>
        </div>
    )
}

export default CheckoutItem;