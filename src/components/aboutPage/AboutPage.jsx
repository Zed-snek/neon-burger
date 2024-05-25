import React from 'react';
import style from "./AboutPage.module.css";
import textStyle from "../../style/text.module.css";
import burgerImg from "../../images/burger.jpg";
import mapImg from "../../images/map.png";
import restaurantImg from "../../images/restaurant.jpg";
import LighterBlock from "../../UI/blocks/LighterBlock";

function AboutPage() {
    return (
        <div className={style.main}>
            <LighterBlock>
                <h2 className={textStyle.cyan}>About Us</h2>

                <p>
                    Welcome to Neon Burger, a classic-style restaurant in Lublin known for its delightful burgers and
                    nostalgic
                    60s-70s music ambiance. Experience the perfect blend of flavors and retro vibes at Neon
                    Burger.
                </p>

                <div className={style.imgDiv}>
                    <img src={restaurantImg} alt="Neon Burger Restaurant"/>
                </div>
            </LighterBlock>

            <LighterBlock>
                <h2 className={textStyle.cyan}>Build Your Own Burger</h2>

                <p>Create your own burger masterpiece at our restaurant or use our online burger constructor to
                    customize your
                    order. We believe in providing you with the freedom to enjoy burgers just the way you like them.</p>
                <div className={style.imgDiv}>
                    <img src={burgerImg} alt="Customized Burger"/>
                </div>
            </LighterBlock>

            <LighterBlock>
                <h2 className={textStyle.cyan}>Visit Us</h2>

                <div className={style.mapSection}>
                    <div className={style.imgDiv + ' ' + style.mapImgDiv}>
                        <img src={mapImg} alt="Restaurant Location Map"/>
                    </div>

                    <div className={style.mapInfoDiv}>
                        <p>Location: street 3 Maja 6, Lublin</p>
                        <p>Opening Hours:</p>
                        <ul>
                            <li>Monday-Friday: 12:00 - 22:00</li>
                            <li>Saturday-Sunday: 12:00 - 02:00</li>
                        </ul>
                    </div>
                </div>
            </LighterBlock>
        </div>
    );
}

export default AboutPage;