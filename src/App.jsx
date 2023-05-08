import './App.css';
import React from 'react';
import Main1 from './Components/Main1.jsx';
import Catalog from './Pages/Catalog.jsx';
import ShopList from './Pages/ShopList.jsx';
import Oformleniezakaza from './Pages/Oformlenie-zakaza.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import data from './store/products.json';
import Modal from './Pages/Modal.jsx';
import ModalPriceList from './Pages/ModalPriceList.jsx';
import Header from './Components/Header.jsx';
 
const App = () => {

  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalPriceListActive, setModalPriceListActive] = useState(false);

  const handleAddProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist) {
        setCartItems(cartItems.map((item) => item.id === product.id ? 
        {...ProductExist, quantity: ProductExist.quantity + 1}: item));
      }
      else {
        setCartItems([...cartItems, {...product, quantity: 1}])
      }
  } 


  const handleRemoveProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      }
      else {
        setCartItems(
          cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
        )
      }
  }

  const handleDeleteProduct = (product) => {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
  }
  
    return (  
        <div>
          <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleDeleteProduct={handleDeleteProduct} setModalPriceListActive={setModalPriceListActive}>
            <Route path="/" element={<Main1 active2={modalPriceListActive} setActive2={setModalPriceListActive} setModalPriceListActive={setModalPriceListActive}/>} />
            <Route path="/catalog" element={<Catalog cartItems={cartItems} handleAddProduct={handleAddProduct} active2={modalPriceListActive} setActive2={setModalPriceListActive} setModalPriceListActive={setModalPriceListActive}/>} />
            <Route path="/shopList" element={<ShopList cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleDeleteProduct={handleDeleteProduct} active2={modalPriceListActive} setActive2={setModalPriceListActive} setModalPriceListActive={setModalPriceListActive}/>} />
            <Route path='/oformlenie' element={<Oformleniezakaza cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleDeleteProduct={handleDeleteProduct} setModalActive={setModalActive} active2={modalPriceListActive} setActive2={setModalPriceListActive} setModalPriceListActive={setModalPriceListActive}/>} />
          </Routes>
          <Modal active={modalActive} setActive={setModalActive}/>
          <ModalPriceList active2={modalPriceListActive} setActive2={setModalPriceListActive} setModalPriceListActive={setModalPriceListActive}/>
        </div>
      )
  };
  

export default App;
