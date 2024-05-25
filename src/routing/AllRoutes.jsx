import React from 'react';
import {Route, Routes} from "react-router-dom";
import MenuPage from "../components/menuPage/MenuPage";
import AboutPage from "../components/aboutPage/AboutPage";
import ConstructorPage from "../components/constructorPage/ConstructorPage";
import OrderPage from "../components/orderPage/OrderPage";

function AllRoutes() {
    return (
        <Routes>
            <Route path="" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/constructor" element={<ConstructorPage />} />
            <Route path="/order" element={<OrderPage />} />
        </Routes>
    );
}

export default AllRoutes;