import React from 'react';
import style from './coins.module.css';

const coins = ({ id, image, symbol, price, marketCap, priceChange }) => {
    return (
        <>
            <li className={style.listItem} key={id}>
                <span><img src={image} className={style.itemimg} alt={id} /> {id}</span>
                <sapn>{symbol.toUpperCase()}</sapn>
                <sapn>{price.toLocaleString()}</sapn>
                <sapn>{marketCap}</sapn>
                <sapn>{priceChange.toLocaleString()}</sapn>
            </li>
        </>
    );
};

export default coins;