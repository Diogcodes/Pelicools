import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Cards from './Components/Cards'
import Home from './Components/Home'
import AddPeli from './Components/AddPeli'
import AddUsuario from './Components/AddUsuario'
import Pelicool from './Components/Pelicool'

class App extends Component {

  render() {
    return (
      <div className="App">

      <BrowserRouter>
            <main>
                <Route exact path="/" component={Navbar}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Signin" component={Signin}/>
                <Route exact path="/agregarPC" component={AddPeli}/>
                <Route exact path="/agregarUser" component={AddUsuario}/>
                <Route exact path="/peliculas/:id" component={Pelicool}/>
            </main>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
