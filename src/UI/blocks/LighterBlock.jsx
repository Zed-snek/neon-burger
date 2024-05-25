import React from 'react';
import style from "./LighterBlock.module.css";

function LighterBlock({children, ...props}) {
    return (
        <div className={style.main} {...props}>
            {children}
        </div>
    );
}

export default LighterBlock;