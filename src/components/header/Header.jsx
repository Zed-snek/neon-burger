import React from 'react';
import style from "./Header.module.css";
import {Nav} from "react-bootstrap";
import MenuLink from "./menuLink/MenuLink";

function Header() {

    return (
        <header>
            <Nav className={style.main}>
                <MenuLink to="/">
                    Neon Burger
                </MenuLink>
                <MenuLink to="/menu">
                    Menu
                </MenuLink>
                <MenuLink to="/constructor">
                    Burger Constructor
                </MenuLink>
                <MenuLink to="/order">
                    Order
                </MenuLink>
            </Nav>
        </header>
    );
}

export default Header;