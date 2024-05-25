import React from 'react';
import style from "./ComponentsStyle.module.css";
import FoodComponent from "./FoodComponent";

function JalapenoComponent({price}) {
    const divs = Array.from({ length: 5 }, (_, index) => (
        <div key={index}></div>
    ))

    return (
        <FoodComponent className={style.jalapeno}>
            <div>
                {divs}
            </div>
            Jalapeno - {price} zł
        </FoodComponent>
    );
}

export default JalapenoComponent;