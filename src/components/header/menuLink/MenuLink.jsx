import React from 'react';
import style from "./MenuLink.module.css";
import {joinStyles} from "../../../utils/stylesUtils";
import {Link, useLocation} from "react-router-dom";

function MenuLink({children, to}) {
    const location = useLocation()

    let styles= [style.main]
    if (location.pathname === to) {
        styles.push(style.visited)
    }

    return (
        <Link to={to} className={joinStyles(styles)}>
            {children}
        </Link>
    );
}

export default MenuLink;