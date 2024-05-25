import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function BunComponent({price}) {

    return (
        <FoodComponent className={style.bun}>
            Bun - {price} zł
        </FoodComponent>
    );
}

export default BunComponent;