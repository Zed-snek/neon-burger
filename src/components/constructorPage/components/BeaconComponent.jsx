import React from 'react';
import FoodComponent from "./FoodComponent";
import style from "./ComponentsStyle.module.css";

function BeaconComponent({price}) {
    return (
        <FoodComponent className={style.beacon}>
            Beacon - {price}zł
        </FoodComponent>
    );
}

export default BeaconComponent;