import {useDispatch} from "react-redux";

import {cartActions} from "../../store/cart-slice";
import classes from "./AddToCartButton.module.css";



const AddToCartButton = (props) => {
    const dispatch = useDispatch();

    const {id, title , price, image} = props;

    const addItemHandler = () => {
        dispatch(cartActions.addToCart({id, title, price, image}));
    }


    const style = classes.button + ' ' + props.className;

    return (
        <button className={style} onClick={addItemHandler}>
            Add To Cart
        </button>
    );
}

export default AddToCartButton;