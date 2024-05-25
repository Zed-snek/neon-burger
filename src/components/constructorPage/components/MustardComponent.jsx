import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function MustardComponent({price}) {

    return (
        <FoodComponent className={style.mustard}>
            Mustard - {price} zł
        </FoodComponent>
    );
}

export default MustardComponent;