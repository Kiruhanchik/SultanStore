import React, { Component, useState } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import '../Pages/ShopList.css';
import {Link} from 'react-router-dom';

const ShopList = ({cartItems, handleAddProduct, handleRemoveProduct, handleDeleteProduct, modalPriceListActive, setModalPriceListActive}) => {

        const totalPrice = cartItems.reduce((price, item) => price + item.quantity*item.productCost, 0)

        return (
            <div>
                <Header 
                    money={0}
                    active2={modalPriceListActive} 
                    setActive2={setModalPriceListActive}
                    setModalPriceListActive={setModalPriceListActive}
                />
                <div className='pages'>
                    <Link id='main' to='/'>Главная</Link>
                    <a id='shoplist' href='#'>Корзина</a>
                </div>
                <div className='purchaseList'>
                    <label>КОРЗИНА</label>
                </div>
                {cartItems.length === 0 && <h2 style={{marginLeft: 5 + '%'}}>В корзине нет товаров</h2> }
                {cartItems.map((item) => (
                    <div key={item.id} className='cartItemsList'>
                        <img className='productImg' src={item.productUrl} alt={item.productName} style={{width:15 + '%'}}/>
                        <div className='part-1'>
                            <h2>{item.productName}</h2>
                            <p>{item.productInfo}</p>
                        </div>
                        <nav className='part-2'>
                            <button className='cartItemAdd' onClick={() => handleAddProduct(item)}><b>+</b></button>
                            <nav><b>{item.quantity}</b></nav>
                            <button className='cartItemRemove' onClick={() => handleRemoveProduct(item)}><b>-</b></button>
                            <nav className='sumCost'><b>{item.productCost * item.quantity}₸</b></nav>
                            <button onClick={() => handleDeleteProduct(item)}>🗑️</button>
                        </nav>
                    </div>
                ))}
                <div className='buy_it'>
                    <Link className='zakaz' to='/oformlenie'><b>Оформить заказ</b></Link>
                    <p>{totalPrice}₸</p>
                </div>
                <Footer/>
            </div>
        );
}

export default ShopList;