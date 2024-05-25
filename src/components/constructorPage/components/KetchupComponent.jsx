import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function KetchupComponent({price}) {

    return (
        <FoodComponent className={style.ketchup}>
            Ketchup - {price} zł
        </FoodComponent>
    );
}

export default KetchupComponent;