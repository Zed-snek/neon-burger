import React, {useContext} from 'react';
import menuCategoryStyle from "../../menuPage/menuPosition/MenuCategory.module.css";
import LighterBlock from "../../../UI/blocks/LighterBlock";
import OrderPosition from "./OrderPosition";
import {MainContext} from "../../../context";
import {getMenuPositions} from "../../../utils/data/menu";
import {useCart} from "../../../hooks/useCart";

function DefaultPositionsCategory() {
    const {changeDefaultProductQuantity} = useCart()

    const {defaultPositions} = useContext(MainContext)
    const menuPositions = getMenuPositions()

    return (
        <div>
            <LighterBlock>
                <div className={menuCategoryStyle.title}>
                    Menu positions
                </div>

                <div>
                    {Object.entries(defaultPositions).length > 0
                        ? Object.entries(defaultPositions).map((p, index) => {
                            const [key, quantity] = p
                            const position = menuPositions.find(menuPosition => menuPosition.id === key)
                            return <OrderPosition
                                changeQuantity={newQuantity => changeDefaultProductQuantity(position.id, newQuantity)}
                                quantity={quantity}
                                description={position.description}
                                price={position.price}
                                title={position.title}
                                key={index}
                            />
                        })
                        : <i>Nothing from menu was added to cart</i>
                    }
                </div>
            </LighterBlock>
        </div>
    );
}

export default DefaultPositionsCategory;