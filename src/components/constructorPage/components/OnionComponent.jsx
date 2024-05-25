import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function OnionComponent({price}) {
    const divs = Array.from({ length: 3 }, (_, index) => (
        <div key={index}></div>
    ))

    return (
        <FoodComponent className={style.onion}>
            <div>
                {divs}
            </div>
            Onion - {price} zł
        </FoodComponent>
    );
}

export default OnionComponent;