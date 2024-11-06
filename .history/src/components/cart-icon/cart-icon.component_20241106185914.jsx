import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

const CartIcon=()=>{
    const {isCartOpen} = useContext
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )

}

export default CartIcon;