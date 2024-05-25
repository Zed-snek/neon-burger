import React from 'react';
import style from "./MenuCategory.module.css";
import MenuPosition from "./MenuPosition";
import LighterBlock from "../../../UI/blocks/LighterBlock";
import {useCart} from "../../../hooks/useCart";

function MenuCategory({title, positions}) {

    const {addDefaultProduct, getAmountFromCart} = useCart()

    return (
        <LighterBlock>
            <div className={style.title}>
                {title}
            </div>

            <div className={style.positions}>
                { positions.map((position, index) =>
                    <MenuPosition
                        id={position.id}
                        key={index}
                        title={position.title}
                        price={position.price}
                        description={position.description}
                        amount={getAmountFromCart(position.id)}
                        onAddFunction={addDefaultProduct}
                    />
                )}
            </div>
        </LighterBlock>
    );
}

export default MenuCategory;