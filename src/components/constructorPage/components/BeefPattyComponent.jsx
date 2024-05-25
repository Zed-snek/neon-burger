import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function BeefPattyComponent({price}) {
    return (
        <FoodComponent className={style.beefPatty}>
            Beef patty (200g) - {price}zł
        </FoodComponent>
    );
}

export default BeefPattyComponent;