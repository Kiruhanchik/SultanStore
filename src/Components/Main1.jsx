import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import sales from './sales.svg';
import './Main.css';
import sorti from './sorti.svg';
import aos from './aos.svg';
import ariel from './ariel.svg';
import bimax from './bimax.svg';
import bottle from './bottle.svg';
import box from './box.svg';
import container2 from './container2.svg'
import group1 from './group1.svg';
import group2 from './group2.svg';
import group3 from './group3.svg';
import group4 from './group4.svg';
import group5 from './group5.svg';
import brand1 from './brand1.svg';
import brand2 from './brand2.svg';
import brand3 from './brand3.svg';
import brand4 from './brand4.svg';
import brand5 from './brand5.svg';
import brand6 from './brand6.svg';
import brand7 from './brand7.svg';
import brand8 from './brand8.svg';
import brand9 from './brand9.svg';
import brand10 from './brand10.svg';
import orangeLine from './orangeLine.svg';
import map from './map.jpg'; 
import {Link} from 'react-router-dom';
import data from '../store/products.json';


const Main1 = ({ modalPriceListActive, setModalPriceListActive}) => {

        return (
            <div>
                <Header
                    money={0}
                    active2={modalPriceListActive} 
                    setActive2={setModalPriceListActive}
                    setModalPriceListActive={setModalPriceListActive}
                />
                <div className='main_info'>
                    <h1>Бытовая химия, 
                        косметика 
                        и хозтовары
                    </h1>
                    <h2>оптом по кокчетаву и области</h2>
                    <Link to='/catalog'>В КАТАЛОГ</Link>
                    <img
                        src={sales}
                        height='60'
                        width='420'
                        className='sales'
                        alt='sales'
                    />
                </div>
                <h1 className='salesList'><nav>АКЦИОННЫЕ</nav> ТОВАРЫ</h1>
                <div className='product_list'>
                    <div className='sorti1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[8].productUrl} 
                            alt='sorti'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[8].productSize}</p>
                        <h4>{data.productItems[8].productName}</h4>
                        <p>Штрихкод: {data.productItems[8].productBarcode}</p>
                        <p>Производитель: {data.productItems[8].productProducer}</p>
                        <p>Бренд: {data.productItems[8].productBrand}</p>
                        <h3>{data.productItems[8].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='aos1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[17].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[17].productSize}</p>
                        <h4>{data.productItems[17].productName}</h4>
                        <p>Штрихкод: {data.productItems[17].productBarcode}</p>
                        <p>Производитель: {data.productItems[17].productProducer}</p>
                        <p>Бренд: {data.productItems[17].productBrand}</p>
                        <h3>{data.productItems[17].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='ariel1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[12].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[12].productSize}</p>
                        <h4>{data.productItems[12].productName}</h4>
                        <p>Штрихкод: {data.productItems[12].productBarcode}</p>
                        <p>Производитель: {data.productItems[12].productProducer}</p>
                        <p>Бренд: {data.productItems[12].productBrand}</p>
                        <h3>{data.productItems[12].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='bimax1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[13].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[13].productSize}</p>
                        <h4>{data.productItems[13].productName}</h4>
                        <p>Штрихкод: {data.productItems[13].productBarcode}</p>
                        <p>Производитель: {data.productItems[13].productProducer}</p>
                        <p>Бренд: {data.productItems[13].productBrand}</p>
                        <h3>{data.productItems[13].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='sorti1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[14].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[14].productSize}</p>
                        <h4>{data.productItems[14].productName}</h4>
                        <p>Штрихкод: {data.productItems[14].productBarcode}</p>
                        <p>Производитель: {data.productItems[14].productProducer}</p>
                        <p>Бренд: {data.productItems[14].productBrand}</p>
                        <h3>{data.productItems[14].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='aos1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[15].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[15].productSize}</p>
                        <h4>{data.productItems[15].productName}</h4>
                        <p>Штрихкод: {data.productItems[15].productBarcode}</p>
                        <p>Производитель: {data.productItems[15].productProducer}</p>
                        <p>Бренд: {data.productItems[15].productBrand}</p>
                        <h3>{data.productItems[15].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='ariel1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[16].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[16].productSize}</p>
                        <h4>{data.productItems[16].productName}</h4>
                        <p>Штрихкод: {data.productItems[16].productBarcode}</p>
                        <p>Производитель: {data.productItems[16].productProducer}</p>
                        <p>Бренд: {data.productItems[16].productBrand}</p>
                        <h3>{data.productItems[16].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                    <div className='bimax1'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={data.productItems[3].productUrl} 
                            alt='aos'
                            className='img1'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>{data.productItems[3].productSize}</p>
                        <h4>{data.productItems[3].productName}</h4>
                        <p>Штрихкод: {data.productItems[3].productBarcode}</p>
                        <p>Производитель: {data.productItems[3].productProducer}</p>
                        <p>Бренд: {data.productItems[3].productBrand}</p>
                        <h3>{data.productItems[3].productCost} ₸</h3>
                        <button onClick={() => {
                                        alert('Вы положили товар в корзину');
                                        this.setState({ money: this.state.money + 48.76 })
                                    }}>
                            В корзину
                            <img src={container2} 
                                alt='container'
                            />
                        </button>
                    </div>
                </div>
                <h1 className='salesList'><nav>КАТЕГОРИИ</nav> ТОВАРОВ</h1>
                <label>10 000+ ходовых позиций по специальным ценам</label>
                <div className='category'>
                    <a href=''>
                        <img src={group1} 
                            alt='group1'
                            className='group1'
                        />
                    </a>
                    <a href=''>
                        <img src={group2} 
                            alt='group1'
                            className='group2'
                        />
                    </a>
                    <a href=''>
                        <img src={group3} 
                            alt='group1'
                            className='group3'
                        />
                    </a>
                    <a href=''>
                        <img src={group4} 
                            alt='group1'
                            className='group4'
                        />
                    </a>
                    <a href=''>
                        <img src={group5} 
                            alt='group1'
                            className='group5'
                        />
                    </a>
                </div>
                <div className='saleInfo'>
                    <label className='label1'>*Акция действует до 04/09/22</label>
                    <h1>Название Акции</h1>
                    <label className='label2'>Условия акции в пару строк, Условия акции
                        в пару строк, Условия акции в пару строк
                    </label>
                    <a href=''>ПРИНЯТЬ УЧАСТИЕ</a> 
                </div>
                <h1 className='salesList'><nav>ЛУЧШИЕ</nav> ТОВАРЫ</h1>
                <label className='brandLabel'>От ведущих мировых брендов</label>
                <div className='brandList'>
                    <img src={brand1} 
                        alt='group1'
                    />
                    <img src={brand2} 
                        alt='group1'
                    />
                    <img src={brand3} 
                        alt='group1'
                    />
                    <img src={brand4} 
                        alt='group1'
                    />
                    <img src={brand5} 
                        alt='group1'
                    />
                    <img src={brand6} 
                        alt='group1'
                    />
                    <img src={brand7} 
                        alt='group1'
                    />
                    <img src={brand8} 
                        alt='group1'
                    />
                    <img src={brand9} 
                        alt='group1'
                    />
                    <img src={brand10} 
                        alt='group1'
                    />
                </div>
                <img src={orangeLine} 
                        alt='orangeLine'
                        className='orangeLine'
                />
                <img src={map} 
                        alt='map'
                        className='map'
                />
                <Footer/>
            </div>
        );
    }

export default Main1;