import React, { Component, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Home} from './componentes/Home';
import './App.css';

class App extends Component{
  render(){
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
            <Route path="/detalle">
            HOLA DESDE RAMA VF
            </Route>
            <Route path="*" element={<Home/>}/>
      </Routes>
    );
  }
}

export default App;
