import React, {useState} from 'react';
import DefaultPositionsCategory from "./orderPositions/DefaultPositionsCategory";
import menuStyle from "../menuPage/MenuPage.module.css";
import style from "./OrderPage.module.css";
import RedButton from "../../UI/buttons/RedButton";
import {useCart} from "../../hooks/useCart";
import MainButton from "../../UI/buttons/MainButton";
import CustomBurgersPositionsCategory from "./orderPositions/CustomBurgersPositionsCategory";
import {getPriceList} from "../../utils/data/menu";

function OrderPage() {
    const {clearCart, price} = useCart()
    const [message, setMessage] = useState("")
    const [isMessage, setIsMessage] = useState(false)

    const deliveryPrice = getPriceList().delivery
    const calculatedPrice = price > 60 ? price : price + deliveryPrice

    return (
        <div className={menuStyle.main}>
            <DefaultPositionsCategory />
            <CustomBurgersPositionsCategory />

            <div className={style.summary}>
                <RedButton onClick={() => {
                    clearCart()
                    setMessage("Cart has been cleared")
                    setIsMessage(true)
                }}>
                    Clear cart
                </RedButton>

                <div className={style.price}>
                    Total price: {price}zł
                    { calculatedPrice > price
                        ? `+ ${deliveryPrice}zł delivery = ${calculatedPrice}zł`
                        : "" }
                </div>

                <MainButton onClick={() => {
                    setIsMessage(true)
                    if (price > 0)
                        setMessage(`Order is successful, price: ${calculatedPrice}zł. Our delivery driver will come in 45-60 minutes`)
                    else
                        setMessage("Order can't be completed, the cart is empty")
                    clearCart()
                }}>
                    Order
                </MainButton>
            </div>

            { isMessage ?
                <div className={style.orderedMessage}>
                    {message}
                </div>
            : <></>}
        </div>
    );
}

export default OrderPage;