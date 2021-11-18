import {useSelector, useDispatch} from 'react-redux';

import {uiActions} from '../../store/ui-slice';
import { CgShoppingBag } from 'react-icons/cg';
import classes from './CartButton.module.css';

const CartButton = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const cartHandler = () => {
        dispatch(uiActions.toggleHandler());
        dispatch(uiActions.toggleTNCHandler(false));
    }

    return (
            <div className={classes.button} onClick={cartHandler}>
                <CgShoppingBag className={classes.icon}  size={25}/>
                <span>{cart.totalQuantity}</span>
            </div>
            
    );
};

export default CartButton;  