import React, {useContext} from 'react';
import LighterBlock from "../../../UI/blocks/LighterBlock";
import menuCategoryStyle from "../../menuPage/menuPosition/MenuCategory.module.css";
import {MainContext} from "../../../context";
import OrderPosition from "./OrderPosition";
import {useBurgerComponents} from "../../constructorPage/useBurgerComponents";

function CustomBurgersPositionsCategory() {

    const {customBurgers} = useContext(MainContext)
    const {calculateBurgerPrice, getDescriptionOfCustomerBurger, changeQuantityOfBurger} = useBurgerComponents()

    return (
        <div>
            <LighterBlock>
                <div className={menuCategoryStyle.title}>
                    Custom burgers
                </div>

                <div>
                    { customBurgers.length > 0
                        ? customBurgers.map((burger, index) =>
                            <OrderPosition
                                changeQuantity={newQuantity => changeQuantityOfBurger(index, newQuantity)}
                                quantity={burger.quantity}
                                description={getDescriptionOfCustomerBurger((burger.components))}
                                price={calculateBurgerPrice(burger.components)}
                                title={"Customer burger " + (index + 1)}
                                key={index}
                            />)
                        : <i>No custom burgers were added to cart</i>
                    }
                </div>
            </LighterBlock>
        </div>
    );
}

export default CustomBurgersPositionsCategory;