import React, { Component } from 'react';
import sales from './sales.svg';
import './Main.css';
import sorti from './sorti.svg';
import aos from './aos.svg';
import ariel from './ariel.svg';
import bimax from './bimax.svg';
import bottle from './bottle.svg';
import container from './container.svg';
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
import Header from './Header.jsx';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          money: 0
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData = (value) => {
    }

    render() {
        return (    
            <div>
                <div className='main_info'>
                    <h1>Бытовая химия, 
                        косметика 
                        и хозтовары
                    </h1>
                    <h2>оптом по кокчетаву и области</h2>
                    <a href='/catalog'>В КАТАЛОГ</a>
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
                    <div className='sorti'>
                        <p className='popular'>ПОПУЛЯРНОЕ</p>
                        <img src={sorti} 
                            alt='sorti'
                            className='img'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>450 мл</p>
                        <h4>Sorti Ср-во для мытья посуды Апельсин+мята</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={aos} 
                            alt='aos'
                            className='img'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>450 мл</p>
                        <h4>AOS средство для мытья посуды Crystal</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={ariel} 
                            alt='ariel'
                            className='img'
                        />
                        <img src={box} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>15X28.8 г</p>
                        <h4>ARIEL Автмат Гель СМС жидкое 
                        в растворимых капсулах Liquid Capsules Горный родник</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={bimax} 
                            alt='bimax'
                            className='img'
                        />
                        <img src={box} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>15X28.8 г</p>
                        <h4>BIMAX Порошок стиральный Автомат 100 пятен COMPACT</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={sorti} 
                            alt='sorti'
                            className='img'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>450 мл</p>
                        <h4>Sorti Ср-во для мытья посуды Апельсин+мята</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={aos} 
                            alt='aos'
                            className='img'
                        />
                        <img src={bottle} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>450 мл</p>
                        <h4>AOS средство для мытья посуды Crystal</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={ariel} 
                            alt='ariel'
                            className='img'
                        />
                        <img src={box} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>15X28.8 г</p>
                        <h4>ARIEL Автмат Гель СМС жидкое 
                        в растворимых капсулах Liquid Capsules Горный родник</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
                        <img src={bimax} 
                            alt='bimax'
                            className='img'
                        />
                        <img src={box} 
                            alt='bottle'
                            className='bottle'
                        />
                        <p className='mass'>15X28.8 г</p>
                        <h4>BIMAX Порошок стиральный Автомат 100 пятен COMPACT</h4>
                        <p>Штрихкод: 4604049097548</p>
                        <p>Производитель: Нэфис</p>
                        <p>Бренд: AOS</p>
                        <h3>48,76 ₸</h3>
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
            </div>
        );
    }
}



export default Main;