import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Catalog, Delivery,Contacts, Payment, Galery } from './pages';
import {Header, Footer} from './components';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/galery" element={<Galery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
