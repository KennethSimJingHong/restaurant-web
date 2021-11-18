import {useSelector, useDispatch} from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./Cart.module.css";
import CheckoutButton from "./CheckoutButton";
import {cartActions} from '../../store/cart-slice';
import {uiActions} from '../../store/ui-slice';

const Cart = () => {
    const dispatch = useDispatch(); 
    const cart = useSelector(state => state.cart);
    const showCart = useSelector(state => state.ui.cartIsVisible);

    const options = {
        style: "currency",
        currency : "MYR",
    }

    const addItemHandler = (id, title, price, image) => {
        dispatch(cartActions.addToCart({id, title, price, image}));
    } 

    const removeItemHandler = (id) => {
        dispatch(cartActions.removeFromCart(id));
    } 

    const checkboxHandler = () => {
        const checkingCheckbox = document.querySelector(".checkbox").checked;
        dispatch(uiActions.toggleTNCHandler(checkingCheckbox));
    }

    const animationTiming = {
        enter: 500,
        exit: 0
    }

    return (
        <CSSTransition 
        mountOnEnter 
        unmountOnExit 
        in={showCart} 
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: `${classes.CartModalOpen}`,
            exit: '',
            exitActive: ''
        }}>
            <div className={classes.container}>
                <section>
                    <div>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Total</span>
                    </div>
                    <div>
                        {
                            cart.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        <span>
                                            <img src={item.image} alt={item.name}/>
                                        </span>
                                        <span>{Intl.NumberFormat(navigator.language, options).format(item.price)}</span>
                                        <span><button onClick={() => removeItemHandler(item.id)}>−</button>{item.quantity}<button onClick={() => addItemHandler(item.id, item.name, item.price, item.image)}>+</button></span>
                                        <span>{Intl.NumberFormat(navigator.language, options).format(item.totalPrice)}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
                <section>
                    <div>
                        <span>cart total</span><span>{Intl.NumberFormat(navigator.language, options).format(cart.totalPrice)}</span>
                        <p>Shipping & taxes calculated at checkout</p>
                        <input type="checkbox" onClick={checkboxHandler} className="checkbox"/><span className={classes.tnc}>I agree to Terms & Conditions</span>  
                        <CheckoutButton/>
                    </div>
                </section>
            </div>
        </CSSTransition>
    );
};

export default Cart;