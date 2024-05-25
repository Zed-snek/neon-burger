import React from 'react';
import MainButton from "./MainButton";
import style from "./RedButton.module.css";

function RedButton({children, ...props}) {
    return (
        <MainButton className={style.main} {...props}>
            {children}
        </MainButton>
    );
}

export default RedButton;