import React from 'react';
import FoodComponent from "./FoodComponent";
import style from "./ComponentsStyle.module.css";

function ChampignonComponents({price}) {

    const divs = Array.from({ length: 5 }, (_, index) => (
        <div key={index}></div>
    ))

    return (
        <FoodComponent className={style.champignon}>
            <div>
                {divs}
            </div>
            Champignon - {price}zł
        </FoodComponent>
    );
}

export default ChampignonComponents;