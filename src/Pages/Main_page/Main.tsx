import React from 'react';
import s from './Main.module.scss'
import BenefitsList from "../../Components/BenefitsList/BenefitsList";
import SpecialButton from "../../Components/SpecialButton/SpecialButton";

const Main = () => {

    return (<div className={s.container}>
                    <div className={s.block1}>
                        <h1 className={s.header}> ПУТЕШЕВСТВИЕ</h1>
                        <h2 className={s.headerSmall}> на красную планету</h2>
                        <SpecialButton title={'Начать путешествие'}  onClick={()=>alert('Путушествие скоро начнется')}/>
                    </div>
                <BenefitsList />
        </div>
    )
};

export default Main;