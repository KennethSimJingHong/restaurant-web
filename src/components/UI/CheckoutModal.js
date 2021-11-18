import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';
import {useSelector, useDispatch} from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./CheckoutModal.module.css";
import {uiActions} from '../../store/ui-slice';
import {cartActions} from '../../store/cart-slice';
import { Fragment } from 'react';

const modalData = [
    {
        icon: <AiOutlineCheckCircle size={100} style={{ background: "transparent" }}/>,
        title: "Great!",
        info: "Your order successfully made."
    },
    {
        icon: <AiOutlineCloseCircle size={100} style={{ background: "transparent" }}/>,
        title: "Oh No!",
        info: "Something wrong with your order."
    },
]

const CheckoutModal = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const TNCValue = useSelector(state => state.ui.isTNCChecked);
    const isCheckoutValid = useSelector(state => state.ui.isCheckoutValid);

    const toggleHandler = () => {
        dispatch(uiActions.toggleCheckoutHandler());

        if(items.length > 0 && TNCValue)
        dispatch(cartActions.emptyTheCart());
    }

    const animationTiming = {
        enter: 500,
        exit: 0
    }

    return (
        <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isCheckoutValid}
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: `${classes.COModalOpen}`,
            exit: '',
            exitActive: ''
        }}
        >
            <div className={classes.checkoutModal}>
                {
                    (items.length === 0 || TNCValue === false) ? 
                    <Fragment>
                        <div className={classes.checkoutModalRColor}>
                            {modalData[1].icon}
                        </div>
                        <div>
                            <h2>{modalData[1].title}</h2>
                            <p>{modalData[1].info}</p>
                            <button onClick={toggleHandler}><AiOutlineClose style={{ background: "transparent", verticalAlign:"middle"}}/> Close</button>
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <div className={classes.checkoutModalGColor}>
                            {modalData[0].icon}
                        </div>
                        <div>
                            <h2>{modalData[0].title}</h2>
                            <p>{modalData[0].info}</p>
                            <button onClick={toggleHandler}><AiOutlineClose style={{ background: "transparent", verticalAlign:"middle"}}/> Close</button>
                        </div>
                    </Fragment>
                }
            </div>
        </CSSTransition>
    );
};

export default CheckoutModal;