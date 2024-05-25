import React from 'react';
import style from "../../menuPage/menuPosition/MenuPosition.module.css";
import orderPositionStyle from "./OrderPosition.module.css";
import QuantityInput from "../../../UI/inputs/QuantityInput";

function OrderPosition({title, description, price, quantity, changeQuantity}) {
    return (
        <div>
            <div className={style.titleDiv}>
                <div className={style.title}>
                    {title}
                </div>

                <div className={style.price}>
                    <QuantityInput value={quantity} changeQuantity={changeQuantity}/>
                    <div className={orderPositionStyle.priceWithX}>
                        <div>
                            x
                        </div>
                        <div className={style.priceValue}>
                            {price}zł
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.description}>
                {description}
            </div>
        </div>
    );
}

export default OrderPosition;