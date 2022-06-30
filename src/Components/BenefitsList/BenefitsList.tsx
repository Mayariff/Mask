import React from 'react';
import s from './BenefitsList.module.scss'


type benefitsDataType= {
    topRow: string,
    middleRow:string,
    lowRow:string,
}
const benefits_Data: benefitsDataType[]= [{
    topRow: 'Мы',
    middleRow:'1',
    lowRow:'на рынке'
},
    {topRow: 'Гарантируем',
    middleRow:'50%',
    lowRow:'безопасность'
},
    {topRow: 'Календарик за',
    middleRow:'2001',
    lowRow:'в подарок'
},
    {topRow: 'Путешевствие',
    middleRow:'597',
    lowRow:'дней'
},
]



const BenefitsList = () => {

    return (
        <div className={s.container}>
            {benefits_Data.map((b)=> (<div className={s.benefit} key={`${b.middleRow} ${b.topRow} ${b.lowRow}`}>
                   <div>{b.topRow}</div>
                    <div className={s.accent}>{b.middleRow}</div>
                    <div>{b.lowRow}</div>
                </div>)
            )}
        </div>
    );
};

export default BenefitsList;