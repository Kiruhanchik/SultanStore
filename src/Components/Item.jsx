import React, { Component, useState } from 'react';
import '../Components/Item.css';

const Item = (props) => {

        let [count,setCount] = useState(1);
        let [price,setPrice] = useState(props.productCost);


        return (
            <div className='item'>  
                <img src={props.productUrl} />
                <div className='item-body'>
                    <div className='item-body-1'>
                        <h3 className='item-title'>{props.productName}</h3>
                        <p className='item-text'>{props.productInfo}</p>
                    </div>
                    <div className='item-body-2'>
                        <button onClick={() => {
                        if (count > 0 ) {
                            setCount(count - 1);
                        };
                        setPrice(price - props.productCost)}}>-</button>
                        <b>{count}</b>
                        <button onClick={() => {setCount(count + 1);
                        setPrice(price + props.productCost)}}>+</button>
                        <p className='item-cost'><b>{price}₸</b></p>
                        <button>🗑️</button>
                    </div>
                </div>
            </div>
        );
};

export default Item;