import React, { Component, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {  } from 'react-bootstrap';
import Navbar from './commond/Navbar';
import Home from './views/Home';
import CartPanel from './components/CartPanel';

class App extends Component{
  render(){
    return (<>
      <Navbar/>
      <div className='d-flex'>
        <div className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home/>}/>
              <Route path="/detalle">
              </Route>
              <Route path="*" element={<Home/>}/>
        </Routes>
        </div>
        <div className='align-items-stretch' style={{minHeight:'100%'}}>
          <div style={{position:'sticky', top:'0px'}}>
            <CartPanel></CartPanel>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
