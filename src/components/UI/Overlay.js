import {useDispatch, useSelector} from "react-redux";

import classes from "./Overlay.module.css";
import {uiActions} from '../../store/ui-slice';
import {cartActions} from '../../store/cart-slice';

const Overlay = () => {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const showCheckoutModal = useSelector(state => state.ui.isCheckoutValid);
    const items = useSelector(state => state.cart.items);
    const TNCValue = useSelector(state => state.ui.isTNCChecked);

    const toggleHandler = () => {
        if(showCart) dispatch(uiActions.toggleHandler());
        if(showCheckoutModal) dispatch(uiActions.toggleCheckoutHandler());

        if(items.length > 0 && TNCValue)
        dispatch(cartActions.emptyTheCart());
    }

    return <div onClick={toggleHandler} className={classes.overlay}></div>
}

export default Overlay;
