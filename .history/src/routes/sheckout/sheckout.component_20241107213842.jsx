import { useContext } from 'react';
import './sheckout.styles.scss';
import { CartContext } from '../../context/cart.context';

const Checkout = ()=>{

    const {cartItems}=useContext(CartContext);
     
    return (
        <div>
            <h1>I am a checkout page</h1>
            <div></div>
        </div>
    )
}

export default Checkout;