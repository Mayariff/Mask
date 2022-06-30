import React, {useState} from 'react';
import s from "./BurgerNav.module.scss"
import LinksForMenu from "../LinksForMenu";


const BurgerNav = () => {

    const[openMenu, setOpenMenu]= useState(false)
    const onclickHandler=()=> setOpenMenu(!openMenu)

    return (
            <div className={s.burgerNav} >
                <div className={openMenu ? `${s.burgerNavItems} ${s.show}`: s.burgerNavItems} >
                    <LinksForMenu isBurger={true} />
                </div>
                <div className={openMenu ? `${s.burgerBtm} ${s.openMenu}`:s.burgerBtm} onClick={onclickHandler} >
                    <span> </span>
                </div>
            </div>
    );
};

export default BurgerNav;