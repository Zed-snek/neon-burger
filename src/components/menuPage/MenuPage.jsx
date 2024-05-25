import React from 'react';
import style from './MenuPage.module.css';
import {getMenuPositions} from "../../utils/data/menu";
import MenuCategory from "./menuPosition/MenuCategory";

function MenuPage() {

    const menuPositions = getMenuPositions()
    const burgersCategory = menuPositions.filter(p => p.type === "burger")
    const drinksCategory = menuPositions.filter(p => p.type === "drink")
    const startersCategory = menuPositions.filter(p => p.type === "starter")

    return (
        <div className={style.main}>
            <MenuCategory title="Burgers" positions={burgersCategory} />
            <MenuCategory title="Starters" positions={startersCategory} />
            <MenuCategory title="Drinks" positions={drinksCategory} />
        </div>
    );
}

export default MenuPage;