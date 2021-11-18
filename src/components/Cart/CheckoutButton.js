import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import classes from "./CheckoutButton.module.css";
import {uiActions} from "../../store/ui-slice";

const CheckoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const checkoutHandler = () => {
        navigate("/home");
        dispatch(uiActions.toggleHandler());
        dispatch(uiActions.toggleCheckoutHandler());
    }

    return (
        <button onClick={checkoutHandler} className={classes.button}>
            Checkout
        </button>
    )
};

export default CheckoutButton;