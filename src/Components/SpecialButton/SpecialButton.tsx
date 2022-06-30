import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./SpecialButton.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>




const SpecialButton = (props:  DefaultButtonPropsType) => {
    return (
            <button className={s.button} {...props} > {props.title}</button>
    );
};

export default SpecialButton;