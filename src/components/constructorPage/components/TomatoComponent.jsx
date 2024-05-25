import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function TomatoComponent({price}) {

    return (
        <FoodComponent className={style.tomato}>
            Tomato - {price} zł
        </FoodComponent>
    );
}

export default TomatoComponent;