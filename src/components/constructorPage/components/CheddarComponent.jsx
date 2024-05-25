import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function CheddarComponent({price}) {
    return (
        <FoodComponent className={style.cheddar}>
            Cheddar - {price}zł
        </FoodComponent>
    );
}

export default CheddarComponent;