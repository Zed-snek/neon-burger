import React from 'react';
import style from "./MainButton.module.css";

function MainButton({children, className, ...props}) {

    return (
        <button className={style.main + ' ' + className} {...props}>
            {children}
        </button>
    );
}

export default MainButton;