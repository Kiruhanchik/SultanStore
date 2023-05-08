import React from 'react';
import './Footer.css';
import sultanWhite from './sultanWhite.svg';
import emailSend from './emailSend.svg';
import download from './download.svg';
import wattsup from './wattsup.svg';
import telegram from './telegram.svg';
import visa from './visa.svg';
import mastercard from './mastercard.svg';

const Footer = () => {
    return (
        <div>
            <div className='Footer'> 
                <div className='footer1'>
                    <img
                        src={sultanWhite}
                        className='sultanWhite'
                        alt='sultanWhite'
                    />
                    <p>
                        Компания «Султан» — снабжаем розничные магазины товарами 
                        "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <p>Подпишись на скидки и акции</p>
                    <form>
                        <input placeholder='Введите ваш E-mail'></input>
                        <button>
                            <img
                                src={emailSend}
                                className='emailSend'
                                alt='emailSend'
                            />
                        </button>
                    </form>
                </div>
                <div className='footer2'>
                    <h3>Меню сайта:</h3>
                    <ul>
                        <li><a href=''>О компании</a></li>
                        <li><a href=''>Доставка и оплата</a></li>
                        <li><a href=''>Возврат</a></li>
                        <li><a href=''>Контакты</a></li>
                    </ul>
                </div>
                <div className='footer3'>
                    <h3>Категории:</h3>
                    <ul>
                        <li><a href=''>Бытовая химия</a></li>
                        <li><a href=''>Косметика и гигиена</a></li>
                        <li><a href=''>Товары для дома</a></li>
                        <li><a href=''>Товары для детей и мам</a></li>
                        <li><a href=''>Посуда</a></li>
                    </ul>
                </div>
                <div className='footer4'>
                    <h3>Скачать прайс-лист:</h3>
                    <a className='priceList' href=''>
                        Прайс-лист
                        <img
                            src={download}
                            className='download'
                            alt='download'
                        />
                    </a>
                    <p>Связь в мессенджерах:</p>
                    <a className='logo' href=''>
                        <img
                            src={wattsup}
                            className='wattsup'
                            alt='wattsup'
                        />
                    </a>
                    <a href=''>
                        <img
                            src={telegram}
                            className='telegram'
                            alt='telegram'
                        />
                    </a>
                </div>
                <div className='footer5'>
                    <h3>Контакты:</h3>
                    <ul>
                        <li><a href='tel:+7(777)490-00-91'>+7 (777) 490-00-91</a></li>
                        <li>время работы: 9:00-20:00</li>
                        <li><a href=''>Заказать звонок</a></li>
                        <li><a href='mailto:opt.sultan@mail.ru'>opt.sultan@mail.ru</a></li>
                        <li>На связи в любое время</li>
                    </ul>
                    <img
                        src={visa}
                        className='visa'
                        alt='visa'
                    />
                    <img
                        src={mastercard}
                        className='mastercard'
                        alt='mastercard'
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;