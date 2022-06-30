import React from 'react';
import s from './Nav.module.scss'
import BurgerNav from "./BurgerNav/BurgerNav";
import Logo from "../Logo/Logo";
import LinksForMenu from "./LinksForMenu";

const Nav = () => {


    return (
        <div className={s.header}>
            <div className={s.container}>
                <Logo />
                <div className={s.navigation}>
                    <LinksForMenu />
                </div>
                <BurgerNav/>
            </div>
        </div>
    );
};

export default Nav;