import Button from '../button/button.component';
import './cart-dropdown.styles.scss'

const CartDropdown = () =>{
return (
    <div className='cart-dropdown-container'>
        <div className='cart-item'>
            <Button> Go To CheckOut</Button>
        </div>
    </div>
)
}

export default CartDropdown;