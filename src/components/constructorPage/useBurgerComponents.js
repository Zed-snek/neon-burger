import {useMemo, useState} from "react";
import BunComponent from "./components/BunComponent";
import BeefPattyComponent from "./components/BeefPattyComponent";
import CheddarComponent from "./components/CheddarComponent";
import BeaconComponent from "./components/BeaconComponent";
import ChampignonComponents from "./components/ChampignonComponents";
import SaladComponent from "./components/SaladComponent";
import TomatoComponent from "./components/TomatoComponent";
import JalapenoComponent from "./components/JalapenoComponent";
import OnionComponent from "./components/OnionComponent";
import KetchupComponent from "./components/KetchupComponent";
import MustardComponent from "./components/MustardComponent";
import {getPriceList} from "../../utils/data/menu";
import {useCart} from "../../hooks/useCart";

export function useBurgerComponents() {

    const [components, setComponents] = useState([])
    const {addBurger, changeQuantityOfBurger} = useCart()

    const priceList = getPriceList()

    const possibleComponents = {
        beefPatty: "Beef patty",
        cheddar: "Cheddar",
        beacon: "Beacon",
        champignon: "Champignon",
        salad: "Salad",
        tomato: "Tomato",
        jalapeno: "Jalapeño",
        onion: "Onion",
        ketchup: "Ketchup",
        mustard: "Mustard"
    }

    const totalPrice = useMemo(() => {
        return calculateBurgerPrice(components)
    }, [components])

    function calculateBurgerPrice(componentsArray) {
        return componentsArray.reduce((total, component) => total + priceList[component], priceList.bun * 2) + priceList.service
    }

    function getDescriptionOfCustomerBurger(componentsArray) {
        return componentsArray.map(key => possibleComponents[key]).join(', ')
    }

    function getUIComponent(name, index) {
        switch (name) {
            case "bun":
                return <BunComponent price={priceList.bun} />
            case "beefPatty":
                return <BeefPattyComponent price={priceList.beefPatty} key={index} />
            case "cheddar":
                return <CheddarComponent price={priceList.cheddar} key={index} />
            case "beacon":
                return <BeaconComponent price={priceList.beacon} key={index} />
            case "champignon":
                return <ChampignonComponents price={priceList.champignon} key={index} />
            case "salad":
                return <SaladComponent price={priceList.salad} key={index} />
            case "tomato":
                return <TomatoComponent price={priceList.tomato} key={index} />
            case "jalapeno":
                return <JalapenoComponent price={priceList.jalapeno} key={index} />
            case "onion":
                return <OnionComponent price={priceList.onion} key={index} />
            case "ketchup":
                return <KetchupComponent price={priceList.ketchup} key={index} />
            case "mustard":
                return <MustardComponent price={priceList.mustard} key={index} />
        }
    }

    function addComponent(name) {
        setComponents(prev => [...prev, name])
    }

    function clearComponents() {
        setComponents([])
    }

    function addBurgerToCart() {
        addBurger({quantity: 1, components: components})
        clearComponents()
    }

    return {
        priceList,
        components,
        possibleComponents,
        getUIComponent,
        addComponent,
        clearComponents,
        totalPrice,
        addBurgerToCart,
        calculateBurgerPrice,
        getDescriptionOfCustomerBurger,
        changeQuantityOfBurger
    }

}