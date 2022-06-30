import React from 'react';
import s from "./Logo.module.scss";
import logo from "../../assets/img/logo.png";
import {useNavigate} from "react-router-dom";
import {ROUTE} from "../../Routs/routingData";

const Logo = () => {
    const navigate = useNavigate()

    const onClickHandler =()=> navigate(ROUTE.Main)
    const  image= {
        backgroundImage: `url(${logo})`
    }
    return (
        <div className={s.logo}  style={image} onClick={onClickHandler}> </div>
    );
};

export default Logo;