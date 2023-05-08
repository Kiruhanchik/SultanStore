import React, { Component, useState} from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import label from './label.png';
import vector from './vector.png';
import mail from './mail.png';
import sultan_logo from './sultan_logo.svg';
import catalog from './catalog.svg';
import girl from './Girl.svg';
import line from './Vector.svg';
import download from './download.svg';
import container from './container.svg';
import search from './search.svg';


const Header = ({setModalPriceListActive}) => {

        return (    
            <div>
                <div className='part1'>
                    <img
                        src={label}
                        height='30'
                        width='30'
                        className='jps'
                        alt='label'
                    />
                    <div className='adress'>
                        <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p> 
                        <p>(Рынок Восточный)</p>
                    </div>
                    <img
                        src={vector}
                        height='30'
                        width='5'
                        className=''
                        alt='vector'
                    />
                    <img
                        src={mail}
                        height='30'
                        width='30'
                        className='mail_img'
                        alt='mail'
                    />
                    <div className='mail'>
                        <a href='mailto: opt.sultan@mail.ru'>opt.sultan@mail.ru </a>
                        <p>На связи в любое время</p>
                    </div>
                    <ul>
                        <li><a href=''>О компании</a></li>
                        <li><a href=''>Доставка и оплата</a></li>
                        <li><a href=''>Возврат</a></li>
                        <li><a href=''>Контакты</a></li>
                    </ul>
                </div>
                <div className='part2'>
                    <img
                        src={sultan_logo}
                        height='100'
                        width='140'
                        className='sultan_logo'
                        alt='sultan_logo'
                    />
                    <Link to='/catalog' className='catalog'>
                        Каталог
                        <img
                            src={catalog}
                            height='20'
                            width='50'
                            className='catalog_img'
                            alt='catalog'
                        />
                    </Link>
                    <div className='search'>
                        <form>
                            <input type='text' placeholder='Поиск...'></input>
                        </form>
                        <button>
                            <img
                                src={search}
                                height='20'
                                width='20'
                                className='search_button'
                                alt='search'
                            />
                        </button>
                    </div>
                    <div className='calling'>
                        <a className='number' href='tel: +7 (777) 490-00-91'>+7 (777) 490-00-91</a>
                        <p>время работы: 9:00-20:00</p>
                        <a className='buy_call' href=''>Заказать звонок</a>
                    </div>
                    <img
                        src={girl}
                        height='100'
                        width='100'
                        className='girl'
                        alt='girl'
                    />
                    <img
                        src={line}
                        height='60'
                        width='15'
                        className='line'
                        alt='vector'
                    />
                    <button onClick={() => setModalPriceListActive(true)} className='prise_list'>
                        Прайс-лист
                        <img
                            src={download}
                            height='20'
                            width='50'
                            className='download'
                            alt='download'
                        />
                    </button>
                    <img
                        src={line}
                        height='60'
                        width='80'
                        className='line'
                        alt='vector'
                    />
                    <div className='container'>
                        <img
                            src={container}
                            height='60'
                            width='30'
                            className='container_img'
                            alt='container'
                        />
                        <div className='cost_container'>
                            <Link to='/shopList'><b>Корзина</b></Link>
                            <p className='cost_1'><b>{0}</b> ₸</p>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Header;
