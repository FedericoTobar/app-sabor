import React, { Component, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Home} from './componentes/Home';
import './App.css';
import { GrillaArticulos } from './componentes/Grilla';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formulario} from "./componentes/Formulario";

class App extends Component{
  render(){
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/detalle">
          </Route>
          <Route path="/grilla" element={<GrillaArticulos/>}/>
          <Route path="/formulario/:id" element={<Formulario/>}>
          </Route>
            <Route path="*" element={<Home/>}/>
      </Routes>
    );
  }
}

export default App;
