import React from 'react'
import './Modal.css';
import { Link } from 'react-router-dom';

const Modal = ({active, setActive}) => {


  return (
    <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false)}}>
        <div className='modalContent' onClick={e => e.stopPropagation()}>
            <button onClick={() => setActive(false)}><Link to='/catalog'>❌</Link></button>
            <div className='contentFlex'>
                <h2>✔️</h2>
                <h1>СПАСИБО ЗА ЗАКАЗ</h1>
                <p>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>
    </div>
  )
}

export default Modal;   