import {NavLink} from 'react-router-dom'; 

import CartButton from "../Cart/CartButton"
import classes from "./Header.module.css"

const Header = () => {

    return (
        <header className={classes.header}>
            <h1>Restaurant App<span>by Kenneth</span></h1>
            
            <nav>
                <ul>
                    <li><NavLink className = {(navData) => navData.isActive ? classes.active : ''} to="/home">Home</NavLink></li>
                    <li><NavLink className = {(navData) => navData.isActive ? classes.active : ''} to="/menu">Menu</NavLink></li>
                </ul>
            </nav>
            <div><CartButton/></div>
        </header>
    );
};

export default Header;