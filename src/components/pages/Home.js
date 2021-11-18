import {Link} from "react-router-dom";
import { Fragment, useEffect } from "react";

import classes from "./Home.module.css";
import img from "../../img/spaghetti.png";


const Home = () => {
    const exploreBtnHandler = () => {
        const wrapper2 = document.querySelectorAll(".section")[0];
        wrapper2.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        const allSections = document.querySelectorAll(".section");
        const allImgs = document.querySelectorAll(".section img");

        const revealSection = function(entries, observer){
            const [entry] = entries; 
            if(!entry.isIntersecting) return;
            entry.target.classList.remove(`${classes.sectionHidden}`);
            observer.unobserve(entry.target);
        }

        const unblurImg = function(entries, observer){
            const [entry] = entries;
            if(!entry.isIntersecting) return;
            entry.target.classList.remove(`${classes.imgFilter}`);
            observer.unobserve(entry.target);
        }

        const sectionObserver = new IntersectionObserver(revealSection,{
            root: null,
            threshold: 0.25,
        })

        const imgObserver = new IntersectionObserver(unblurImg,{
            root: null,
            threshold: 0.25,
        })

        allSections.forEach(function(section){
            sectionObserver.observe(section);
            section.classList.add(`${classes.sectionHidden}`);
        }) 

        allImgs.forEach(function(img){
            imgObserver.observe(img);
            img.classList.add(`${classes.imgFilter}`);
        })
        
    }, []);

     

    return (
        <Fragment>
            <div className={classes.wrapper1}>
                <div>  
                    <h1>Best Food For Your <span>Taste</span></h1>
                    <p>Hey ! Our delicious food is waiting for you , we always serve you with fresh item of food.</p>
                    <button onClick={exploreBtnHandler}>Explore Us</button>
                    <Link to="/menu"><button>Order Now</button></Link>
                </div>
                    <img src={img} alt="pasta"/>
                    <div className={classes.background}></div>
            </div>
            <div className={classes.wrapper2 + " section"}>
                <section>
                    <span>01</span>
                    <h3>Great Location</h3>
                    <p>Lorem ipsum dolor sit amet, etur advoluptatem voluptatem</p>
                </section>
                <section>
                    <span>02</span>
                    <h3>Natural Environment</h3>
                    <p>Lorem ipsum dolor sit amet, etur advoluptatem voluptatem</p>
                </section>
                <section>
                    <span>03</span>
                    <h3>Healthy Food</h3>
                    <p>Lorem ipsum dolor sit amet, etur advoluptatem voluptatem</p>
                </section>
            </div>
            <div className={classes.wrapper3  + " section"}>
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80" alt="about us"/>
                <div>
                    <span>About Us</span>
                    <h3>Clients Satisfaction is our first concern.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className={classes.wrapper3  + " section"}>
                <div>
                    <span>Exclusive Menu</span>
                    <h3>Check our exclusive and delicious menu</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="exclusive menu"/>
            </div>
            <div className={classes.wrapper4  + " section"}>
                <section>
                    <span>Let's Start</span>
                    <p>Craving and want to order the food?</p>
                    <Link to="/menu"><button>Start Order Now</button></Link>
                </section>
            </div>
        </Fragment>
    );
};

export default Home;

