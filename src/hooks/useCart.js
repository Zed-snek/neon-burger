import {useContext, useEffect, useMemo} from "react";
import {MainContext} from "../context";
import {getObjectFromStorage, insertObjectToStorage} from "../utils/storageUtils";
import {getMenuPositions, getPriceList} from "../utils/data/menu";

export function useCart() {

    const {defaultPositions, setDefaultPositions, customBurgers, setCustomBurgers} = useContext(MainContext)
    const priceList= getPriceList()
    const menuPositions = getMenuPositions()

    useEffect(() => {
        const storageData = getObjectFromStorage("defaultPositions")
        if (Object.keys(storageData).length > 0) {
            setDefaultPositions(storageData)
        }
    }, [])

    const price = useMemo(() => {
        let value = 0
        value += Object.keys(defaultPositions).reduce((total, key) => total + (defaultPositions[key] * menuPositions.find(element => element.id === key).price), 0)
        value += customBurgers.reduce((total, burger) => total + burger.components
            .reduce((totalComponents, component) => totalComponents + priceList[component], 0)
                * burger.quantity + priceList.service + priceList.bun * 2, 0)
        return Number((value).toFixed(2))
    }, [defaultPositions, customBurgers])

    function addDefaultProduct(productId) {
        if (productId in defaultPositions) {
            setDefaultProductToState({
                ...defaultPositions,
                [productId]: defaultPositions[productId] + 1
            })
        }
        else {
            setDefaultProductToState({
                ...defaultPositions,
                [productId]: 1
            })
        }
    }

    function changeDefaultProductQuantity(productId, newQuantity) {
        if (newQuantity > 0) {
            setDefaultProductToState({
                ...defaultPositions,
                [productId]: newQuantity
            })
        }
        else {
            let newDefaultPositions = {...defaultPositions}
            delete newDefaultPositions[productId]
            setDefaultProductToState(newDefaultPositions)
        }
    }

    function setDefaultProductToState(newObj) {
        setDefaultPositions(newObj)
        insertObjectToStorage("defaultPositions", newObj)
    }

    function getAmountFromCart(productId) {
        return productId in defaultPositions ? defaultPositions[productId] : 0
    }

    function clearCart() {
        setDefaultPositions({})
        insertObjectToStorage("defaultPositions", "")
        setCustomBurgers([])
        insertObjectToStorage("customBurgers", "")
    }

    function addBurger(burger) {
        updateCustomerBurgerStateAndStorage([...customBurgers, burger])
    }

    function changeQuantityOfBurger(index, newQuantity) {
        if (newQuantity > 0)
            updateCustomerBurgerStateAndStorage(customBurgers.map((burger, i) => {
                if (index === i)
                    return {...burger, quantity: newQuantity}
                return burger
            }))
        else
            updateCustomerBurgerStateAndStorage(customBurgers.filter((burger, i) => i !== index))
    }

    function updateCustomerBurgerStateAndStorage(newArr) {
        setCustomBurgers(newArr)
        insertObjectToStorage("customBurgers", newArr)
    }

    return {
        addDefaultProduct,
        changeDefaultProductQuantity,
        getAmountFromCart,
        addBurger,
        clearCart,
        price,
        changeQuantityOfBurger
    }
}