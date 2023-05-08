import './ModalPriceList.css';
import { Link } from 'react-router-dom';
import React from 'react'
import whatsup from './whats.svg';
import email from './email.svg';
import { useState } from 'react';

const ModalPriceList = ({active2, setActive2}) => {
    let [name, setName] = useState('');
    let [number, setNumber] = useState('');
    let [Email, setEmail] = useState('');

    let [nameBorder, setNameBorder] = useState({border: 'none'});
    let [numberBorder, setNumberBorder] = useState({border: 'none'});
    let [emailBorder, setEmailBorder] = useState({border: 'none'});

    let [wBorder, setWBorder] = useState({borderColor: '#00E676'});
    let [eBorder, setEBorder] = useState({borderColor: '#D4D4D4'});

    function changeNameColor() {
        setNameBorder({border: '1.5px solid red'});
    };

    function changeNumberColor() {
        setNumberBorder({border: '1.5px solid red'});
    };

    function changeEmailColor() {
        setEmailBorder({border: '1.5px solid red'});
    }

    function changeName(event) {
        setName(event.target.value);
        setNameBorder({border: 'none'});
    };

    function changeNumber(event) {
        setNumber(event.target.value);
        setNumberBorder({border: 'none'});
    };

    function changeEmail(event) {
        setEmail(event.target.value);
        setEmailBorder({border: 'none'});
    };

    function changeWBorder() {
        setWBorder({border: '1.5px solid blue'});
    }

    function changeEBorder() {
        setEBorder({border: '1.5px solid blue'});
    }

    return (
        <div className={active2 ? "modal2 active2" : "modal2"} onClick={() => {setActive2(false)}}>
            <div className='modalContent2' onClick={e => e.stopPropagation()}>
                <button className='cancel' onClick={() => setActive2(false)}>❌</button>
                <div className='contentFlex2'>
                    <h1>КУДА ПРИСЛАТЬ <br/>ОПТОВЫЙ ПРАЙС-ЛИСТ?</h1>
                    <p>Получите оптовый прайс лист с лучшими <br/>ценами 
                    в Акмолинской области</p>
                    <div className='values'>
                        <div className='name'>
                            <p><b>Имя*</b></p>
                            <input style={nameBorder} value={name} onChange={changeName} placeholder='Введите ваше имя'></input>
                        </div>
                        <div className='email'>
                            <p><b>E-mail*</b></p>
                            <input style={emailBorder} value={Email} onChange={changeEmail} placeholder='Введите ваш E-mail'></input>
                        </div>
                        <div className='Number'>
                            <p><b>Телефон*</b></p>
                            <input style={numberBorder} value={number} onChange={changeNumber} placeholder='Введите ваш телефон'></input>
                        </div>
                        
                        <div className='organ'>
                            <p><b>Название организации</b></p>
                            <input style={{border: 'none'}} placeholder='Введите название организации'></input>
                        </div>
                        
                        <div className='socNets'>
                            <p><b>Куда отправить прайс-лист?</b></p>
                            <button style={wBorder} className='w' onClick={() => changeWBorder()}>
                                WhatsApp 
                                <img
                                    src={whatsup}
                                />
                            </button>
                            <button style={eBorder} className='e' onClick={() => changeEBorder()}>
                                E-mail
                                <img
                                    src={email}
                                />
                            </button>
                        </div>
                        <div className='send'>
                            <button onClick={() => {
                            if ((name === '') || (number === '') || (Email === '')) {
                                alert('Заполните необходимые поля!');
                                if (name === '') {
                                    changeNameColor();
                                };
                                if (number === '') {
                                    changeNumberColor();
                                };
                                if (Email === '') {
                                    changeEmailColor();
                                }
                            } else {
                                alert('Прайс-лист отправлен!');
                                setActive2(false);
                            }
                            }}>Отправить </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ModalPriceList;