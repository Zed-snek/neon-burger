import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function SaladComponent({price}) {

    return (
        <FoodComponent className={style.salad}>
            Salad - {price} zł
        </FoodComponent>
    );
}

export default SaladComponent;