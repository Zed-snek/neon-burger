import React from 'react';
import style from "./ComponentsStyle.module.css";

function FoodComponent({children, className, ...props}) {
    return (
        <div className={style.main + ' ' + className} {...props}>
            {children}
        </div>
    );
}

export default FoodComponent;