import {useSelector} from "react-redux";

import classes from "./Menu.module.css";
import AddToCartButton from "../Shop/AddToCartButton";
import img from "../../img/pasta.png";

const FOOD_DATA = [
    {
        id: "f1",
        price: "12",
        title: "Pasta",
        description: "Pasta is a type of food typically made from an unleavened dough.",
        image: img,
    },
    {
        id: "f2",
        price: "13",
        title: "Spagehetti",
        description: "Pasta is a type of food typically made from an unleavened dough.",
        image: img,
    },
    {
        id: "f3",
        price: "19",
        title: "Chicken Rice",
        description: "Pasta is a type of food typically made from an unleavened dough.",
        image: img,
    },
    {
        id: "f4",
        price: "15",
        title: "Salad",
        description: "Pasta is a type of food typically made from an unleavened dough.",
        image: img,
    },
    {
        id: "f5",
        price: "9",
        title: "Fish & Chip",
        description: "Pasta is a type of food typically made from an unleavened dough.",
        image: img,
    },
    {
        id: "f6",
        price: "17",
        title: "Pasta",
        description: "Pasta is a type of food typically made from an unleavened dough.",
        image: img,
    },
];


const Menu = () => {
    const items = useSelector(state => state.cart.items);

    const options = {
        style: 'currency',
        currency: 'MYR',
    }

    return (
        <div className={classes.wrapper}>
            {FOOD_DATA.map(food => {
                return (
                    <div className={classes.container} id={food.id} key={food.id}>
                        {
                            items?.filter(item => item?.id === food.id)
                            .map(item => <span key={item.id} className={classes.marker}>{item.quantity}</span>)
                        }
                        <img src={food.image} alt={food.title}/>
                        <h2>{food.title}</h2>
                        <p>{food.description}</p>
                        <div>
                            <span>{new Intl.NumberFormat(navigator.language, options).format(food.price)}</span>
                            <AddToCartButton className={classes.button} id={food.id} title={food.title} price={food.price} image={food.image}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );

};

export default Menu;

