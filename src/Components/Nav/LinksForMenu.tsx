import React from 'react';
import {Link} from "react-router-dom";
import {ROUTE} from "../../Routs/routingData";
import s from "./Nav.module.scss";
import st from "./BurgerNav/BurgerNav.module.scss";

type propsType ={ isBurger?: boolean }

const LinksForMenu = ({isBurger=false}: propsType) => {

    const style = isBurger? st.burgerNavItem: s.navItem

    return (
        <>
            <Link to={ROUTE.Main} className={style}>Главная</Link>
            <Link to={ROUTE.Technology} className={style}>Технология</Link>
            <Link to={ROUTE.Flight_schedule} className={style}>График полетов</Link>
            <Link to={ROUTE.Guarantees} className={style}>Гарантии</Link>
            <Link to={ROUTE.About_company} className={style}>О компании</Link>
            <Link to={ROUTE.Contacts} className={style}>Контакты</Link>
        </>
    );
};

export default LinksForMenu;