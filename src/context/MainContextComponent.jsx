import React, {useState} from 'react';
import {MainContext} from "./index";

function MainContextComponent({children}) {

    const [defaultPositions, setDefaultPositions] = useState({})
    const [customBurgers, setCustomBurgers] = useState([])

    return (
        <MainContext.Provider value={{
            defaultPositions,
            setDefaultPositions,
            customBurgers,
            setCustomBurgers
        }}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContextComponent;