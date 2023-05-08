import React, { Component, useState } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import '../Pages/Oformlenie-zakaza.css';
import {Link} from 'react-router-dom';
import oplata from './oplata.svg';
import dostavka from './dostavka.svg';
import questions from './questions.svg';
import Modal from './Modal.jsx';

const OformlenieZakaza = ({cartItems, modalActive, setModalActive, modalPriceListActive, setModalPriceListActive}) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity*item.productCost, 0);

    let [name, setName] = useState('');
    let [number, setNumber] = useState('');
    let [email, setEmail] = useState('');
    let [adress, setAdress] = useState('');

    let [nameColor, setNameColor] = useState({border: 'none'});
    let [numberColor, setNumberColor] = useState({border: 'none'});
    let [emailColor, setEmailColor] = useState({border: 'none'});
    let [adressColor, setAdressColor] = useState({border: 'none'});


    function changeNameColor() {
        setNameColor({border: '2px solid red'});
    };

    function changeNumberColor() {
        setNumberColor({border: '2px solid red'});
    };

    function changeEmailColor() {
        setEmailColor({border: '2px solid red'});
    }

    function changeAdressColor() { 
        setAdressColor({border: '2px solid red'});
    };



    function changeName(event) {
        setName(event.target.value);
        setNameColor({border: 'none'});
    };

    function changeNumber(event) {
        setNumber(event.target.value);
        setNumberColor({border: 'none'});
    };

    function changeEmail(event) {
        setEmail(event.target.value);
        setEmailColor({border: 'none'});
     }

    function changeAdress(event) {
        setAdress(event.target.value);
        setAdressColor({border: 'none'});
    };

    
    return (
            <>
                <Header 
                    money={0}
                    active2={modalPriceListActive} 
                    setActive2={setModalPriceListActive}
                    setModalPriceListActive={setModalPriceListActive}
                />
                <div className='pages'>
                        <Link id='main' to='/'>Главная</Link>
                        <Link id='shoplist' to='/shoplist'>Корзина</Link>
                        <a id='Zakaz' href='#'>Оформление заказа</a>
                    </div>
                <h1 style={{marginTop: 5 + '%', marginLeft: 5 + '%'}}>Оформление заказа</h1>
                <div className='oformlenie'>
                    <div className='Part1'>
                        <h2><nav>1</nav> КОНТАКТНЫЕ ДАННЫЕ</h2>
                        <p>Имя*</p>
                        <input style={nameColor} className='Necessarily' placeholder='Введите ваше имя'
                        value={name} onChange={changeName}></input>
                        <p>Телефон*</p>
                        <input style={numberColor} className='Necessarily' placeholder='Введите ваш телефон' value={number} onChange={changeNumber}></input>
                        <p>E-mail*</p>
                        <input style={emailColor} className='Necessarily' placeholder='Введите ваш E-mail' value={email} onChange={changeEmail}></input>
                        <p>Название организации</p>
                        <input id='organization' placeholder='Введите название организации'></input>
                        <h2 id='adressDelivery'><nav>2</nav> АДРЕСС ДОСТАВКИ</h2>
                        <p>Город</p>
                        <select>
                            <option>Выберите ваш город</option>
                            <option>Кокшетау</option>
                            <option>Астана</option>
                            <option>Алматы</option>
                            <option>Другой</option>
                        </select>
                        <p>Адрес</p>
                        <input style={adressColor} className='Necessarily' placeholder='Введите адрес доставки' value={adress} onChange={changeAdress}></input>
                        <button id='podtverditZakaz' onClick={() => {
                            if ((name === '') || (number === '') || (email === '') || (adress === '')) {
                                alert('Заполните необходимые поля!');
                                if (name === '') {
                                    changeNameColor();
                                };
                                if (number === '') {
                                    changeNumberColor();
                                };
                                if (email === '') {
                                    changeEmailColor();
                                };
                                if (adress === '') {
                                    changeAdressColor();
                                };
                            } else {
                                setModalActive(true);
                            }
                        }}><b>Подтверждение заказа</b></button>
                    </div>
                    <div className='Part2'>
                        <img className='cards' src={oplata}/>
                        <img className='cards' src={dostavka}/>
                        <img className='cards' src={questions}/>
                        <h2><nav>3</nav> ДОПОЛНИТЕЛЬНО</h2>
                        <p>Комментарий</p>
                        <textarea placeholder='Введите ваш комментарий'></textarea>
                    </div>
                    <div className='Part3'>
                        <h2 id='yourZakaz'>Ваш заказ</h2>
                        {cartItems.length === 0 && <h2 style={{marginLeft: 5 + '%'}}>Невозможно оформить заказ</h2> }
                            {cartItems.map((item) => (
                                    <div key={item.id} className='oformlenieItemsList'>
                                        <img className='oformlenieImg' src={item.productUrl} alt={item.productName} style={{width:15 + '%'}}/>
                                        <div className='oformleniePart1'>
                                            <h2>{item.productName}</h2>
                                            <p>{item.productInfo}</p>
                                            <p>{item.productSizeType}: {item.productSize}</p>
                                            <div><b>{item.productCost * item.quantity}₸</b></div>
                                        </div>
                                    </div>
                        ))} 
                        <div className='itogovaya'>
                            <h3 className='Itogo'>ИТОГО</h3>
                            <p><b>{totalPrice}₸</b></p>
                        </div>
                        <Link className='edit' to='/shoplist'>Редактировать заказ ✏️</Link>
                    </div>
                </div>  
                <Footer/>
            </>
    )
}

export default OformlenieZakaza;

