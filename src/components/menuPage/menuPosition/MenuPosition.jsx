import React from 'react';
import style from "./MenuPosition.module.css";
import MainButton from "../../../UI/buttons/MainButton";

function MenuPosition({id, title, description, price, amount, onAddFunction}) {
    return (
        <div className={style.main}>
            <div>
                <div className={style.titleDiv}>
                    <div className={style.title}>
                        {title}
                    </div>

                    <div className={style.price}>
                        {amount > 0 ?
                            <div className={style.amountValue}>
                                {amount}x
                            </div>
                        : <></> }
                        <div className={style.priceValue}>
                            {price}zł
                        </div>
                    </div>
                </div>

                <div className={style.description}>
                    {description}
                </div>
            </div>

            <div>
                <MainButton onClick={() => onAddFunction(id)}>
                    Add
                </MainButton>
            </div>
        </div>
    );
}

export default MenuPosition;