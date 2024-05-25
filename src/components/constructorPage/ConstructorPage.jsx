import React, {useEffect, useState} from 'react';
import style from "./ConstructorPage.module.css";
import textColors from "../../style/text.module.css";
import LighterBlock from "../../UI/blocks/LighterBlock";
import {useBurgerComponents} from "./useBurgerComponents";
import MainButton from "../../UI/buttons/MainButton";
import RadioButtonWithLabel from "../../UI/inputs/RadioButtonWithLabel";
import RedButton from "../../UI/buttons/RedButton";

function ConstructorPage() {

    const {
        priceList,
        getUIComponent,
        components,
        possibleComponents,
        clearComponents,
        addComponent,
        totalPrice,
        addBurgerToCart
    } = useBurgerComponents()

    const [isAdd, setIsAdd] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState("")

    useEffect(() => {
        if (!isAdd) {
            setSelectedRadio("")
        }
    }, [isAdd])

    const bun = getUIComponent("bun")

    return (
        <div>
            <h3>Make your own burger!</h3>
            <LighterBlock>
                <br/>
                <div className={style.burger}>
                    {bun}
                    {components.map((name, index) => getUIComponent(name, index))}

                    { isAdd ?
                        <div className={style.componentsList}>
                            { Object.keys(possibleComponents).map((key, index) =>
                                <RadioButtonWithLabel
                                    key={index}
                                    name="componentsRadio"
                                    value={key}
                                    className={style.component}
                                    selectedOption={selectedRadio}
                                    onChange={event => setSelectedRadio(event.target.value)}
                                >
                                    <div>
                                        {possibleComponents[key]}
                                    </div>
                                    <div>
                                        {priceList[key]}zł
                                    </div>
                                </RadioButtonWithLabel>
                            )}
                        </div>
                    : <></> }

                    <div className={style.buttons}>
                        { isAdd ?
                            <>
                                <RedButton onClick={() => setIsAdd(false)}>
                                    Cancel
                                </RedButton>
                                <MainButton onClick={() => {
                                    if (selectedRadio)
                                        addComponent(selectedRadio)
                                    setIsAdd(false)
                                }}>
                                    Add
                                </MainButton>
                            </>
                            :
                            <MainButton onClick={() => setIsAdd(true)}>
                                Add
                            </MainButton>
                        }
                    </div>
                    {bun}
                </div>
                <br/>

                <div className={style.burgerInfo}>
                    <div>
                        <RedButton onClick={clearComponents}>
                            Clear burger
                        </RedButton>
                    </div>

                    <div className={style.price}>
                        Total: burger {totalPrice - priceList.service}zł + service {priceList.service}zł = <span className={textColors.cyan}>
                            {totalPrice}zł
                        </span>
                    </div>

                    <div>
                        <MainButton onClick={addBurgerToCart}>
                            Add to order
                        </MainButton>
                    </div>
                </div>
            </LighterBlock>
        </div>
    );
}

export default ConstructorPage;