import React, { Component, useEffect, useState } from 'react';

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import '../Pages/Catalog.css';
import turnButton from '../Pages/turnButton.svg';
import types from '../Pages/types.svg';
import cost from '../Pages/cost.svg';
import search from '../Components/search.svg';
import horizonLine from '../Pages/horizonLine.svg';
import brands from '../Pages/brands.svg';
import pagination from '../Pages/pagination.svg';   
import data from '../store/products.json';
import {Link} from 'react-router-dom';


const Catalog = ({handleAddProduct, modalPriceListActive, setModalPriceListActive}) => {

    let [money, setMoney] = useState(0);

        return (
            <div>
                <Header
                    money={money}
                    active2={modalPriceListActive} 
                    setActive2={setModalPriceListActive}
                    setModalPriceListActive={setModalPriceListActive}
                />
                <div className='route'>
                    <Link to='/'>Главная</Link>
                    <a href='#'>Косметика и гигиена</a>
                </div>
                <div className='mainLabel'>
                    <h1>КОСМЕТИКА И ГИГИЕНА</h1>
                    <div>
                        <label>Сортировка:</label>
                        <select>
                            <option>По названию</option>
                            <option>По цене</option>
                            <option>По убыванию</option>
                            <option>По возростанию</option>
                        </select>
                        <img
                            src={turnButton}
                            alt='turnButton'
                            className='turnButton'
                        />
                    </div>
                </div>
                <img
                    src={types}
                    alt='types'
                    className='types'
                />
                <div className='mainBlock'>
                    <div className='leftPart'>
                        <div className='Params'> 
                            <label>ПОДБОР ПО ПАРАМЕТРАМ</label>
                            <p>Цена ₸</p>
                            <img
                                src={cost}
                                alt='cost'
                                className='cost'
                            />
                        </div>
                        <div className='Proizvoditel'>
                            <label>Производитель</label>
                            <form>
                                <input placeholder='Поиск...'></input>
                                <button>
                                    <img
                                        src={search}
                                        alt='search'
                                        className='search'
                                    />
                                </button>
                            </form>
                            <div id='checkbox1' className='checkbox'>
                                <input type='checkbox'></input>
                                <label>Grifon (56)</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label>Boyscout (66)</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label>Paclan (166)</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label>Булгари Грин (21)</label>
                            </div>
                            <button className='showAll'>Показать все ▼</button>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='Brand'>
                            <label>Бренд</label>
                            <form>
                                <input placeholder='Поиск...'></input>
                                <button>
                                    <img
                                        src={search}
                                        alt='search'
                                        className='search'
                                    />
                                </button>
                            </form>
                            <div id='checkbox2' className='checkbox'>
                                <input type='checkbox'></input>
                                <label>Nivea (56)</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label>GRIFON (66)</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label>Домашний сундук (166)</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label>HELP (21)</label>
                            </div>
                            <button id='show' className='showAll'>Показать все ▼</button>
                            <button className='button2'>Показать</button>
                            <button className='button3'>🗑</button>
                        </div>
                        <div className='uhodZaTelom'>
                            <label>Уход за телом</label>
                            <a href=''>Эпиляция и депиляция</a>
                            <a href=''>Средства для ванны и душа</a>
                            <a href=''>Скрабы, пилинги и пр.</a>
                            <a href=''>Мочалки и губки для тела</a>
                            <a href=''>Кремы, лосьоны, масла</a>
                            <a href=''>Интимный уход</a>
                            <a href=''>Дезодоранты, антиперспиранты</a>
                            <a href=''>Гели для душа</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='uhodZaRukami'>
                            <label>Уход за руками</label>
                            <a href=''>Увлажнение и питание</a>
                            <a href=''>Средства для ногтей</a>
                            <a href=''>Мыло твердое</a>
                            <a href=''>Мыло жидкое</a>
                            <a href=''>Крем для рук</a>
                            <a href=''>Защита рук</a>
                            <a href=''>Жидкость для снятия лака</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='uhodZaNogami'>
                            <label>Уход за ногами</label>
                            <a href=''>Скрабы, пилинги</a>
                            <a href=''>Пилки, ролики</a>
                            <a href=''>Крем для ног</a>
                            <a href=''>Дезодоранты для ног</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='uhodZaLicom'>
                            <label>Уход за лицом</label>
                            <a href=''>Тональные средства</a>
                            <a href=''>Средства для снятия макияжа</a>
                            <a href=''>Средства для очищения</a>
                            <a href=''>Маски, скрабы, сыворотки</a>
                            <a href=''>Крем для лица</a>
                            <a href=''>Крем для век</a>
                            <a href=''>Жидкость для снятия макияжа</a>
                            <a href=''>Гигиеническая помада</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='uhodZaVolosami'>
                            <label>Уход за волосами</label>
                            <a href=''>Шампуни</a>
                            <a href=''>Средства для укладки</a>
                            <a href=''>Средства для окрашивания волос</a>
                            <a href=''>Маски, сыворотки, масла</a>
                            <a href=''>Кондиционеры, бальзамы</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='SredstvaZagar'>
                            <label>Средства для загара</label>
                            <a href=''>Средства после загара</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='Shave'>
                            <label>Средства для бритья</label>
                            <a href=''>Станки и кассеты</a>
                            <a href=''>После бритья</a>
                            <a href=''>Для бритья</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='Present'>
                            <label>Подарочные наборы</label>
                            <a href=''>Для мужчин</a>
                            <a href=''>Для женщин</a>
                        </div>
                        <img
                            src={horizonLine}
                            alt='horizonLine'
                            className='horizonLine'
                        />
                        <div className='Brands'> 
                            <img
                                src={brands}
                                alt='brands'
                                className='brands'
                            />
                        </div>
                    </div>
                    <div className='rightPart'>
                        <div className='rowProduct'>
                            <div className='aos'>
                                <img
                                    src={data.productItems[0].productUrl}
                                    alt='aos'
                                    className='aosLogo'
                                />
                                <p>{data.productItems[0].productSizeType}: {data.productItems[0].productSize}</p>
                                <p id='aosInfo'>{data.productItems[0].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[0].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[0].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[0].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[0].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[0].productCost));
                                        handleAddProduct(data.productItems[0]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='ariel'>
                                <img
                                    src={data.productItems[1].productUrl}
                                    alt='ariel'
                                    className='arielLogo'
                                />
                                <p>{data.productItems[1].productSizeType}: {data.productItems[1].productSize}</p>
                                <p id='arielInfo'>{data.productItems[1].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[1].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[1].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[1].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[1].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[1].productCost));
                                        handleAddProduct(data.productItems[1]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='bimax'>
                                <img
                                     src={data.productItems[2].productUrl}
                                    alt='bimax'
                                    className='bimaxLogo'
                                />
                                <p>{data.productItems[2].productSizeType}: {data.productItems[2].productSize}</p>
                                <p id='bimaxInfo'>{data.productItems[2].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[2].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[2].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[2].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[2].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[2].productCost));
                                        handleAddProduct(data.productItems[2]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                        </div>
                        <div className='rowProduct'>
                            <div className='aos'>
                                <img
                                     src={data.productItems[3].productUrl}
                                    alt='aos'
                                    className='aosLogo'
                                />
                                <p>{data.productItems[3].productSizeType}: {data.productItems[3].productSize}</p>
                                <p id='aosInfo'>{data.productItems[3].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[3].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[3].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[3].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[3].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[3].productCost));
                                        handleAddProduct(data.productItems[3]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='ariel'>
                                <img
                                     src={data.productItems[4].productUrl}
                                    alt='ariel'
                                    className='arielLogo'
                                />
                                <p>{data.productItems[4].productSizeType}: {data.productItems[4].productSize}</p>
                                <p id='arielInfo'>{data.productItems[4].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[4].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[4].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[4].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[4].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[4].productCost));
                                        handleAddProduct(data.productItems[4]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='bimax'>
                                <img
                                     src={data.productItems[5].productUrl}
                                    alt='bimax'
                                    className='bimaxLogo'
                                />
                                <p>{data.productItems[5].productSizeType}: {data.productItems[5].productSize}</p>
                                <p id='bimaxInfo'>{data.productItems[5].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[5].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[5].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[5].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[5].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[5].productCost));
                                        handleAddProduct(data.productItems[5]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                        </div>
                        <div className='rowProduct'>
                            <div className='aos'>
                                <img
                                     src={data.productItems[6].productUrl}
                                    alt='aos'
                                    className='aosLogo'
                                />
                                <p>{data.productItems[6].productSizeType}: {data.productItems[6].productSize}</p>
                                <p id='aosInfo'>{data.productItems[6].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[6].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[6].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[6].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[6].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[6].productCost));
                                        handleAddProduct(data.productItems[6]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='ariel'>
                                <img
                                     src={data.productItems[7].productUrl}
                                    alt='ariel'
                                    className='arielLogo'
                                />
                                <p>{data.productItems[7].productSizeType}: {data.productItems[7].productSize}</p>
                                <p id='arielInfo'>{data.productItems[7].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[7].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[7].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[7].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[7].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[7].productCost));
                                        handleAddProduct(data.productItems[7]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='bimax'>
                                <img
                                    src={data.productItems[8].productUrl}
                                    alt='bimax'
                                    className='bimaxLogo'
                                />
                                <p>{data.productItems[8].productSizeType}: {data.productItems[8].productSize}</p>
                                <p id='bimaxInfo'>{data.productItems[8].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[8].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[8].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[8].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[8].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[8].productCost));
                                        handleAddProduct(data.productItems[8]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                        </div>
                        <div className='rowProduct'>
                            <div className='aos'>
                                <img
                                    src={data.productItems[9].productUrl}
                                    alt='aos'
                                    className='aosLogo'
                                    id='wonder'
                                />
                               <p>{data.productItems[9].productSizeType}: {data.productItems[9].productSize}</p>
                                <p id='aosInfo'>{data.productItems[9].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[9].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[9].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[9].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[9].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[9].productCost));
                                        handleAddProduct(data.productItems[9]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='ariel'>
                                <img
                                     src={data.productItems[10].productUrl}
                                    alt='ariel'
                                    className='arielLogo'
                                />
                                <p>{data.productItems[10].productSizeType}: {data.productItems[10].productSize}</p>
                                <p id='arielInfo'>{data.productItems[10].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[10].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[10].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[10].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[10].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[10].productCost));
                                        handleAddProduct(data.productItems[10]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                            <div className='bimax'>
                                <img
                                     src={data.productItems[11].productUrl}
                                    alt='bimax'
                                    className='bimaxLogo'
                                />
                                <p>{data.productItems[11].productSizeType}: {data.productItems[11].productSize}</p>
                                <p id='bimaxInfo'>{data.productItems[11].productName}</p>
                                <p>Штрихкод: <b>{data.productItems[11].productBarcode}</b></p>
                                <p>Производитель: <b>{data.productItems[11].productProducer}</b></p>
                                <p>Бренд: <b>{data.productItems[11].productBrand}</b></p>
                                <p className='cost'><b>{data.productItems[11].productCost} ₸</b></p>
                                <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        setMoney(() => (money + data.productItems[11].productCost));
                                        handleAddProduct(data.productItems[11]);
                                    }}><b>В корзину 🛒</b></button>
                            </div>
                        
                        </div>
                        
                        <img
                            src={pagination}
                            className='pagination'
                            alt='pagination'
                        />
                        <p className='info'>Магазин товаров с бытовой химией, косметикой для гигиеной и прочим. Лучшие цены и качество.
                                            Оформление заказа за один клик. Работаем для вас каждый день.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default Catalog;